"use client";

import { useEffect, useState } from "react";
import { cn } from "./Container";

type HeroVideoProps = {
  mp4Src?: string;
  webmSrc?: string;
  mobileMp4Src?: string;
  mobileWebmSrc?: string;
  posterSrc: string;
  overlayClassName?: string;
  children: React.ReactNode;
  className?: string;
};

export function HeroVideo({
  mp4Src,
  webmSrc,
  mobileMp4Src,
  mobileWebmSrc,
  posterSrc,
  overlayClassName,
  children,
  className,
}: HeroVideoProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);

  useEffect(() => {
    // Check if mobile for video source
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setTimeout(() => setShouldPlay(false), 0);
    }
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setShouldPlay(!e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const activeMp4 = isMobile && mobileMp4Src ? mobileMp4Src : mp4Src;
  const activeWebm = isMobile && mobileWebmSrc ? mobileWebmSrc : webmSrc;

  return (
    <div className={cn("relative w-full h-[100svh] overflow-hidden bg-brand", className)}>
      {shouldPlay && (activeMp4 || activeWebm) ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          {activeWebm && <source src={activeWebm} type="video/webm" />}
          {activeMp4 && <source src={activeMp4} type="video/mp4" />}
        </video>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url('${posterSrc}')` }} 
          aria-hidden="true" 
        />
      )}
      
      {/* Overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/20", 
          overlayClassName
        )} 
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
