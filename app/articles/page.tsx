import { getAllArticles } from '@/utils/data-loaders'
import SimpleCard from '@/components/cards/SimpleCard'
import PageContainer from '@/components/layout/PageContainer'
import GridLayout from '@/components/layout/GridLayout'

export default function Articles() {
  const articles = getAllArticles();
  
  return (
    <PageContainer>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {articles.filter(article => !article.hidden).map((article) => (
          <SimpleCard 
            key={article.title} 
            title={article.title}
            description={article.shortDescription}
            href={`/articles/${article.id}`}
            className="h-full" 
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
}