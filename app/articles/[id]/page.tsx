import { getAllArticles, getArticleById } from '@/utils/data-loaders'
import MarkdownText from '@/components/MarkdownText'
import ContentCard from '@/components/ContentCard'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    id: article.id
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)
  const allArticles = getAllArticles()

  if (!article) {
    notFound()
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 overflow-y-auto border-r">
        <div className="p-4 space-y-4">
          {allArticles.map((a) => (
            <div key={a.id} className={a.id === article.id ? 'ring-2 ring-blue-500 rounded-lg' : ''}>
              <ContentCard item={a} type="article" />
            </div>
          ))}
        </div>
      </aside>
      <article className="flex-1 overflow-y-auto p-4">
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <MarkdownText markdownContent={article.content} />
      </article>
    </div>
  )
}