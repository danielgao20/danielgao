import { FaGithub, FaLinkedin, FaDev, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <Image
        src="/baymax.jpg"
        alt="Picture of Baymax from Big Hero 6"
        width={200}
        height={200}
        className="rounded-lg shadow-lg"
      />

      <h1 className="text-3xl font-bold text-gray-800 mt-8">Hey, what&apos;s up!</h1>
      <p className="mt-5 text-base text-gray-600 text-center max-w-xl">
        My name is Daniel, I&apos;m a junior at USC studying computer science and
        business administration, currently exploring software engineering and
        entrepreneurial projects. I&apos;ve previously worked on full-stack projects
        at Amazon and IBM.
      </p>

      <div className="flex mt-8 space-x-6">
        <a
          href="https://github.com/danielgao20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/danielgao20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://devpost.com/danielgao20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaDev size={30} />
        </a>
        <a
          href="mailto:dygao@usc.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}
