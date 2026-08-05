import {
  Anchor,
  ClipboardCheck,
  Compass,
  FileCheck2,
  Package,
  Ship,
  Users,
  Wrench,
} from "lucide-react";

/**
 * Renders the icon for a service by its serialisable key.
 *
 * The mapping is a switch that returns JSX directly rather than resolving a
 * component into a variable at render time — that pattern trips React's
 * static-components rule and would recreate the element identity on every
 * render. Keeping the lookup here also means `lib/services.ts` stays free of
 * React imports, so the catalogue can move to a CMS unchanged.
 */
export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "anchor":
      return <Anchor className={className} />;
    case "clipboard-check":
      return <ClipboardCheck className={className} />;
    case "compass":
      return <Compass className={className} />;
    case "file-check":
      return <FileCheck2 className={className} />;
    case "package":
      return <Package className={className} />;
    case "users":
      return <Users className={className} />;
    case "wrench":
      return <Wrench className={className} />;
    case "ship":
    default:
      return <Ship className={className} />;
  }
}
