import Link from 'next/link';
import { CSNote } from '@/types/types';

interface CSNoteCardProps {
  note: CSNote;
  className?: string;
}

export default function CSNoteCard({ note, className = '' }: CSNoteCardProps) {
  return (
    <Link 
      href={`/cs-notes/${note.id}`} 
      className={`block h-full ${className}`}
    >
      <div className="card group h-full flex flex-col min-h-[160px] justify-center">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-xl text-gray-800 group-hover:text-primary-700 transition-colors mb-2">
            {note.title}
          </h2>
          {'emoji' in note && (note as any).emoji && (
            <span className="text-3xl group-hover:scale-110 transition-transform mt-2">
              {(note as any).emoji}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
} 