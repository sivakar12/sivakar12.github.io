import Link from 'next/link';
import { LinkItem } from '@/types/types';

interface LinkCardProps {
  link: LinkItem;
  className?: string;
}

export default function LinkCard({ link, className = '' }: LinkCardProps) {
  return (
    <Link 
      href={link.url} 
      className={`block h-full ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-gray-800 group-hover:text-primary-700 transition-colors">
            {link.name}
          </h2>
          {link.emoji && (
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {link.emoji}
            </span>
          )}
        </div>
        <div className="mt-3">
          <p className="text-gray-700 text-sm">{link.description}</p>
          <p className="text-gray-600 text-xs mt-2 truncate">{link.url}</p>
        </div>
      </div>
    </Link>
  );
} 