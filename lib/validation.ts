import { z } from "zod";

/**
 * Shared client/server validation schemas.
 *
 * The same schema instance validates the form in the browser (via
 * `@hookform/resolvers/zod`) and the request body in the route handler, so a
 * bypassed client can never widen what the server accepts.
 */

/** Loose international phone check — digits, spaces and + ( ) - only. */
const phoneRegex = /^[+()\d][\d\s()-]{6,19}$/;

/** Rejects submissions where the hidden honeypot field was filled by a bot. */
const honeypot = z
  .string()
  .max(0, { message: "Submission rejected." })
  .optional()
  .or(z.literal(""));

const name = z
  .string()
  .trim()
  .min(2, { message: "Please enter your full name." })
  .max(80, { message: "Name is too long." });

const email = z
  .string()
  .trim()
  .toLowerCase()
  .email({ message: "Please enter a valid email address." })
  .max(120);

const phone = z
  .string()
  .trim()
  .regex(phoneRegex, { message: "Please enter a valid phone number with country code." });

export const enquirySchema = z.object({
  name,
  company: z
    .string()
    .trim()
    .max(120, { message: "Company name is too long." })
    .optional()
    .or(z.literal("")),
  email,
  phone,
  country: z
    .string()
    .trim()
    .min(2, { message: "Please tell us which country you are contacting from." })
    .max(60),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  requirement: z
    .string()
    .trim()
    .min(20, { message: "Please describe your requirement in at least 20 characters." })
    .max(2000, { message: "Please keep the message under 2000 characters." }),
  consent: z.literal(true, {
    message: "Please accept the privacy policy to continue.",
  }),
  company_website: honeypot,
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const careerSchema = z.object({
  name,
  email,
  phone,
  rank: z.string().trim().min(2, { message: "Please select the rank you are applying for." }),
  vesselType: z
    .string()
    .trim()
    .min(2, { message: "Please select your primary vessel experience." }),
  experienceYears: z.coerce
    .number({ message: "Please enter your sea experience in years." })
    .min(0, { message: "Experience cannot be negative." })
    .max(60, { message: "Please enter a realistic number of years." }),
  cdcNumber: z.string().trim().max(40).optional().or(z.literal("")),
  availability: z
    .string()
    .trim()
    .min(2, { message: "Please tell us when you are available to join." })
    .max(60),
  message: z
    .string()
    .trim()
    .max(1500, { message: "Please keep the message under 1500 characters." })
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    message: "Please accept the privacy policy to continue.",
  }),
  company_website: honeypot,
});

/**
 * `experienceYears` is coerced, so the form's input shape (what the `<input>`
 * yields) differs from the validated output shape. React Hook Form needs both.
 */
export type CareerFormValues = z.input<typeof careerSchema>;
export type CareerInput = z.output<typeof careerSchema>;

export const newsletterSchema = z.object({
  email,
  company_website: honeypot,
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

/** Uniform response envelope returned by every form API route. */
export type ApiResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };
