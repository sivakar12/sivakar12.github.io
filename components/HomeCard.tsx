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
        <h2 className="text-2xl text-gray-900 font-medium">{item.mainPoint}</h2>
      </div>
      <div className="flex-1">
        {Array.isArray(item.description) ? (
          <ul className="space-y-2">
            {item.description.map((point, index) => (
              <li key={index} className="text-gray-500 text-base flex items-start leading-relaxed">
                <span className="text-primary-600 mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-base leading-relaxed">{item.description}</p>
        )}
      </div>
    </div>
  );
} 