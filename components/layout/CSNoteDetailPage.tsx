import { CSNote } from '@/types/types';
import MarkdownText from '@/components/MarkdownText';
import PageContainer from '@/components/layout/PageContainer';

// Helper function to get animation delay based on element type
const getAnimationDelay = (elementType: string) => {
  const baseDelays: { [key: string]: number } = {
    h1: 0,
    h2: 100,
    h3: 200,
    p: 300,
    ul: 400,
    li: 500
  };
  return baseDelays[elementType] || 0;
};

interface CSNoteDetailPageProps {
  note: CSNote;
}

export default function CSNoteDetailPage({ note }: CSNoteDetailPageProps) {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <PageContainer className="max-w-4xl lg:p-8">
          <h1 
            className="text-2xl mb-4 animate-card-entrance"
            style={{ animationDelay: `${getAnimationDelay('h1')}ms` }}
          >
            {note.title}
          </h1>
          <div 
            className="animate-card-entrance"
            style={{ animationDelay: `${getAnimationDelay('p')}ms` }}
          >
            <MarkdownText markdownContent={note.content} />
          </div>
        </PageContainer>
      </article>
    </div>
  );
} 