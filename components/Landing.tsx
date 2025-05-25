import React from 'react'
import Image from 'next/image'
import { FlipWords } from './ui/flip-words'
import NikhilToy from './assets/NikhilToy.png'
const string = ["Developer", "Organizer", "Traveller"];
const Landing = () => {
    return (
    <div className='lg:h-screen w-full px-4 md:p-12 radius'>
        <div className='flex flex-col-reverse md:flex-row h-full rounded-xl md:rounded-2xl bg-gray-100 overflow-hidden'>
            <div className='w-full flex-2/3  flex-col justify-center items-center flex px-6 md:px-12'>
                <p className='font-bold text-sm md:text-[40px] text-left w-full'>
                    Hello , I am Nikhil Sharma <span>
                    <br/>I am <FlipWords className='font-light text-[#d98d2a]' words={string}/></span>
                </p>
                <p className='font-light text-[9px] md:text-[15px] w-full pb-4'>
                    I am a self-taught software developer fueled by coffee, curiosity, and just the right amount of stubbornness to solve tricky problems. I specialize in creating apps, web applications, and digital solutions that are so intuitive they might as well read your mind (don’t worry, they don’t). When I’m not pixel-pushing or debugging, Iam probably overthinking how to make the "Submit" button look friendlier. The tools of my trade?
                </p>
            </div>
            <div className='w-full flex-1/3 justify-center items-center flex'>
                <Image className='h-[300px] p-4 md:h-full md:w-full object-contain' src={NikhilToy} height={300} width={300} alt='Image'/>
            </div>
        </div>
    </div>
  )
}

export default Landing