import { getAllProjects } from '@/utils/data-loaders'
import SimpleCard from '@/components/cards/SimpleCard'
import PageContainer from '@/components/layout/PageContainer'
import GridLayout from '@/components/layout/GridLayout'

export default function Projects() {
  const projects = getAllProjects();
  
  return (
    <PageContainer>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {projects.map((project) => (
          <SimpleCard 
            key={project.title} 
            title={project.title}
            description={project.shortDescription}
            href={`/projects/${project.id}`}
            className="h-full" 
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
}