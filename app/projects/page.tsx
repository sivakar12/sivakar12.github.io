import { getAllProjects } from '@/utils/data-loaders'
import ProjectsPage from '@/components/layout/ProjectsPage'

export default function Projects() {
  const projects = getAllProjects();
  return <ProjectsPage projects={projects} />;
}