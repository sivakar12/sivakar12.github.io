import { HomePageItem } from '@/types/types';

interface HomeCardProps {
  item: HomePageItem;
}

export default function HomeCard({ item }: HomeCardProps) {
  return (
    <div className="card">
      <h2 className="text-xl mb-4 text-gray-800">{item.mainPoint}</h2>
      {Array.isArray(item.description) ? (
        <ul className="space-y-2">
          {item.description.map((point, index) => (
            <li key={index} className="text-gray-700 flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">{item.description}</p>
      )}
    </div>
  );
} 