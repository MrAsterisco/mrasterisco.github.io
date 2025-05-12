"use client"
import Image from 'next/image';
import AnimatedTile from './AnimatedTile';

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
    <AnimatedTile className="shadow overflow-hidden rounded-lg">
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
    </AnimatedTile>
  )
}