import { HomePageItem } from '@/types/types';

interface HomeCardProps {
  item: HomePageItem;
}

export default function HomeCard({ item }: HomeCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{item.mainPoint}</h2>
      {Array.isArray(item.description) ? (
        <ul className="list-disc list-inside space-y-1">
          {item.description.map((point, index) => (
            <li key={index} className="text-gray-600">{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">{item.description}</p>
      )}
    </div>
  );
} 