import { FaGithub, FaLinkedin, FaDev, FaEnvelope, FaSpotify, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <Image
        src="/baymax.jpg"
        alt="Baymax from Big Hero 6"
        width={200}
        height={200}
        className="rounded-lg shadow-lg"
      />

      <h1 className="text-3xl font-bold mt-8">Hey, what&apos;s up!</h1>
      <p className="mt-5 text-base text-center max-w-xl">
        My name is Daniel Gao, I&apos;m a junior at <b>USC</b> studying computer science and
        business, currently exploring software engineering and
        entrepreneurial projects. I&apos;ve previously worked on full-stack projects
        at <b>Amazon</b> and <b>IBM</b>.
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
          href="https://x.com/danielgao20_"
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
        <a
          href="https://open.spotify.com/user/dannygao20?si=e157cac31cb04dc9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaSpotify size={30} />
        </a>
      </div>

      <DarkModeToggle />
    </div>
  );
}
