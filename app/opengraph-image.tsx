import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.legalName} — Certified Crewing & Manning Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default social sharing card.
 *
 * `ImageResponse` supports flexbox and a subset of CSS only — no grid, and
 * every element that contains children needs an explicit `display`.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0A2342",
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(255,107,0,0.22), transparent 45%), radial-gradient(circle at 10% 90%, rgba(15,76,129,0.55), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#FF6B00",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: "27px", fontWeight: 600 }}>
              Alaknanda Ship Management
            </span>
            <span
              style={{
                color: "#7f9dc1",
                fontSize: "15px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Certified Crewing &amp; Manning Agency
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Certified crew &amp; manning for global shipping companies
          </span>
          <span style={{ color: "#adc3da", fontSize: "26px", marginTop: "24px" }}>
            STCW-certified seafarers, verified at source. Shortlists in 72 hours.
          </span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: "26px",
          }}
        >
          <span style={{ color: "#7f9dc1", fontSize: "21px" }}>
            Zirakpur · Mohali · Punjab · India
          </span>
          <span style={{ color: "#FF6B00", fontSize: "21px", fontWeight: 600 }}>
            alaknandaship.com
          </span>
        </div>
      </div>
    ),
    size,
  );
}
