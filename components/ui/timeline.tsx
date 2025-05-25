"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ExperienceInterface {
  mainImage: any;
  CompanyName: string,
  role:string,
  startDate: string,
  endDate: string,
  technologies: string,
}

export const Timeline = ({ data }: { data: ExperienceInterface[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10 px-10 overflow-clip" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-30 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-3 absolute left-3 md:left-3 w-3 rounded-full bg-[#F39E2F] flex items-center justify-center">
              </div>
              <h3 className="hidden md:block text-sm pl-5 md:pl-20 md:text-4xl font-bold text-white">
                {item.CompanyName}
              <br/><p className="text-[15px] md:hidden ">{item.startDate}</p>
              </h3>
            </div>
            <div className="relative pl-10 pr-4 md:pl-4 w-full text-white">
              <h3 className=" md:hidden block text-sm md:text-2xl md:mb-4 mb-1 text-left font-bold ">
                {item.CompanyName}
              </h3>
              <p className="text-[10px] md:text-2xl w-ful h-full text-neutral-500 dark:text-neutral-500">
                {item.role}
              </p>
            </div>
              <p className="text-[10px] w-full md:text-xl text-gray-400 text-right">
                {item.startDate}
              </p>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-1 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-1  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
