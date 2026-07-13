"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
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
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if mobile for video source
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setShouldPlay(false);
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

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoReady(true);
    }
  }, [shouldPlay]);

  const activeMp4 = isMobile && mobileMp4Src ? mobileMp4Src : mp4Src;
  const activeWebm = isMobile && mobileWebmSrc ? mobileWebmSrc : webmSrc;
  const hasVideoSource = activeMp4 || activeWebm;

  return (
    <div className={cn("relative w-full h-[100svh] overflow-hidden bg-brand", className)}>
      {/* Poster Image (LCP optimized) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={posterSrc}
          alt="東京促成青果"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Video layer */}
      {shouldPlay && hasVideoSource && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setIsVideoReady(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
            isVideoReady ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        >
          {activeWebm && <source src={activeWebm} type="video/webm" />}
          {activeMp4 && <source src={activeMp4} type="video/mp4" />}
        </video>
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

