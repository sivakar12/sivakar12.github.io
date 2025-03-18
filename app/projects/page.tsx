import { getAllProjects } from '@/utils/data-loaders'
import ProjectCard from '@/app/projects/ProjectCard'

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}