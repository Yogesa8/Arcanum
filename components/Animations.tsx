"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * A lightweight wrapper component that reveals its children on scroll
 * using the Intersection Observer API and CSS transitions.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.05,
  rootMargin = "0px",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small timeout ensures the browser has painted the initial 'hidden' state
          // This is critical for elements already in the viewport on page load.
          setTimeout(() => {
            setIsVisible(true);
          }, 50);

          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-hidden",
        isVisible && "reveal-visible",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
