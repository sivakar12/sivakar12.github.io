import { ProjectItem } from '@/types/types';
import Link from 'next/link';
import MarkdownText from '@/components/MarkdownText';
import ImageGallery from '@/components/ImageGallery';
import PageContainer from '@/components/layout/PageContainer';

// Helper function to get animation delay based on element type
const getAnimationDelay = (elementType: string) => {
  const baseDelays: { [key: string]: number } = {
    h1: 0,
    h2: 100,
    h3: 200,
    p: 300,
    ul: 400,
    li: 500
  };
  return baseDelays[elementType] || 0;
};

interface ProjectDetailPageProps {
  project: ProjectItem;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <PageContainer className="max-w-4xl lg:p-8">
          <h1 
            className="text-2xl mb-4 animate-card-entrance"
            style={{ animationDelay: `${getAnimationDelay('h1')}ms` }}
          >
            {project.title}
          </h1>
          <div 
            className="animate-card-entrance"
            style={{ animationDelay: `${getAnimationDelay('p')}ms` }}
          >
            <MarkdownText markdownContent={project.content}/>
          </div>
          {project.screenshotUrls && project.screenshotUrls.length > 0 && (
            <div 
              className="animate-card-entrance"
              style={{ animationDelay: `${getAnimationDelay('ul')}ms` }}
            >
              <ImageGallery images={project.screenshotUrls} />
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div 
              className="animate-card-entrance"
              style={{ animationDelay: `${getAnimationDelay('ul')}ms` }}
            >
              <h2 className="text-xl mb-2">Links</h2>
              <ul className="list-disc list-inside">
                {project.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-blue-500 hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </PageContainer>
      </article>
    </div>
  );
} 