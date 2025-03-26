import { getAllArticles } from '@/utils/data-loaders'
import ContentCard from '@/components/ContentCard'
import Link from 'next/link'
import MarkdownText from '@/components/MarkdownText'

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articles = getAllArticles();
  const article = articles.find(
    (a) => a.id === params.id
  )

  if (!article) return <div>Article not found</div>

  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 lg:p-8">
          <h1 className="text-2xl font-semibold mb-4">{article.title}</h1>
          <MarkdownText markdownContent={article.content}/>
        </div>
      </article>
    </div>
  )
}