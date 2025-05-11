"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
  return (
    <footer className='text-sm text-slate-500 mx-12 mx-8 md:mx-12 lg:mx-20 my-12'>
      <div className="md:flex">
        <div className='flex-1'>
          <p>Copyright © 2025, Alessio Moiso. All Rights Reserved.</p>
          <p>Made with ❤️ in Italy.</p>
        </div>

        <div className='flex gap-4 mt-8 md:mt-0'>
          <Link href={"https://github.com/MrAsterisco"} target='_blank'>
            <Image className='tinted-image' src={'/github.webp'} width={24} height={24} alt="GitHub logo." />
          </Link>

          <Link href={"https://www.linkedin.com/in/alessiomoiso1993/"} target='_blank'>
            <Image className='tinted-image' src={'/linkedin.webp'} width={24} height={24} alt="LinkedIn logo." />
          </Link>
        </div>
      </div>

      <div className="">
        <p className='text-xs mt-2'>All opinions expressed are my own. Logos, trademarks, and brands are used for identification purposes only and do not imply endorsement or affiliation.</p>

        <p className="text-xs">This website is open source. <Link className='underline' href={"https://github.com/MrAsterisco/mrasterisco.github.io"} target='_blank'>View the source code</Link>.</p>

        <ThemeSwitcher />
      </div>
    </footer>
  )
}