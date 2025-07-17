// app/page.tsx
import { getAllCSNotes } from '@/utils/data-loaders';
import CenteredCard from '@/components/cards/CenteredCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

export default function CSNotes() {
  const allNotes = getAllCSNotes();
  
  return (
    <PageContainer className="py-8">
      <h1 className="text-3xl mb-6">CS Notes</h1>
      <p className="mb-6">
        "If you can't explain something in simple terms, you don't understand it." Here I am, trying to explain computer science concepts in simple terms.
      </p>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} className="auto-rows-fr">
        {allNotes.map((note) => (
          <CenteredCard 
            key={note.id} 
            title={note.title}
            emoji={(note as any).emoji}
            href={`/cs-notes/${note.id}`}
            className="h-full" 
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
}