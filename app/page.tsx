import { loadHomeContent, loadProfile } from '@/utils/data-loaders'
import HomePage from '@/components/layout/HomePage'

export default function Home() {
  const homeContent = loadHomeContent();
  const profile = loadProfile();
  return <HomePage homeContent={homeContent} profile={profile} />;
}