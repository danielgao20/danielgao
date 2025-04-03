import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <a 
      href={projectUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 h-full flex flex-col">
        <div className="relative w-full h-40 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
} 