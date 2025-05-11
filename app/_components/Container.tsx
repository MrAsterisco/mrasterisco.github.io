import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ContainerProps {
  title: string
  className?: string
  children?: React.ReactNode
  linkTitle?: string
  linkURL?: string
  headerHref?: string
  headerAlt?: string
}

export default function Container({
  title,
  className,
  children,
  linkTitle,
  linkURL,
  headerHref,
  headerAlt,
}: ContainerProps) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-900 lg:rounded-lg shadow overflow-hidden ${className}`}>
      {headerHref &&
        <div className="relative w-full h-[200px]">
          <Image
            src={headerHref}
            alt={headerAlt ?? ""}
            objectFit='cover'
            fill />
        </div>
      }

      <div className="px-8 md:px-12 lg:px-20 pb-8">
        <h4 className='text-accent font-bold pt-8 text-lg'>{title}</h4>
        {children && children}

        {linkTitle && linkURL && (
          <div className='mt-8'>
            <Link className='text-accent hover:text-accent-dark dark:text-accent-dark dark:hover:text-accent hover:underline font-bold text-m transition-all' href={linkURL}>{linkTitle}</Link>
          </div>
        )}
      </div>
    </div>
  )
}