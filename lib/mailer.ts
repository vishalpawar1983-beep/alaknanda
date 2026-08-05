import nodemailer, { type Transporter } from "nodemailer";

import { contactInfo, siteConfig } from "@/lib/site";

/**
 * SMTP delivery for form submissions.
 *
 * Configuration is read from the environment so no credential is ever bundled.
 * When SMTP is not configured (local development, preview deploys) the message
 * is logged instead of sent, and `sendMail` still resolves — a missing mail
 * server must never present as a broken form to the visitor.
 */

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_FROM,
  ENQUIRY_RECIPIENT,
} = process.env;

let cachedTransporter: Transporter | null = null;

export function isMailConfigured(): boolean {
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASSWORD);
}

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const port = Number(SMTP_PORT);

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  return cachedTransporter;
}

export type MailPayload = {
  subject: string;
  /** Plain-text body — every field on its own line. */
  text: string;
  html: string;
  replyTo?: string;
};

export async function sendMail({ subject, text, html, replyTo }: MailPayload): Promise<void> {
  const to = ENQUIRY_RECIPIENT ?? contactInfo.email;
  const from = SMTP_FROM ?? `"${siteConfig.name}" <${contactInfo.email}>`;

  if (!isMailConfigured()) {
    // Keeps local development usable without SMTP credentials.
    console.warn(
      `[mailer] SMTP not configured — email not sent.\nTo: ${to}\nSubject: ${subject}\n\n${text}`,
    );
    return;
  }

  await getTransporter().sendMail({ from, to, subject, text, html, replyTo });
}

/** Renders a label/value map as a plain-text block and a simple HTML table. */
export function renderSubmission(
  heading: string,
  fields: Record<string, string | number | undefined>,
): { text: string; html: string } {
  const entries = Object.entries(fields).filter(
    ([, value]) => value !== undefined && value !== "",
  );

  const text = [heading, "", ...entries.map(([label, value]) => `${label}: ${value}`)].join(
    "\n",
  );

  const rows = entries
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 16px 8px 0;color:#667085;font-weight:500;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</th><td style="padding:8px 0;color:#1D2939">${escapeHtml(String(value))}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:640px">
  <h2 style="margin:0 0 20px;color:#0A2342;font-size:18px">${escapeHtml(heading)}</h2>
  <table style="border-collapse:collapse;font-size:14px;line-height:1.6">${rows}</table>
  <p style="margin:24px 0 0;color:#98A2B3;font-size:12px">Sent from ${escapeHtml(siteConfig.url)}</p>
</div>`;

  return { text, html };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
