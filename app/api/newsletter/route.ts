import { NextResponse } from "next/server";

import { newsletterSchema, type ApiResult } from "@/lib/validation";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { renderSubmission, sendMail } from "@/lib/mailer";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse<ApiResult>> {
  const limit = rateLimit(`newsletter:${clientIp(request.headers)}`, {
    limit: 3,
    windowMs: 60 * 60_000,
  });

  if (!limit.success) {
    return NextResponse.json(
      { ok: false, message: "Too many attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const { email, company_website: honeypot } = parsed.data;

  if (honeypot) {
    return NextResponse.json({ ok: true, message: "You're subscribed." });
  }

  const { text, html } = renderSubmission("New newsletter subscription", {
    Email: email,
    Received: new Date().toISOString(),
  });

  try {
    await sendMail({ subject: `Newsletter subscription — ${email}`, text, html });
  } catch (error) {
    console.error("[api/newsletter] delivery failed", error);
    return NextResponse.json(
      { ok: false, message: "Subscription failed. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You're subscribed. Expect one email a month — nothing else.",
  });
}
