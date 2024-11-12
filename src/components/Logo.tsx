import React from 'react';

export function Logo({ className = "w-32 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8h30v24H10z" fill="var(--primary)" fillOpacity="0.2"/>
      <path d="M15 20l8 8 12-16" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50" y="28" fill="currentColor" fontSize="24" fontWeight="bold" fontFamily="system-ui">
        Zoli<tspan fill="var(--primary)">Quiz</tspan>
      </text>
    </svg>
  );
}