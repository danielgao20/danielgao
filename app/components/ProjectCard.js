import Image from 'next/image';

export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <a 
      href={projectUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-none transition-all duration-100 hover:shadow-none hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 h-full flex flex-col ring-0 ring-transparent hover:ring-2 hover:ring-gray-900 hover:ring-offset-2 hover:ring-offset-gray-100 dark:hover:ring-white dark:hover:ring-offset-gray-900">
        <div className="relative w-full h-40 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-100 group-hover:scale-105"
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