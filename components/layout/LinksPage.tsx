import { LinkItem } from '@/types/types';
import LinkCard from '@/components/cards/LinkCard';
import PageContainer from '@/components/layout/PageContainer';
import GridLayout from '@/components/layout/GridLayout';

interface LinksPageProps {
  links: LinkItem[];
}

export default function LinksPage({ links }: LinksPageProps) {
  return (
    <PageContainer>
      <GridLayout cols={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {links.map((link) => (
          <LinkCard 
            key={link.id}
            link={link}
            className="h-full"
          />
        ))}
      </GridLayout>
    </PageContainer>
  );
} 