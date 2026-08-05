import * as React from "react";

import { cn } from "@/lib/utils";

const controlBase = [
  "w-full rounded-xl border bg-white px-4 text-[0.9375rem] text-ink-900",
  "placeholder:text-ink-500/70 transition-colors duration-200",
  "focus:border-navy-600 focus:outline-none focus:ring-4 focus:ring-navy-600/10",
  "disabled:cursor-not-allowed disabled:bg-mist-100",
].join(" ");

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: React.ReactNode;
};

/** Label + control + inline error, wired for `aria-describedby`. */
export function Field({
  label,
  htmlFor,
  error,
  required,
  hint,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-900">
        {label}
        {required ? (
          <span className="ml-0.5 text-accent-600" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      {children}

      {hint && !error ? (
        <p id={`${htmlFor}-hint`} className="text-xs text-ink-500">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<"input">>(
  function Input({ className, "aria-invalid": ariaInvalid, ...props }, ref) {
    return (
      <input
        ref={ref}
        aria-invalid={ariaInvalid}
        className={cn(
          controlBase,
          "h-12",
          ariaInvalid ? "border-red-400" : "border-mist-300",
          className,
        )}
        {...props}
      />
    );
  },
);

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea">
>(function Textarea({ className, "aria-invalid": ariaInvalid, rows = 5, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={ariaInvalid}
      className={cn(
        controlBase,
        "resize-y py-3 leading-relaxed",
        ariaInvalid ? "border-red-400" : "border-mist-300",
        className,
      )}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentPropsWithoutRef<"select">
>(function Select({ className, "aria-invalid": ariaInvalid, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      aria-invalid={ariaInvalid}
      className={cn(
        controlBase,
        "h-12 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23667085%27 stroke-width=%272%27 stroke-linecap=%27round%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pr-11",
        ariaInvalid ? "border-red-400" : "border-mist-300",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
});

/**
 * Off-screen honeypot. Bots fill every field they find; humans never see it.
 * Paired with server-side validation in `lib/validation.ts`.
 */
export function Honeypot({ register }: { register: React.ComponentPropsWithoutRef<"input"> }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor="company_website">Do not fill this field</label>
      <input
        id="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register}
      />
    </div>
  );
}
