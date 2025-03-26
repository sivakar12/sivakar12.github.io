import { getAllProjects } from '@/utils/data-loaders'
import ContentCard from '@/components/ContentCard'
import Link from 'next/link'
import MarkdownText from '@/components/MarkdownText'
import ImageGallery from '@/components/ImageGallery'

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projects = getAllProjects();
  const project = projects.find(
    (p) => p.id === params.id
  )

  if (!project) return <div>Project not found</div>

  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 lg:p-8">
          <h1 className="text-2xl font-semibold mb-4">{project.title}</h1>
          <MarkdownText markdownContent={project.content}/>
          {project.screenshotUrls && project.screenshotUrls.length > 0 && (
            <ImageGallery images={project.screenshotUrls} />
          )}
          {project.links && project.links.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Links</h2>
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
        </div>
      </article>
    </div>
  )
}