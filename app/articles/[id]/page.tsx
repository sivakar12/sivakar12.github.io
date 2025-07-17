import { getAllArticles } from '@/utils/data-loaders'
import ArticleDetailPage from '@/components/layout/ArticleDetailPage'

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const articles = getAllArticles();
  const article = articles.find((a) => a.id === params.id)

  if (!article) return <div>Article not found</div>

  return <ArticleDetailPage article={article} />;
}