import Link from 'next/link';

interface DetailedCardProps {
  title: string;
  description: string;
  url: string;
  emoji?: string;
  href: string;
  className?: string;
  external?: boolean;
}

export default function DetailedCard({ 
  title, 
  description, 
  url, 
  emoji, 
  href, 
  className = '', 
  external = false 
}: DetailedCardProps) {
  const linkProps = external ? {
    target: "_blank" as const,
    rel: "noopener noreferrer" as const
  } : {};

  return (
    <Link 
      href={href} 
      className={`block h-full ${className}`}
      {...linkProps}
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="h-16 flex items-start justify-between">
          <h2 className="text-2xl text-gray-800 group-hover:text-primary-700 transition-colors leading-tight">
            {title}
          </h2>
          {emoji && (
            <span className="text-3xl group-hover:scale-110 transition-transform">
              {emoji}
            </span>
          )}
        </div>
        <div className="mt-3">
          <p className="text-gray-700 text-sm">{description}</p>
          <p className="text-gray-600 text-xs mt-2 truncate">{url}</p>
        </div>
      </div>
    </Link>
  );
} 