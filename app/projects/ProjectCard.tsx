import Link from 'next/link'
import { ProjectItem } from '@/types/Project'

interface ProjectCardProps {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-64 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gradient truncate">{project.title}</h2>
          <span className="text-3xl">{project.emoji}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{project.date}</p>
        <p className="text-gray-800 overflow-hidden">{project.shortDescription}</p>
      </div>
    </Link>
  )
}