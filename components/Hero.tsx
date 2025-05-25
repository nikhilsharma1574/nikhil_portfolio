"use client"
import { ExperienceInterface , SkillsInterface, ProjectInterface, AchivementsInterface, EducationInterface} from '@/app/page'
import React, { useEffect } from 'react'
import Experience from './Experience'
import Landing from './Landing'
import Projects from './Projects'

const Hero = ({experience,skills,project,achivement,education}:{experience:ExperienceInterface[],skills:SkillsInterface[],project:ProjectInterface[],achivement:AchivementsInterface[],education:EducationInterface[]}) => {
    return (
    <main>
        <>
            <Landing/>
            <Experience experience={experience} />
            <Projects projects={project}/>
        </>      
    </main>
  )
}
export default Hero
