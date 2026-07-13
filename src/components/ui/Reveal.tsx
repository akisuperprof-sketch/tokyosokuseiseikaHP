"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "./Container";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
};

export function Reveal({ 
  children, 
  className, 
  delay = 0, 
  direction = "up",
  once = true
}: RevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const getInitialClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-6";
      case "down":
        return "-translate-y-6";
      case "left":
        return "translate-y-6 md:translate-y-0 md:translate-x-8";
      case "right":
        return "translate-y-6 md:translate-y-0 md:-translate-x-8";
      case "none":
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-opacity motion-reduce:duration-500 motion-reduce:transform-none",
        isRevealed ? "opacity-100" : `opacity-0 ${getInitialClasses()}`,
        className
      )}
      style={{ transitionDelay: isRevealed ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
