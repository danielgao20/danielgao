import React from "react";

import Image from "next/image";

// USC, Glance, Amazon, IBM, Sage, Keepsake, AI Camp
const workExperiences = [
  {
    company: "Amazon",
    role: "Engineering",
    year: "2023-Present",
    logo: "/logos/amazon.jpg"
  },
  {
    company: "Experiential Learning Center",
    role: "Engineering",
    year: "2024-Present",
    logo: "/logos/usc.jpg"
  },
  {
    company: "Glance",
    role: "Co-Founder & CTO",
    year: "2025",
    logo: "/logos/glance.jpg"
  },
  {
    company: "IBM",
    role: "Engineering",
    year: "2024",
    logo: "/logos/ibm.jpg"
  },
  {
    company: "Buildspace",
    role: "Engineering",
    year: "2024",
    logo: "/logos/buildspace.jpg"
  },
  {
    company: "Sage",
    role: "Co-Founder & CTO",
    year: "2024",
    logo: "/logos/sage.png"
  },
  {
    company: "Keepsake",
    role: "Engineering",
    year: "2023",
    logo: "/logos/keepsake.jpg"
  },
  {
    company: "AI Camp",
    role: "Engineering",
    year: "2022",
    logo: "/logos/ai-camp.jpg"
  }
];

// Fellowships, HackSC, TroyLabs, SEP, LavaLab, Blockchain@USC, Hack the Fog, JR
const involvements = [
  {
    org: "Y Combinator",
    position: "AI Startup School",
    year: "2025",
    logo: "/logos/yc.jpg"
  },
  {
    org: "Kleiner Perkins",
    position: "Finalist",
    year: "2025",
    logo: "/logos/kp.jpg"
  },
  {
    org: "8VC",
    position: "Finalist",
    year: "2025",
    logo: "/logos/8vc.jpg"
  },
  {
    org: "Comma Capital",
    position: "Fellow",
    year: "2024",
    logo: "/logos/comma.jpg"
  },
  {
    org: "TroyLabs",
    position: "Engineering",
    year: "2023-Present",
    logo: "/logos/troylabs.jpg"
  },
  {
    org: "LavaLab",
    position: "Engineering",
    year: "2024",
    logo: "/logos/lavalab.jpg"
  },
  {
    org: "SEP",
    position: "Engineering",
    year: "2024",
    logo: "/logos/sep.jpg"
  },
  {
    org: "HackSC",
    position: "Engineering",
    year: "2022",
    logo: "/logos/hacksc.jpg"
  },
  {
    org: "Hack the Fog",
    position: "Organizer",
    year: "2021",
    logo: "/logos/hackfog.jpg"
  },
  {
    org: "Junior Robotics",
    position: "Engineering",
    year: "2020",
    logo: "/logos/jr.jpg"
  }
];

const WorkExperience = () => (
  <div>
    <h2 className="text-2xl font-normal mb-6">Work</h2>
    <div>
      {workExperiences.map((experience, index) => (
        <div key={index}>
          <div className="flex items-center py-3">
            <div className="w-6 h-6 mr-3 flex items-center justify-center">
              <Image
                src={experience.logo}
                alt={experience.company + " logo"}
                width={24}
                height={24}
                className="rounded-md object-cover w-6 h-6 bg-white border border-gray-200 dark:border-gray-700"
                priority={index === 0}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline flex-wrap gap-x-2">
                <span className="font-medium mr-1">{experience.company}</span>
                {experience.suffix && (
                  <span className="text-xs text-gray-500">{experience.suffix}</span>
                )}
                <span className="text-gray-500 text-sm ml-2">{experience.role}</span>
              </div>
            </div>
            <div className="text-gray-500 text-sm">{experience.year}</div>
          </div>
          {index < workExperiences.length - 1 && (
            <div className="border-b border-dashed border-gray-300 dark:border-gray-700"></div>
          )}
        </div>
      ))}
    </div>

    {/* Involvements Section */}
    <h2 className="text-2xl font-normal mt-12 mb-6">Involvements</h2>
    <div>
      {involvements.map((involvement, index) => (
        <div key={index}>
          <div className="flex items-center py-3">
            <div className="w-6 h-6 mr-3 flex items-center justify-center">
              <Image
                src={involvement.logo}
                alt={involvement.org + " logo"}
                width={24}
                height={24}
                className="rounded-md object-cover w-6 h-6 bg-white border border-gray-200 dark:border-gray-700"
                priority={index === 0}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline flex-wrap gap-x-2">
                <span className="font-medium mr-1">{involvement.org}</span>
                <span className="text-gray-500 text-sm ml-2">{involvement.position}</span>
              </div>
            </div>
            <div className="text-gray-500 text-sm">{involvement.year}</div>
          </div>
          {index < involvements.length - 1 && (
            <div className="border-b border-dashed border-gray-300 dark:border-gray-700"></div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default WorkExperience;
