import { getAllCSNotes, getCSNoteById } from '@/utils/data-loaders';
import CSNoteDetailPage from '@/components/layout/CSNoteDetailPage';

export function generateStaticParams() {
  const notes = getAllCSNotes();
  return notes.map((note) => ({
    id: note.id,
  }))
}

export default function NotePage({ params }: { params: { id: string } }) {
  const note = getCSNoteById(params.id);

  if (!note) return <div>Note not found</div>

  return <CSNoteDetailPage note={note} />;
}