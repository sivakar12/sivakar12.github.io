import { HomePageItem, Profile } from '@/types/types';
import HomeCard from '@/components/HomeCard';
import ProfileSection from '@/components/layout/ProfileSection';
import GridLayout from '@/components/layout/GridLayout';

interface HomePageProps {
  homeContent: HomePageItem[];
  profile: Profile;
}

export default function HomePage({ homeContent, profile }: HomePageProps) {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-peach-background">
      <div className="max-w-4xl mx-auto">
        <ProfileSection 
          name={profile.name}
          imageSrc={profile.imageSrc}
          imageAlt={profile.imageAlt}
        />

        <GridLayout variant="wide">
          {homeContent.map((item, index) => (
            <HomeCard key={index} item={item} />
          ))}
        </GridLayout>
      </div>
    </main>
  );
} 