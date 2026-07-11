import { ReactNode } from "react";
import { cn } from "./Container";
import { Reveal } from "./Reveal";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  delay?: number;
};

export function BentoCard({ children, className, size = "medium", delay = 0 }: BentoCardProps) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "relative rounded-xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col group",
        size === "small" && "col-span-1 md:col-span-4",
        size === "medium" && "col-span-1 md:col-span-6",
        size === "large" && "col-span-1 md:col-span-8",
        className
      )}
    >
      {children}
    </Reveal>
  );
}
