import { ProjectItem } from '@/types/types';
import Link from 'next/link';
import MarkdownText from '@/components/MarkdownText';
import ImageGallery from '@/components/ImageGallery';
import PageContainer from '@/components/layout/PageContainer';

interface ProjectDetailPageProps {
  project: ProjectItem;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <PageContainer className="max-w-4xl lg:p-8">
          <h1 className="text-2xl mb-4">{project.title}</h1>
          <MarkdownText markdownContent={project.content}/>
          {project.screenshotUrls && project.screenshotUrls.length > 0 && (
            <ImageGallery images={project.screenshotUrls} />
          )}
          {project.links && project.links.length > 0 && (
            <div>
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