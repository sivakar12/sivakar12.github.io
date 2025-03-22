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
  const allNotes = getAllCSNotes();

  if (!note) return <div>Note not found</div>

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 overflow-y-auto border-r">
        <div className="p-4 space-y-4">
          {allNotes.map((n) => (
            <div 
              key={n.id} 
              className={`transition-all duration-300 ${
                n.id === note.id 
                  ? 'scale-105 -mr-4' 
                  : 'hover:scale-[1.02]'
              }`}
            >
              <div className={`${n.id === note.id ? 'clip-path-right' : ''}`}>
                <ContentCard item={n} type="cs-note" />
              </div>
            </div>
          ))}
        </div>
      </aside>
      <article className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 lg:p-8">
          <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
          <MarkdownText markdownContent={note.content} />
        </div>
      </article>
    </div>
  )
}