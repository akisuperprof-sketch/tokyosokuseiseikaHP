import { ReactNode } from "react";
import { cn } from "./Container";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal direction="up" className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <p className="text-brand font-inter font-bold tracking-wider text-sm uppercase mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
        {title}
      </h2>
      {description && (
        <div className={cn("text-foreground-muted leading-relaxed max-w-2xl", align === "center" && "mx-auto")}>
          {description}
        </div>
      )}
    </Reveal>
  );
}
