"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, Honeypot, Input, Select, Textarea } from "@/components/ui/field";
import { enquirySchema, type ApiResult, type EnquiryInput } from "@/lib/validation";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

type EnquiryFormProps = {
  /** Pre-selects a service when the form is embedded on a service page. */
  defaultService?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function EnquiryForm({
  defaultService = "",
  tone = "light",
  className,
}: EnquiryFormProps) {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = React.useState("");
  const isDark = tone === "dark";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      service: defaultService,
      requirement: "",
      company_website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ApiResult;

      if (!response.ok || !result.ok) {
        setStatus("error");
        setServerMessage(
          result.message || "We could not send your enquiry. Please try again.",
        );
        return;
      }

      setStatus("success");
      setServerMessage(result.message);
      reset({ service: defaultService });
    } catch {
      setStatus("error");
      setServerMessage(
        "Network error — please check your connection, or email us directly.",
      );
    }
  });

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-2xl border p-8",
          isDark ? "border-white/15 bg-white/5" : "border-seafoam-500/25 bg-seafoam-50",
          className,
        )}
      >
        <CheckCircle2 className="size-9 text-seafoam-500" />
        <div>
          <p className={cn("text-lg font-semibold", isDark ? "text-white" : "text-navy-900")}>
            Enquiry received
          </p>
          <p className={cn("mt-2 text-sm leading-relaxed", isDark ? "text-mist-300" : "text-ink-700")}>
            {serverMessage}
          </p>
        </div>
        <Button variant={isDark ? "ghostLight" : "outline"} size="sm" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("relative flex flex-col gap-5", className)}>
      <Honeypot register={register("company_website")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Capt. A. Sharma"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>

        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Ocean Lines Pte Ltd"
            aria-invalid={Boolean(errors.company)}
            {...register("company")}
          />
        </Field>

        <Field label="Email address" htmlFor="email" required error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="operations@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" required error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+65 9123 4567"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>

        <Field label="Country" htmlFor="country" required error={errors.country?.message}>
          <Input
            id="country"
            autoComplete="country-name"
            placeholder="Singapore"
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "country-error" : undefined}
            {...register("country")}
          />
        </Field>

        <Field label="Service required" htmlFor="service" error={errors.service?.message}>
          <Select id="service" aria-invalid={Boolean(errors.service)} {...register("service")}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.shortTitle}>
                {service.shortTitle}
              </option>
            ))}
            <option value="Other">Other / not sure yet</option>
          </Select>
        </Field>
      </div>

      <Field
        label="Your requirement"
        htmlFor="requirement"
        required
        error={errors.requirement?.message}
        hint="Ranks needed, vessel type and flag, joining port and target date."
      >
        <Textarea
          id="requirement"
          placeholder="We need a Chief Engineer and 2nd Engineer for a 2018-built MR tanker, Liberian flag, joining Singapore mid-April."
          aria-invalid={Boolean(errors.requirement)}
          aria-describedby={
            errors.requirement ? "requirement-error" : "requirement-hint"
          }
          {...register("requirement")}
        />
      </Field>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 rounded border-mist-400 text-accent-500 focus:ring-accent-500"
            aria-invalid={Boolean(errors.consent)}
            {...register("consent")}
          />
          <span className={isDark ? "text-mist-300" : "text-ink-500"}>
            I agree to the{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-navy-600 underline underline-offset-2 hover:text-accent-600"
            >
              privacy policy
            </Link>{" "}
            and consent to being contacted about this enquiry.
          </span>
        </label>
        {errors.consent ? (
          <p role="alert" className="text-xs font-medium text-red-600">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send /> Submit enquiry
          </>
        )}
      </Button>
    </form>
  );
}
