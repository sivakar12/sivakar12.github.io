import Markdown from "react-markdown";
import { getAllCSNotes, getCSNoteById } from "@/utils/data-loaders";
import MarkdownText from "@/components/MarkdownText";

export function generateStaticParams() {
  return getAllCSNotes().map((note) => ({
    id: note.id
  }))
}

export default function NotePage({ params }: { params: { id: string } }) {
  const note = getCSNoteById(params.id);
  console.log(note);

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
        <MarkdownText markdownContent={note.content} />
    </div>
  )
}