"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "default";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  size = "md",
  showText = true,
}) => {
  const isDark = variant === "dark";
  const primaryTextColor = isDark ? "text-ivory" : "text-primary";
  const subtextColor = isDark ? "text-sage-light" : "text-charcoal-muted";

  const iconSizes = {
    sm: { width: 34, height: 34 },
    md: { width: 42, height: 42 },
    lg: { width: 52, height: 52 },
  };

  const textSizes = {
    sm: "text-[15px] sm:text-lg tracking-[0.14em]",
    md: "text-lg sm:text-2xl tracking-[0.16em]",
    lg: "text-xl sm:text-3xl tracking-[0.18em]",
  };

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 select-none group focus:outline-none">
      {/* Official Supplied Brand Logo */}
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/images/brand/krivanshraj-logo.png"
          alt="Krivanshraj Wellness Center Official Logo"
          width={iconSizes[size].width}
          height={iconSizes[size].height}
          className="object-contain rounded-xl shadow-xs"
          priority
        />
      </div>

      {/* Typography Wordmark in Poppins */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-poppins font-semibold uppercase leading-none ${textSizes[size]} ${primaryTextColor} transition-colors`}
          >
            KRIVANSHRAJ
          </span>
          <span
            className={`text-[7.5px] sm:text-[9.5px] tracking-[0.22em] uppercase font-poppins font-medium mt-1 ${subtextColor}`}
          >
            WELLNESS CENTER
          </span>
        </div>
      )}
    </div>
  );
};
