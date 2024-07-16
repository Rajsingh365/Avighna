import React, { useEffect } from 'react';
import GlassMorphism from '../components/GlassMorphism';
import Carousel from '../components/Carousel';
import {initFlowbite} from 'flowbite'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function Home() {
  useEffect(()=>{
    initFlowbite()
  },[])

  useGSAP(()=>{
    gsap.from(".animate-text",{ y: '100%', opacity: 0, delay: 1, duration: 1, ease: 'power1.out', stagger: 0.5 })
  })
  return (

    <div className="py-10 h-min-screen bg-[radial-gradient(circle_at_50%_75%,#FFBA08,#F48C06)] flex flex-col justify-center items-center gap-8">
      <GlassMorphism className="w-[85%] sm:w-[90%] py-4 px-6 sm:py-8 sm:px-6 md:py-16 md:px-24">
        <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <p className='text-4xl animate-text'>“वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥”</p>
        <p className='text-sm md:text-xl animate-text'>O Lord with a curved trunk and immense form, whose radiance is like a million suns, remove all obstacles from my endeavors forever.</p>
      </GlassMorphism>
      <Carousel/>
    </div>
  );
}

export default Home;