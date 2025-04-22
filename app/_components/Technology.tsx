"use client"
import React, { useState, MouseEventHandler } from 'react';
import Image from 'next/image';

export interface TechnologyProps {
  name: string
  logoURL: string
  logoAlt: string
  className?: string
}

export default function Technology({
  name,
  logoURL,
  logoAlt,
  className,
}: TechnologyProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element.
    const y = event.clientY - rect.top;  // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const sensitivity = 20; // Adjust sensitivity as needed

    const newRotateX = ((y - centerY) / centerY) * sensitivity * -1; // Invert Y rotation
    const newRotateY = ((x - centerX) / centerX) * sensitivity;

    const newScale = 1.2;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
    setScale(newScale);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <div
      className='shadow overflow-hidden rounded-lg'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div
        className={`relative bg-gray-100 dark:bg-gray-800 flex flex-col h-full rounded-lg items-center gap-4 p-8 border-1 border-gray-300 dark:border-gray-700 hover:border-accent transition-all ${className}`}
      >
        <Image
          src={logoURL}
          alt={logoAlt}
          width={54}
          height={54}
          style={{ maxWidth: 'auto' }}
        />
        <h2 className='font-bold text-center text-slate-800 dark:text-slate-300 text-sm uppercase'>{name}</h2>
      </div>
    </div>
  )
}