import Image from 'next/image';
import React from 'react';
import Position from './Position';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex bg-gray-50 dark:bg-gray-900 shadow rounded-0 lg:rounded-b-lg dark:text-white'>
      <div className='py-8 px-8 md:px-12 lg:px-20 flex-1 flex flex-col items-start gap-8'>
        <div className='justify-self-start'>
          <div className='flex items-center gap-4'>
            <div className='visible md:hidden min-w-[64px] min-h-[64px]'>
              <Image src={'/avatar.webp'} width={64} height={64} alt="A closeup of me smiling at the camera on a white background." className='rounded-full shadow bg-white' />
            </div>
            <div>
              <h1 className='text-4xl md:text-5xl'>Ciao, I&apos;m <span className='font-bold text-accent'>Alessio</span>.</h1>
              <p className='text-slate-900 dark:text-gray-100'>Nice to see you here!</p>
            </div>
          </div>
        </div>

        <div className='flex-1 justify-self-center'>
          <Position
            title="VP of Engineering"
            company="Linearity"
            companyURL="https://linearity.io"
            startDate="2024-09-01"
            logoURL="/linearity.webp"
            logoAlt="Linearity black logo over an orange background."
          />

          <Position
            className='mt-4'
            title="Product Specialist"
            company="InerziaSoft"
            companyURL="https://inerziasoft.eu"
            startDate="2012-06-01"
            logoURL="/inerziasoft.webp"
            logoAlt="The letters I and S in green and blue colors over a white background."
          />
        </div>

        <Link className='block border-1 border-accent hover:border-accent-dark shadow text-white rounded-lg px-4 py-2 text-sm uppercase font-bold' href={"https://www.linkedin.com/in/alessiomoiso1993/"} target='_blank'>Get in Touch</Link>
      </div>

      <div className='px-20 pt-8 self-end md:block hidden'>
        <Image src={'/profile.webp'} width={201} height={279} alt="A picture of myself looking at the camera and smiling with my arms folded wearing a blue sweater." />
      </div>
    </header>
  )
}