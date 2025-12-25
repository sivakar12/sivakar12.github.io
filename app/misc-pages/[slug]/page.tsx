import { getAllMiscPages, getMiscPageById } from '@/utils/data-loaders';
import MarkdownText from '@/components/MarkdownText';
import PageContainer from '@/components/layout/PageContainer';

export function generateStaticParams() {
  const pages = getAllMiscPages();
  return pages.map((page) => ({
    slug: page.id,
  }))
}

export default function MiscPage({ params }: { params: { slug: string } }) {
  const page = getMiscPageById(params.slug);

  if (!page) return <div className="p-8 text-center text-peach-text">Page not found</div>

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <article className="h-full">
        <PageContainer className="max-w-4xl lg:p-8">
          <div className="animate-card-entrance">
            <MarkdownText markdownContent={page.content} />
          </div>
        </PageContainer>
      </article>
    </div>
  );
}
