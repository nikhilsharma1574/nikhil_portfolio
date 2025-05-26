import Image from "next/image";
import React from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  experienceQuery,
  skillsQuery,
  projectsQuery,
  achivementsQuery,
  educationQuery,
} from "@/sanity/lib/queries";
import { Suspense } from "react";
import { NavbarPage } from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWrapper from "@/components/HeroWrapper"; // ✅ New wrapper

export type ExperienceInterface = {
  mainImage: any;
  CompanyName: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string;
};

export type SkillsInterface = {
  mainImage: any;
  skills: string;
  skillLogo: any;
};

export type ProjectInterface = {
  projectName: string;
  projectDesc: string;
  projectLink: string;
  mainImage: any;
  skillLogo: any;
};

export type AchivementsInterface = {
  achivementName: string;
  achivementDesc: string;
  achivementImage: any;
};

export type EducationInterface = {
  educationInstitute: string;
  educationYear: Date;
  educationPercentage: number;
  mainImage: any;
};

export default async function Home() {
  const experience = await sanityFetch<ExperienceInterface[]>({ query: experienceQuery });
  const skills = await sanityFetch<SkillsInterface[]>({ query: skillsQuery });
  const project = await sanityFetch<ProjectInterface[]>({ query: projectsQuery });
  const achivement = await sanityFetch<AchivementsInterface[]>({ query: achivementsQuery });
  const education = await sanityFetch<EducationInterface[]>({ query: educationQuery });

  return (
    <div className="flex flex-col h-screen justify-between">
      <Suspense>
        <NavbarPage />
        <HeroWrapper
          experience={experience}
          skills={skills}
          project={project}
          achivement={achivement}
          education={education}
        />
        <Footer />
      </Suspense>
    </div>
  );
}
