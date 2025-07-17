import { loadLinks } from '@/utils/data-loaders';
import LinksPage from '@/components/layout/LinksPage';

export default function Links() {
  const links = loadLinks();
  return <LinksPage links={links} />;
}