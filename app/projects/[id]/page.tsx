import { getAllProjects, getProjectById } from '@/utils/data-loaders'
import ProjectDetailPage from '@/components/layout/ProjectDetailPage'

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) return <div>Project not found</div>

  return <ProjectDetailPage project={project} />;
}