import Image from "next/image";
import type { ReactNode } from "react";

export const APP_URL = "https://chombo-app.simamia.co.tz";
export const REGISTER_URL = `${APP_URL}/register`;
export const LOGIN_URL = `${APP_URL}/login`;

export const NAV_LINKS = [
  { href: "#huduma", label: "Huduma" },
  { href: "#hali", label: "Hali za wateja" },
  { href: "#jinsi", label: "Jinsi inavyofanya kazi" },
  { href: "#timu", label: "Boss na wafanyakazi" },
] as const;

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/logo.webp" alt="" width={36} height={36} className="size-9 rounded-[10px]" priority />
      <span className={`font-display text-[17px] font-bold tracking-tight max-[419px]:sr-only ${tone === "light" ? "text-white" : "text-ink"}`}>
        Simamia <span className={tone === "light" ? "text-brand-mint" : "text-brand"}>Chombo</span>
      </span>
    </span>
  );
}

export type Status = "ok" | "late" | "none" | "risk" | "done";

export const STATUS: Record<Status, { label: string; className: string; dot: string }> = {
  ok: { label: "Analipa kwa wakati", className: "bg-ok-bg text-ok", dot: "bg-ok" },
  late: { label: "Amechelewa", className: "bg-late-bg text-late", dot: "bg-late" },
  none: { label: "Hajalipa kabisa", className: "bg-unpaid-bg text-unpaid", dot: "bg-unpaid" },
  risk: { label: "Hatari", className: "bg-risk text-white", dot: "bg-risk" },
  done: { label: "Amemaliza deni", className: "bg-brand-light text-brand-dark", dot: "bg-brand" },
};

export function StatusBadge({ status, short, className = "" }: { status: Status; short?: string; className?: string }) {
  const s = STATUS[status];
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ${s.className} ${className}`}>
      {short ?? s.label}
    </span>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${tone === "light" ? "text-brand-mint" : "text-brand-dark"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
}) {
  return (
    <div data-reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-balance sm:text-[2.6rem] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-[17px] leading-relaxed text-pretty ${tone === "light" ? "text-white/65" : "text-muted"}`}>{lead}</p>
      )}
    </div>
  );
}

/** Small "demo data" note for product mockups. */
export function DemoNote({ className = "" }: { className?: string }) {
  return <p className={`text-xs text-muted ${className}`}>Mfano wa skrini · takwimu ni za maonyesho tu</p>;
}

type IconProps = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Icon = {
  Check: ({ className = "size-4" }: IconProps) => (
    <svg {...base} strokeWidth={2.4} className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  ),
  X: ({ className = "size-4" }: IconProps) => (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  Arrow: ({ className = "size-4" }: IconProps) => (
    <svg {...base} strokeWidth={2} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Home: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M4 11l8-7 8 7v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" />
    </svg>
  ),
  Bike: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <circle cx="5.5" cy="16" r="3.5" />
      <circle cx="18.5" cy="16" r="3.5" />
      <path d="M5.5 16l4-7h5l4 7M13 9l-1.2-3H15" />
    </svg>
  ),
  Users: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 14.2a6.5 6.5 0 013.5 5.8" />
    </svg>
  ),
  Doc: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  Wallet: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18M16 15h2" />
    </svg>
  ),
  Alert: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  ),
  Chat: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  ),
  Phone: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />
    </svg>
  ),
  Lock: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  ),
  Globe: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  ),
  Android: ({ className = "size-4" }: IconProps) => (
    <svg {...base} className={className}>
      <path d="M5 10h14v8a1 1 0 01-1 1H6a1 1 0 01-1-1zM7 10a5 5 0 0110 0M8 4.5l1.3 2M16 4.5l-1.3 2" />
      <path d="M9.5 7.6h.01M14.5 7.6h.01" />
    </svg>
  ),
};
