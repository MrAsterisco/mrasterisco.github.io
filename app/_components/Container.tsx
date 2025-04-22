import Link from 'next/link';
import React from 'react';

export interface ContainerProps {
  title: string
  className?: string
  children?: React.ReactNode
  linkTitle?: string
  linkURL?: string
}

export default function Container({
  title,
  className,
  children,
  linkTitle,
  linkURL,
}: ContainerProps) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-900 lg:rounded-lg shadow mx-auto px-8 md:px-12 lg:px-20 pb-8 ${className}`}>
      <h4 className='text-accent font-bold pt-8 text-lg'>{title}</h4>
      {children && children}

      {linkTitle && linkURL && (
        <div className='mt-8'>
          <Link className='text-accent font-bold text-m' href={linkURL} target='_blank'>{linkTitle}</Link>
        </div>
      )}
    </div>
  )
}