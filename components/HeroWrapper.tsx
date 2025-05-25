// components/HeroWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";

export default function HeroWrapper({ experience, skills, project, achivement, education }: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen text-center p-5 bg-yellow-100 text-yellow-800">
        <div>
          <h1 className="text-2xl font-bold mb-2">Mobile Layout Under Development</h1>
          <p>Please open this site in a desktop browser for the best experience.</p>
        </div>
      </div>
    );
  }

  return (
    <Hero
      experience={experience}
      skills={skills}
      project={project}
      achivement={achivement}
      education={education}
    />
  );
}
