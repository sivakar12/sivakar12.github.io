import Link from 'next/link'
import { Article, ProjectItem, CSNote, LinkItem } from '@/types/types'

interface ContentCardProps {
  item: Article | ProjectItem | CSNote | LinkItem;
  type: 'article' | 'project' | 'cs-note' | 'link';
  className?: string;
}

export default function ContentCard({ item, type, className = '' }: ContentCardProps) {
  const getHref = () => {
    switch (type) {
      case 'article':
        return `/articles/${item.id}`;
      case 'project':
        return `/projects/${item.id}`;
      case 'cs-note':
        return `/cs-notes/${item.id}`;
      case 'link':
        return (item as LinkItem).url;
      default:
        return '#';
    }
  };

  const isExternalLink = type === 'link';
  const displayTitle = type === 'link' ? (item as LinkItem).name : (item as Article | ProjectItem | CSNote).title;

  return (
    <Link 
      href={getHref()} 
      className={`block ${className}`}
      {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gradient truncate">{displayTitle}</h2>
          {'emoji' in item && <span className="text-3xl">{item.emoji}</span>}
        </div>
        {'shortDescription' in item && item.shortDescription && (
          <p className="text-gray-600 text-sm">{item.shortDescription}</p>
        )}
        {type === 'link' && (
          <p className="text-gray-500 text-xs mt-2 truncate">{(item as LinkItem).url}</p>
        )}
        <div className="flex-grow"></div>
      </div>
    </Link>
  )
} 