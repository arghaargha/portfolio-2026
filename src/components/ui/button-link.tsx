import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "border-[#113f35] bg-[#113f35] text-white shadow-[0_18px_40px_rgba(17,63,53,0.18)] hover:bg-[#0b2f28]",
  secondary:
    "border-[#a27b33] bg-[#fff8e8] text-[#4b3515] hover:bg-[#f4e4bf]",
  ghost:
    "border-[#d7ddd4] bg-white/70 text-[#10223a] hover:border-[#78a88f] hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  download,
  external,
  className,
}: ButtonLinkProps) {
  const classNames = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b8c7f]",
    variants[variant],
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (external || download || href.startsWith("http") || href.endsWith(".pdf")) {
    return (
      <a
        className={classNames}
        href={href}
        target={external || href.endsWith(".pdf") ? "_blank" : undefined}
        rel={external || href.endsWith(".pdf") ? "noreferrer" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href}>
      {content}
    </Link>
  );
}
