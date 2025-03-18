// app/page.tsx
import Link from 'next/link';
import { getAllCSNotes } from '@/utils/data-loaders';

export default function Home() {
  const allNotes = getAllCSNotes();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CS Notes</h1>
      <p className="mb-6">
      "If you can't explain something in simple terms, you don't understand it." Here I am, trying to explain things in simple terms.
      </p>
      <ul className="space-y-4">
        {allNotes.map(({ id, title }) => (
          <li key={id} className="border-b pb-2">
            <Link href={`/cs-notes/${id}`} className="text-blue-600 hover:underline text-lg">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}