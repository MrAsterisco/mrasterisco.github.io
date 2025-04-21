import React from 'react';
import Technology, { TechnologyProps } from './Technology';

export interface TechnologyListProps {
  title: React.ReactNode
  technologies: TechnologyProps[]
  className?: string
}

export default function TechnologyList({
  title,
  technologies,
  className,
}: TechnologyListProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h4 className='text-slate-700 dark:text-slate-300 font-medium pt-8 text-m [&>span]:text-accent'>{title}</h4>
      <div className='flex flex-wrap gap-4'>
        {technologies.map((technology, index) => (
          <Technology className='w-[128px]' key={index} {...technology} />
        ))}
      </div>
    </div>
  )
}