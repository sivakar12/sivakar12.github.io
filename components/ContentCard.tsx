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
      className={`block h-full ${className}`}
      {...(isExternalLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className={`card group h-full flex flex-col min-h-[160px] ${type === 'cs-note' ? 'justify-center' : ''}`}>
        <div className={`w-full ${type === 'cs-note' ? 'text-center flex flex-col items-center' : 'flex items-center justify-between'}`}>
          <h2 className={`text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors ${type === 'cs-note' ? 'mb-2' : ''}`}>{displayTitle}</h2>
          {'emoji' in item && <span className={`text-3xl group-hover:scale-110 transition-transform ${type === 'cs-note' ? 'mt-2' : ''}`}>{item.emoji}</span>}
        </div>
        {type !== 'cs-note' && (
          <div className="mt-3">
            {'shortDescription' in item && item.shortDescription && (
              <p className="text-gray-700 text-sm">{item.shortDescription}</p>
            )}
            {type === 'link' && (
              <p className="text-gray-600 text-xs mt-2 truncate">{(item as LinkItem).url}</p>
            )}
          </div>
        )}
      </div>
    </Link>
  )
} 