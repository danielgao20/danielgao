import { FaGithub, FaLinkedin, FaDev, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToggle";
import ProjectCarousel from "./components/ProjectCarousel";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-32 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <a href="https://devpost.com/software/amanda-o1eg2a" target="_blank" rel="noopener noreferrer">
        <Image
          src="/baymax.jpg"
          alt="Baymax from Big Hero 6"
          width={200}
          height={200}
          className="rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200"
        />
      </a>

      <h1 className="text-3xl font-medium mt-8">Hey, what's up!</h1>
      <p className="mt-5 text-base font-normal text-center max-w-xl">
        My name is Daniel Gao, I'm a senior at <b className="bold-emphasized">USC</b> studying 
        computer science and business, with a focus on software engineering and
        building high-impact solutions. I've previously worked on full-stack projects
        at <b className="bold-emphasized">Amazon</b> and <b className="bold-emphasized">IBM</b>.
      </p>

      <div className="flex mt-8 space-x-6">
        <a
          href="https://github.com/danielgao20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/danielgao20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://devpost.com/danielgao20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaDev size={30} />
        </a>
        <a
          href="https://x.com/danielgaoo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="mailto:dygao@usc.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Work and Involvements Section */}
      <div className="mt-16 w-full max-w-2xl mx-auto px-0 sm:px-4">
        <WorkExperience />
      </div>

      {/* Projects Section */}
      <div className="mt-16 w-full max-w-6xl mx-auto px-0 sm:px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-xs border-t border-gray-300 dark:border-gray-600 mb-12"></div>
        </div>
        <h2 className="text-2xl font-medium mb-8 text-center text-gray-800 dark:text-gray-200">Project Spotlight</h2>
        <ProjectCarousel />
      </div>

      {/* footer with email */}
      <div className="mt-12 w-full max-w-xs border-t border-gray-300 dark:border-gray-600"></div>
      <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        © 2025 Daniel Gao • <a href="mailto:dygao@usc.edu" className="hover:underline">dygao@usc.edu</a>
      </p>

      <DarkModeToggle />
    </div>
  );
}
