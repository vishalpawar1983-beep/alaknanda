import { NextResponse } from "next/server";

import { careerSchema, type ApiResult } from "@/lib/validation";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { renderSubmission, sendMail } from "@/lib/mailer";
import { contactInfo, siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse<ApiResult>> {
  const identifier = `careers:${clientIp(request.headers)}`;
  const limit = rateLimit(identifier, { limit: 3, windowMs: 10 * 60_000 });

  if (!limit.success) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many applications submitted. Please try again in ${Math.ceil(limit.retryAfter / 60)} minute(s).`,
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

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
      return NextResponse.json({ ok: false, message: "Request rejected." }, { status: 403 });
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = careerSchema.safeParse(body);

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

  if (data.company_website) {
    return NextResponse.json({ ok: true, message: "Thank you for your application." });
  }

  const { text, html } = renderSubmission("New seafarer application", {
    Name: data.name,
    Email: data.email,
    Phone: data.phone,
    "Rank applied for": data.rank,
    "Vessel experience": data.vesselType,
    "Sea experience (years)": data.experienceYears,
    "CDC number": data.cdcNumber,
    "Available from": data.availability,
    Message: data.message,
    Received: new Date().toISOString(),
  });

  try {
    await sendMail({
      subject: `Seafarer application — ${data.rank} — ${data.name}`,
      text,
      html,
      replyTo: data.email,
    });
  } catch (error) {
    console.error("[api/careers] delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message: `We could not submit your application just now. Please email your CV to ${contactInfo.careersEmail} instead.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Your application is with our recruitment desk. We review every submission and will contact you if there is a berth matching your rank and experience — or to tell you what is missing from your file.",
  });
}
