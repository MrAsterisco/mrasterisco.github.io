"use client";
import React, { useEffect, useState, useRef } from 'react';

export interface ExperienceTileProps {
  years: number;
  prefix: string;
  title: string;
}

export default function ExperienceTile({
  years,
  prefix,
  title,
}: ExperienceTileProps) {
  const [currentYears, setCurrentYears] = useState(0);
  const tileRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const current = tileRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentYears < years) {
      const interval = setInterval(() => {
        setCurrentYears((prev) => {
          if (prev < years) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isVisible, currentYears, years]);

  return (
    <div ref={tileRef} className="flex flex-col items-start gap-4">
      <h3 className="text-3xl md:text-5xl font-bold">
        {currentYears}+ <span className="text-sm text-gray-500">yrs</span>
      </h3>
      <h4 className="text-lg md:text-xl">
        {prefix} <span>{title}</span>
      </h4>
    </div>
  );
}