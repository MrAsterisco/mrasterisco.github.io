import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import calculateDuration from '../_lib/duration';

export interface PositionProps {
  title: string
  company: string
  companyURL: string
  startDate: string
  logoURL: string
  logoAlt: string
  className?: string
}

export default function Position({
  title,
  company,
  companyURL,
  startDate,
  logoURL,
  logoAlt,
  className,
}: PositionProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Image 
        src={logoURL}
        alt={logoAlt}
        width={54} 
        height={0} 
        className="rounded-full h-auto" 
      />
      <div className="flex-1">
      <h2 className='font-medium text-slate-800 dark:text-slate-200'>{`${title} @ `}<Link href={companyURL} target='_blank'>{company}</Link></h2>
      <h3 className='text-xs text-slate-500'>
        {`${new Date(startDate).toLocaleString('en-US', { month: 'long', year: 'numeric' })} — ${calculateDuration(startDate)}`}
      </h3>
      </div>
    </div>
  )
}