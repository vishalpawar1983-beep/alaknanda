"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Honeypot, Input } from "@/components/ui/field";
import { newsletterSchema, type ApiResult, type NewsletterInput } from "@/lib/validation";

export function NewsletterForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", company_website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as ApiResult;

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message || "Subscription failed. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message);
      reset();
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  });

  if (status === "success") {
    return (
      <p className="flex items-center gap-3 rounded-xl border border-seafoam-500/30 bg-white/5 px-5 py-4 text-sm text-mist-200">
        <Check className="size-5 shrink-0 text-seafoam-500" />
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <Honeypot register={register("company_website")} />

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "newsletter-email-error" : undefined}
            className="border-white/20 bg-white/10 text-white placeholder:text-mist-400 focus:border-white/50 focus:ring-white/10"
            {...register("email")}
          />
        </div>

        <Button type="submit" size="md" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowRight />}
          Subscribe
        </Button>
      </div>

      {errors.email ? (
        <p id="newsletter-email-error" role="alert" className="mt-2 text-xs text-accent-300">
          {errors.email.message}
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="mt-2 text-xs text-accent-300">
          {message}
        </p>
      ) : null}
    </form>
  );
}
