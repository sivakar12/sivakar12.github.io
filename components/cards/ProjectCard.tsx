import Link from 'next/link';
import { ProjectItem } from '@/types/types';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.id}`} 
      className={`block h-full ${className}`}
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-gray-800 group-hover:text-primary-700 transition-colors">
            {project.title}
          </h2>
        </div>
        <div className="mt-3">
          {project.shortDescription && (
            <p className="text-gray-700 text-sm">{project.shortDescription}</p>
          )}
        </div>
      </div>
    </Link>
  );
} 