
import articles from '@/data/articles'
import ArticleCard from '@/app/articles/ArticleCard'
import MarkdownText from '@/app/utils/MarkdownText'

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.title.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(
    (a) => a.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  )

  if (!article) return <div>Article not found</div>

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 overflow-y-auto border-r">
        <div className="p-4 space-y-4">
          {articles.map((a) => (
            <div key={a.title} className={a.title === article.title ? 'ring-2 ring-blue-500 rounded-lg' : ''}>
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </aside>
      <article className="flex-1 overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <p className="text-4xl mb-4">{article.emoji}</p>
        {article.date && <p className="text-gray-600 mb-2">Date: {article.date}</p>}
        <MarkdownText markdownContent={article.contentMarkdown} />
      </article>
    </div>
  )
}