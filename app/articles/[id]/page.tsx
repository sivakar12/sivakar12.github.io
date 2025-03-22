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
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 overflow-y-auto border-r">
        <div className="p-4 space-y-4">
          {articles.map((a) => (
            <div 
              key={a.id} 
              className={`transition-all duration-300 ${
                a.id === article.id 
                  ? 'scale-105 -mr-4' 
                  : 'hover:scale-[1.02]'
              }`}
            >
              <div className={`${a.id === article.id ? 'clip-path-right' : ''}`}>
                <ContentCard item={a} type="article" />
              </div>
            </div>
          ))}
        </div>
      </aside>
      <article className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 lg:p-8">
          <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
          <MarkdownText markdownContent={article.content}/>
        </div>
      </article>
    </div>
  )
}