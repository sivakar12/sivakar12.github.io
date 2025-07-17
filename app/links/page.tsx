import { loadLinks } from '@/utils/data-loaders';
import DetailedCard from '@/components/cards/DetailedCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

export default function Links() {
  const links = loadLinks();
  
  return (
    <PageContainer>
      <GridLayout>
        {links.map((link, index) => (
          <DetailedCard 
            key={link.id}
            title={link.name}
            description={link.description}
            url={link.url}
            emoji={link.emoji}
            href={link.url}
            external={true}
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
}