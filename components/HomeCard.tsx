import { HomePageItem } from '@/types/types';

interface HomeCardProps {
  item: HomePageItem;
  style?: React.CSSProperties;
}

export default function HomeCard({ item, style }: HomeCardProps) {
  return (
    <div 
      className="card animate-card-entrance"
      style={style}
    >
      <div className="h-16 flex items-start">
        <h2 className="text-xl text-black font-semibold">{item.mainPoint}</h2>
      </div>
      <div className="flex-1">
        {Array.isArray(item.description) ? (
          <ul className="space-y-2">
            {item.description.map((point, index) => (
              <li key={index} className="text-black text-base flex items-start leading-relaxed font-medium">
                <span className="text-black mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-base leading-relaxed font-medium">{item.description}</p>
        )}
      </div>
    </div>
  );
} 