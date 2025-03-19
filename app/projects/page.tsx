import { getAllProjects } from '@/utils/data-loaders'
import ContentCard from '@/components/ContentCard'

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ContentCard key={project.title} item={project} type="project" className="h-full" />
        ))}
      </div>
    </div>
  )
}