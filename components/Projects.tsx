import React from 'react'
import Image from 'next/image';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ProjectInterface } from '@/app/page'
import Link from 'next/link';
const Projects = ({projects}:{projects:ProjectInterface[]}) => {
  return (
    <div className='w-full font-sans md:px-10 px-10 overflow-clip h-fit'>
      <h1 className='font-bold text-4xl md:pl-20 md:py-15'>Work</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        {
          projects?.map((project) => (
              <>
              <div data-aos="fade-up" className='flex justify-center'>
                    <CardSpotlight className="h-fit w-96">
                      <div className='text-white h-42 w-full relative z-20'>
                        <Image className="h-full w-full object-cover rounded-lg" src={project.mainImage} height={500} width={500} alt='Image'/>
                      </div>
                      <div className="text-neutral-200 mt-4 relative z-20">
                        <div className='uppercase text-[#F39E2F] text-center font-bold'>
                          {project.projectName}
                        </div>
                        <ul className="list-none  mt-2 truncate whitespace-nowrap">
                          <li className='truncate whitespace-nowrap overflow-hidden text-[#F39E2F]'>Deployed Link - <Link className='underline' about='Link' href={project.projectLink}>Link</Link></li>
                          <li className='truncate whitespace-nowrap overflow-hidden text-[#F39E2F]'>Descreption - <span className='text-white'>{project.projectDesc}</span></li>
                          <li className='truncate whitespace-nowrap overflow-hidden text-[#F39E2F]'>Github Link - <span className='text-white'>{project.projectLink}</span></li>
                        </ul>
                      </div>
                    </CardSpotlight>

              </div>
              </>
            ))
          }
    </div>
    </div>
  )
}

export default Projects