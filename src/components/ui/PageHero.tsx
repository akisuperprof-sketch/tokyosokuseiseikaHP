import { cn } from "./Container";

type PageHeroProps = {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  height?: "default" | "large";
  className?: string;
};

export function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  height = "default",
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative w-full flex items-center bg-brand overflow-hidden",
        height === "large" ? "min-h-[70vh] md:min-h-[85vh]" : "min-h-[360px] md:min-h-[440px]",
        className
      )}
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-brand/80" />
        </>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 py-20 text-white">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-accent-soft font-inter font-bold tracking-widest text-sm md:text-base uppercase mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
