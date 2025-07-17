import { loadLinks } from '@/utils/data-loaders';
import DetailedCard from '@/components/cards/DetailedCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

export default function Links() {
  const links = loadLinks();
  
  return (
    <PageContainer>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {links.map((link) => (
          <DetailedCard 
            key={link.id}
            title={link.name}
            description={link.description}
            url={link.url}
            emoji={link.emoji}
            href={link.url}
            external={true}
            className="h-full"
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
}