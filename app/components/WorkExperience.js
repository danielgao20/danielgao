import React from "react";

import Image from "next/image";

// USC, Glance, Amazon, IBM, Sage, Keepsake, AI Camp
const workExperiences = [
  {
    company: "Amazon",
    role: "Engineering",
    year: "2023-Present",
    logo: "/logos/amazon.jpg",
    link: "https://www.amazon.jobs/content/en/teams/international-stores/payments"
  },
  {
    company: "USC",
    role: "Engineering",
    year: "2024-Present",
    logo: "/logos/usc.jpg",
    link: "https://www.marshall.usc.edu/why-marshall/teaching-and-innovation/experiential-learning-center"
  },
  {
    company: "Glance",
    role: "Co-Founder & CTO",
    year: "2025",
    logo: "/logos/glance.jpg",
    link: "https://glance-landing.vercel.app/"
  },
  {
    company: "IBM",
    role: "Engineering",
    year: "2024",
    logo: "/logos/ibm.jpg",
    link: "https://www.careereducation.columbia.edu/insider-info/ibm-accelerate"
  },
  {
    company: "Buildspace",
    role: "Engineering",
    year: "2024",
    logo: "/logos/buildspace.jpg",
    link: "https://buildspace.so"
  },
  {
    company: "Sage",
    role: "Co-Founder & CTO",
    year: "2024",
    logo: "/logos/sage.png",
    link: "https://www.hellosage.app/"
  },
  {
    company: "Keepsake",
    role: "Engineering",
    year: "2023",
    logo: "/logos/keepsake.jpg",
    link: "https://hellokeepsake.com/"
  },
  {
    company: "AI Camp",
    role: "Engineering",
    year: "2022",
    logo: "/logos/ai-camp.jpg",
    link: "https://ai-camp.org"
  }
];

// Fellowships, HackSC, TroyLabs, SEP, LavaLab, Blockchain@USC, Hack the Fog, JR
const involvements = [
  {
    org: "Y Combinator",
    position: "AI Startup School",
    year: "2025",
    logo: "/logos/yc.jpg",
    link: "https://events.ycombinator.com/ai-sus"
  },
  {
    org: "Kleiner Perkins",
    position: "Finalist",
    year: "2025",
    logo: "/logos/kp.jpg",
    link: "https://www.kleinerperkins.com/fellows/"
  },
  {
    org: "8VC",
    position: "Finalist",
    year: "2025",
    logo: "/logos/8vc.jpg",
    link: "https://www.8vc.com/fellowships"
  },
  {
    org: "Comma Capital",
    position: "Fellow",
    year: "2024",
    logo: "/logos/comma.jpg",
    link: "https://www.linkedin.com/company/comma-capital/"
  },
  {
    org: "TroyLabs",
    position: "Engineering",
    year: "2023-Present",
    logo: "/logos/troylabs.jpg",
    link: "https://www.troylabs.vc/"
  },
  {
    org: "LavaLab",
    position: "Engineering",
    year: "2024",
    logo: "/logos/lavalab.jpg",
    link: "https://usclavalab.org/"
  },
  {
    org: "SEP",
    position: "Engineering",
    year: "2024",
    logo: "/logos/sep.jpg",
    link: "https://uscsep.com/"
  },
  {
    org: "HackSC",
    position: "Engineering",
    year: "2022",
    logo: "/logos/hacksc.jpg",
    link: "https://www.hacksc.com/"
  },
  {
    org: "Hack the Fog",
    position: "Organizer",
    year: "2021",
    logo: "/logos/hackfog.jpg",
    link: "https://htc2.devpost.com/"
  },
  {
    org: "Junior Robotics",
    position: "Engineering",
    year: "2020",
    logo: "/logos/jr.jpg",
    link: "https://www.linkedin.com/company/junior-robotics-sf/"
  }
];

const WorkExperience = () => (
  <div>
    <h2 className="text-2xl font-normal mb-6">Work</h2>
    <div>
      {workExperiences.map((experience, index) => (
        <div key={index}>
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-inherit no-underline"
          >
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
          </a>
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
          <a
            href={involvement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-inherit no-underline"
          >
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
          </a>
          {index < involvements.length - 1 && (
            <div className="border-b border-dashed border-gray-300 dark:border-gray-700"></div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default WorkExperience;
