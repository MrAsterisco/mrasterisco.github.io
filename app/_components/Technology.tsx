import React from 'react';
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
  return (
    <div className={`flex flex-col items-center gap-4 p-8 bg-white dark:bg-gray-900 rounded-lg ${className}`}>
      <Image 
        src={logoURL}
        alt={logoAlt}
        width={54} 
        height={54}
        style={{ maxWidth: 'auto' }}
      />
      <h2 className='font-bold text-center text-slate-700 dark:text-slate-300 text-sm uppercase'>{name}</h2>
    </div>
  )
}