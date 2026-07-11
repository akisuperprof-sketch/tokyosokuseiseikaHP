import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("container mx-auto px-4 md:px-8 max-w-7xl", className)}>
      {children}
    </Component>
  );
}
