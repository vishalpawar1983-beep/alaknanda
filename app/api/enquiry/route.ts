import { NextResponse } from "next/server";

import { enquirySchema, type ApiResult } from "@/lib/validation";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { renderSubmission, sendMail } from "@/lib/mailer";
import { siteConfig } from "@/lib/site";

/** Form submissions must never be cached or statically evaluated. */
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse<ApiResult>> {
  // ---- Rate limit: 5 enquiries per IP per 10 minutes -----------------------
  const identifier = `enquiry:${clientIp(request.headers)}`;
  const limit = rateLimit(identifier, { limit: 5, windowMs: 10 * 60_000 });

  if (!limit.success) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many submissions. Please try again in ${Math.ceil(limit.retryAfter / 60)} minute(s), or call us directly.`,
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  // ---- CSRF: same-origin check --------------------------------------------
  // The form is only ever submitted from our own pages, so a cross-origin
  // request is either a bug or an attack.
  const origin = request.headers.get("origin");
  if (origin) {
    const allowed = [siteConfig.url, "http://localhost:3000"];
    const isAllowed = allowed.some((base) => {
      try {
        return new URL(base).origin === new URL(origin).origin;
      } catch {
        return false;
      }
    });

    if (!isAllowed) {
      return NextResponse.json(
        { ok: false, message: "Request rejected." },
        { status: 403 },
      );
    }
  }

  // ---- Parse and validate --------------------------------------------------
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot was filled — accept silently so the bot does not learn anything.
  if (data.company_website) {
    return NextResponse.json({ ok: true, message: "Thank you for your enquiry." });
  }

  // ---- Deliver -------------------------------------------------------------
  const { text, html } = renderSubmission("New crew / service enquiry", {
    Name: data.name,
    Company: data.company,
    Email: data.email,
    Phone: data.phone,
    Country: data.country,
    Service: data.service,
    Requirement: data.requirement,
    Received: new Date().toISOString(),
  });

  try {
    await sendMail({
      subject: `Crew enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
      text,
      html,
      replyTo: data.email,
    });
  } catch (error) {
    console.error("[api/enquiry] delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not deliver your enquiry just now. Please call or WhatsApp us instead — we will pick it up immediately.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thank you — your enquiry is with our crewing desk. We reply the same working day, and immediately if you marked it urgent.",
  });
}
