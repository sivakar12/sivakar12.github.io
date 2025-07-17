import { Article } from '@/types/types';
import ArticleCard from '@/components/cards/ArticleCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

interface ArticlesPageProps {
  articles: Article[];
}

export default function ArticlesPage({ articles }: ArticlesPageProps) {
  return (
    <PageContainer>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {articles.filter(article => !article.hidden).map((article) => (
          <ArticleCard key={article.title} article={article} className="h-full" />
        ))}
      </GridLayout>
    </PageContainer>
  );
} 