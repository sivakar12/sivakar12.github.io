import { getAllArticles } from '@/utils/data-loaders'
import SimpleCard from '@/components/cards/SimpleCard'
import PageContainer from '@/components/layout/PageContainer'
import GridLayout from '@/components/layout/GridLayout'

export default function Articles() {
  const articles = getAllArticles();
  
  return (
    <PageContainer>
      <GridLayout>
        {articles.filter(article => !article.hidden).map((article, index) => (
          <SimpleCard 
            key={article.title} 
            title={article.title}
            description={article.shortDescription}
            href={`/articles/${article.id}`}
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
}