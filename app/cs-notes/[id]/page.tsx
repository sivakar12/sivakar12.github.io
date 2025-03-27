import { getAllCSNotes, getCSNoteById } from '@/utils/data-loaders';
import MarkdownText from '@/components/MarkdownText';
import ContentCard from '@/components/ContentCard';

export function generateStaticParams() {
  const notes = getAllCSNotes();
  return notes.map((note) => ({
    id: note.id,
  }))
}

export default function NotePage({ params }: { params: { id: string } }) {
  const note = getCSNoteById(params.id);

  if (!note) return <div>Note not found</div>

  return (
    <div className="h-[calc(100vh-4rem)]">
      <article className="h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 lg:p-8">
          <h1 className="text-2xl mb-4">{note.title}</h1>
          <MarkdownText markdownContent={note.content} />
        </div>
      </article>
    </div>
  )
}