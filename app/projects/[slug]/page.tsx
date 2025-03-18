import projects from '@/data/projects'
import ProjectCard from '@/app/projects/ProjectCard'
import Link from 'next/link'
import MarkdownText from '@/components/MarkdownText'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  )

  if (!project) return <div>Project not found</div>

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 overflow-y-auto border-r">
        <div className="p-4 space-y-4">
          {projects.map((p) => (
            <div key={p.title} className={p.title === project.title ? 'ring-2 ring-blue-500 rounded-lg' : ''}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </aside>
      <article className="flex-1 overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
        <p className="text-4xl mb-4">{project.emoji}</p>
        <p className="text-gray-600 mb-2">Date: {project.date}</p>
        <p className="mb-4">{project.shortDescription}</p>
        <MarkdownText markdownContent={project.longDescriptionMarkdown}/>
        {project.screenshotUrls.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshotUrls.map((url, index) => (
                <img key={index} src={'/' + url} alt={`Screenshot ${index + 1}`} className="w-full h-auto rounded-lg" />
              ))}
            </div>
          </div>
        )}
        {project.links.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Links</h2>
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
      </article>
    </div>
  )
}