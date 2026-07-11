import { SVGProps } from "react";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 380 60" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      {...props}
    >
      {/* Circle */}
      <circle 
        cx="30" 
        cy="30" 
        r="24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      {/* "促" in circle - Serif font to mimic brush */}
      <text
        x="30"
        y="42"
        fontFamily="var(--font-serif), serif"
        fontSize="32"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
      >
        促
      </text>
      {/* Company Name - Sans-serif */}
      <text
        x="68"
        y="41"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="30"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="0.05em"
      >
        東京促成青果株式会社
      </text>
    </svg>
  );
}
