"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (<div className='flex items-center text-xs mt-4'>
    <Segment
      title='Light'
      className='rounded-l-sm'
      isSelected={theme === 'light'}
      onClick={() => setTheme('light')} />

    <Segment
      title='Auto'
      isSelected={theme === 'system'}
      onClick={() => setTheme('system')} />

    <Segment
      title='Dark'
      className='rounded-r-sm'
      isSelected={theme === 'dark'}
      onClick={() => setTheme('dark')} />
  </div>)
}

interface SegmentProps {
  title: string
  isSelected: boolean
  onClick: () => void
  className?: string
}

function Segment({
  title,
  isSelected,
  onClick,
  className
}: SegmentProps) {
  return (
    <button
      className={`px-2 py-1 ${className} ${isSelected ? 'bg-slate-300 dark:bg-slate-700 text-black dark:text-gray-200' : 'bg-slate-100 dark:bg-slate-900 text-slate-500'}`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}