"use client";
import React from 'react'
import { ExperienceInterface } from '@/app/page'
import { Timeline } from './ui/timeline';

const Experience = ({experience}:{experience:ExperienceInterface[]}) => {
 
    const transformedData = experience.map(item => ({
      mainImage: item.mainImage,
      CompanyName: item.CompanyName,
      role: item.role,
      startDate: item.startDate,
      endDate: item.endDate,
      technologies: item.technologies
  }));
    return (
        <div className='bg-black w-full'>
          Hello
          <Timeline data={transformedData}/>
        </div>
  )
}

export default Experience