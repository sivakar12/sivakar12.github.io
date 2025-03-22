// app/page.tsx
import { getAllCSNotes } from '@/utils/data-loaders';
import ContentCard from '@/components/ContentCard';

export default function Home() {
  const allNotes = getAllCSNotes();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CS Notes</h1>
      <p className="mb-6">
        "If you can't explain something in simple terms, you don't understand it." Here I am, trying to explain computer science concepts in simple terms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {allNotes.map((note) => (
          <ContentCard key={note.id} item={note} type="cs-note" className="h-full" />
        ))}
      </div>
    </div>
  );
}