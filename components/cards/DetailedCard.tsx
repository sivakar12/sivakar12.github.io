import Link from 'next/link';

interface DetailedCardProps {
  title: string;
  description: string;
  url: string;
  emoji?: string;
  href: string;
  external?: boolean;
  style?: React.CSSProperties;
}

export default function DetailedCard({ 
  title, 
  description, 
  url, 
  emoji, 
  href, 
  external = false,
  style
}: DetailedCardProps) {
  const linkProps = external ? {
    target: "_blank" as const,
    rel: "noopener noreferrer" as const
  } : {};

  return (
    <Link 
      href={href} 
      className="block h-full animate-card-entrance"
      style={style}
      {...linkProps}
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="h-20 flex items-start justify-between">
          <h2 className="text-xl text-black font-semibold leading-tight">
            {title}
          </h2>
          {emoji && (
            <span className="text-3xl">
              {emoji}
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-start">
          <p className="text-black text-base leading-relaxed font-medium">{description}</p>
          <p className="text-black text-sm mt-2 truncate font-medium">{url}</p>
        </div>
      </div>
    </Link>
  );
} 