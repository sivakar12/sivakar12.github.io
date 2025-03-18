
import ArticleCard from '@/app/articles/ArticleCard'
import MarkdownText from '@/app/utils/MarkdownText'
import { getAllArticles, getArticleById } from '../dataLoader'

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    id: article.id
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)

  if (!article) return <div>Article not found</div>

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 overflow-y-auto border-r">
        <div className="p-4 space-y-4">
          {getAllArticles().filter(a => !a.hidden).map((a) => (
            <div key={a.title} className={a.title === article.title ? 'ring-2 ring-blue-500 rounded-lg' : ''}>
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </aside>
      <article className="flex-1 overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        {article.date && <p className="text-gray-600 mb-2">Date: {article.date.toString()}</p>}
        <MarkdownText markdownContent={article.content} />
      </article>
    </div>
  )
}