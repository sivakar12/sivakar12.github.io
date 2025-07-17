import { getAllArticles } from '@/utils/data-loaders'
import ArticlesPage from '@/components/layout/ArticlesPage'

export default function Articles() {
  const articles = getAllArticles();
  return <ArticlesPage articles={articles} />;
}