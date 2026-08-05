import { Info } from "lucide-react";

import { headingId, type Block } from "@/lib/blog/types";

/**
 * Renders portable content blocks as semantic HTML.
 *
 * Headings receive stable ids so the table of contents can deep-link to them,
 * and tables are wrapped in a horizontally scrollable container so wide data
 * never forces the page body to scroll sideways on mobile.
 */
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-marine">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} id={headingId(block.text)} className="scroll-mt-32">
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={index} id={headingId(block.text)} className="scroll-mt-32">
                {block.text}
              </h3>
            );

          case "p":
            return <p key={index}>{block.text}</p>;

          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <blockquote key={index}>
                {block.text}
                {block.cite ? (
                  <cite className="mt-3 block text-sm font-medium not-italic text-ink-500">
                    — {block.cite}
                  </cite>
                ) : null}
              </blockquote>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="not-prose my-8 flex gap-4 rounded-2xl border border-accent-200 bg-accent-50 p-6"
              >
                <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-600" />
                <div>
                  <p className="text-[0.9375rem] font-semibold text-navy-900">
                    {block.title}
                  </p>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-700">
                    {block.text}
                  </p>
                </div>
              </aside>
            );

          case "table":
            return (
              <div key={index} className="my-8 overflow-x-auto rounded-xl border border-mist-300">
                <table className="min-w-md">
                  <thead>
                    <tr>
                      {block.head.map((cell, cellIndex) => (
                        <th key={cellIndex} scope="col">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
