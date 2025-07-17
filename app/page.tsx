import { loadHomeContent } from '@/utils/data-loaders'
import HomePage from '@/components/layout/HomePage'

export default function Home() {
  const homeContent = loadHomeContent();
  return <HomePage homeContent={homeContent} />;
}