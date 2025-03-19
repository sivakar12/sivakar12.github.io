import { getAllArticles } from '@/utils/data-loaders'
import ContentCard from '@/components/ContentCard'

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.filter(article => !article.hidden).map((article) => (
          <ContentCard key={article.title} item={article} type="article" className="h-full" />
        ))}
      </div>
    </div>
  )
}