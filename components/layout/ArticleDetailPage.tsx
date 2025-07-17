import { Article } from '@/types/types';
import MarkdownText from '@/components/MarkdownText';
import PageContainer from '@/components/layout/PageContainer';

interface ArticleDetailPageProps {
  article: Article;
}

export default function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <PageContainer className="max-w-4xl lg:p-8">
          <h1 className="text-2xl mb-4">{article.title}</h1>
          <MarkdownText markdownContent={article.content}/>
        </PageContainer>
      </article>
    </div>
  );
} 