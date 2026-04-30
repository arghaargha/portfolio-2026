import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function SectionShell({
  children,
  className,
  innerClassName,
  id,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
