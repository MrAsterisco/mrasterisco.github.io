"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Mousewheel, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/a11y';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import Link from "next/link";

interface Highlight {
  title: string
  emoji: string
  year?: string
  linkURL?: string
}

interface FeaturedProject {
  imageHref: string
  imageAlt: string
  name: string
  description: string
  languages: string[]
  highlights: Highlight[]
}

export default function FeaturedProject({
  project
}: {
  project: FeaturedProject
}) {
  return (<div className={`flex flex-col bg-gray-50 dark:bg-gray-900 lg:rounded-lg shadow overflow-hidden md:w-[calc(50%-0.5rem)] w-full`}>
    <div className="relative w-full h-[200px]">
      <Image
        src={project.imageHref}
        alt={project.imageAlt}
        objectFit='cover'
        fill />
    </div>

    <div className="px-8 mt-4">
      <h4 className='text-accent font-bold text-lg'>{project.name}</h4>
      <p className="text-blue-300 text-xs">
        {project.languages.map((lang, index) => (
          <span key={index}>
            {`#${lang} `}
          </span>
        ))}
      </p>

      <p className="text-slate-700 dark:text-slate-300 mt-4">{project.description}</p>
    </div>

    <div className="flex-grow">

    </div>

    <div className="px-8 overflow-visible">
      <p className="text-accent dark:text-accent-dark font-bold text-sm mt-4">Highlights</p>

      <Swiper
        className="my-4 mx-8 !overflow-visible"
        slideToClickedSlide={true}
        spaceBetween={4}
        centeredSlides={true}
        modules={[A11y, Mousewheel, Autoplay, EffectCards]}
        effect="cards"
        mousewheel
        autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}>
        {
          project.highlights.map((highlight, index) => (
            <SwiperSlide key={index}>
              <Highlight
                title={highlight.title}
                emoji={highlight.emoji}
                year={highlight.year}
                linkURL={highlight.linkURL} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  </div>)
}

interface HighlightProps {
  title: string
  year?: string
  emoji: string
  linkURL?: string
}

function Highlight({
  title,
  year,
  emoji,
  linkURL,
}: HighlightProps) {
  return (
    <div className="text-center flex gap-4 bg-gray-100 dark:bg-gray-800 flex-col rounded-lg items-center py-4 px-8 border-1 border-gray-300 dark:border-gray-700 transition-all hover:border-accent dark:hover:border-accent-dark">
      <span className="text-3xl">{emoji}</span>
      {year && <span className="px-2 py-1 bg-gray-300 dark:bg-gray-600 rounded-lg text-[0.6rem]">{year}</span>}
      <div>
        <p className="font-bold text-slate-900 dark:text-slate-300 text-xs">{title}</p>
      </div>
      {linkURL && <Link href={linkURL} target='_blank' className="text-blue-300 text-xs underline">Learn more</Link>}
    </div>
  )
}