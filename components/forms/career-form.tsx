"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, Honeypot, Input, Select, Textarea } from "@/components/ui/field";
import {
  careerSchema,
  type ApiResult,
  type CareerFormValues,
  type CareerInput,
} from "@/lib/validation";
import { positions, vesselTypes } from "@/lib/positions";

export function CareerForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormValues, unknown, CareerInput>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      rank: "",
      vesselType: "",
      experienceYears: "",
      cdcNumber: "",
      availability: "",
      message: "",
      company_website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as ApiResult;

      if (!response.ok || !result.ok) {
        setStatus("error");
        setServerMessage(result.message || "We could not submit your application.");
        return;
      }

      setStatus("success");
      setServerMessage(result.message);
      reset();
    } catch {
      setStatus("error");
      setServerMessage("Network error — please try again, or email us your CV directly.");
    }
  });

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-seafoam-500/25 bg-seafoam-50 p-8">
        <CheckCircle2 className="size-9 text-seafoam-500" />
        <div>
          <p className="text-lg font-semibold text-navy-900">Application received</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{serverMessage}</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative flex flex-col gap-5">
      <Honeypot register={register("company_website")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="career-name" required error={errors.name?.message}>
          <Input
            id="career-name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </Field>

        <Field label="Email address" htmlFor="career-email" required error={errors.email?.message}>
          <Input
            id="career-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>

        <Field label="Phone" htmlFor="career-phone" required error={errors.phone?.message}>
          <Input
            id="career-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
        </Field>

        <Field label="Rank applied for" htmlFor="career-rank" required error={errors.rank?.message}>
          <Select id="career-rank" aria-invalid={Boolean(errors.rank)} {...register("rank")}>
            <option value="">Select a rank</option>
            {positions.map((position) => (
              <option key={position.title} value={position.title}>
                {position.title}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Primary vessel experience"
          htmlFor="career-vessel"
          required
          error={errors.vesselType?.message}
        >
          <Select
            id="career-vessel"
            aria-invalid={Boolean(errors.vesselType)}
            {...register("vesselType")}
          >
            <option value="">Select a vessel type</option>
            {vesselTypes.map((vessel) => (
              <option key={vessel} value={vessel}>
                {vessel}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Sea experience (years)"
          htmlFor="career-experience"
          required
          error={errors.experienceYears?.message}
        >
          <Input
            id="career-experience"
            type="number"
            min={0}
            max={60}
            step={0.5}
            inputMode="decimal"
            aria-invalid={Boolean(errors.experienceYears)}
            {...register("experienceYears")}
          />
        </Field>

        <Field label="CDC number" htmlFor="career-cdc" error={errors.cdcNumber?.message}>
          <Input
            id="career-cdc"
            aria-invalid={Boolean(errors.cdcNumber)}
            {...register("cdcNumber")}
          />
        </Field>

        <Field
          label="Available from"
          htmlFor="career-availability"
          required
          error={errors.availability?.message}
          hint="e.g. Immediately, or 15 May 2026"
        >
          <Input
            id="career-availability"
            aria-invalid={Boolean(errors.availability)}
            {...register("availability")}
          />
        </Field>
      </div>

      <Field
        label="Anything else we should know"
        htmlFor="career-message"
        error={errors.message?.message}
        hint="Endorsements held, machinery experience, last vessel and rank."
      >
        <Textarea
          id="career-message"
          rows={4}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
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
          <span className="text-ink-500">
            I agree to the{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-navy-600 underline underline-offset-2 hover:text-accent-600"
            >
              privacy policy
            </Link>{" "}
            and consent to my details being shared with prospective employers.
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
            <Loader2 className="animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send /> Submit application
          </>
        )}
      </Button>

      <p className="text-xs leading-relaxed text-ink-500">
        Alaknanda Ship Management never charges seafarers any fee for registration,
        documentation or placement. If anyone claiming to represent us asks you for money,
        report it to us immediately.
      </p>
    </form>
  );
}
