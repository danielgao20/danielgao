import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Daniel Gao</h1>
      <p className="mt-2 text-lg text-gray-600">Making updates, new site coming soon!</p>

      {/* Social Links */}
      <div className="flex mt-6 space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://devpost.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaDev size={30} />
        </a>
      </div>
    </div>
  );
}
