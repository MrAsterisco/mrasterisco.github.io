"use client"
import React, { useState, MouseEventHandler } from 'react';

export interface AnimatedTileProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedTile({
  className,
  children,
}: AnimatedTileProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [zIndex, setZIndex] = useState(0);

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
    setZIndex(255);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    setZIndex(0);
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`,
        transition: 'transform 0.1s ease-out',
        zIndex: zIndex,
      }}
    >
      {children}
    </div>
  )
}