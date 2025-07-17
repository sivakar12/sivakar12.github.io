// app/page.tsx
import { getAllCSNotes } from '@/utils/data-loaders';
import CSNotesPage from '@/components/layout/CSNotesPage';

export default function CSNotes() {
  const allNotes = getAllCSNotes();
  return <CSNotesPage notes={allNotes} />;
}