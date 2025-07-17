import { ProjectItem } from '@/types/types';
import ProjectCard from '@/components/cards/ProjectCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

interface ProjectsPageProps {
  projects: ProjectItem[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <PageContainer>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} className="h-full" />
        ))}
      </GridLayout>
    </PageContainer>
  );
} 