import { CSNote } from '@/types/types';
import CSNoteCard from '@/components/cards/CSNoteCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

interface CSNotesPageProps {
  notes: CSNote[];
}

export default function CSNotesPage({ notes }: CSNotesPageProps) {
  return (
    <PageContainer className="py-8">
      <h1 className="text-3xl mb-6">CS Notes</h1>
      <p className="mb-6">
        "If you can't explain something in simple terms, you don't understand it." Here I am, trying to explain computer science concepts in simple terms.
      </p>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} className="auto-rows-fr">
        {notes.map((note) => (
          <CSNoteCard key={note.id} note={note} className="h-full" />
        ))}
      </GridLayout>
    </PageContainer>
  );
} 