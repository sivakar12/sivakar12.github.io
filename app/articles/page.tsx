import articles from '@/data/articles'
import ArticleCard from '@/app/articles/ArticleCard'

export default function ArticlesPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} className="h-full" />
        ))}
      </div>
    </div>
  )
}