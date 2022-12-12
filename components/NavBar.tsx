import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';

export function NavBar() {
  const router = useRouter();
  const route = router.pathname;

  return (
    <Menu stackable attached="bottom">
      <Link href="/">
        <Menu.Item active={route === "/"}>Home</Menu.Item>
      </Link>
      <Link href="/projects">
        <Menu.Item active={route.startsWith("/projects")}>Projects</Menu.Item>
      </Link>
      <Menu.Item>CV</Menu.Item>
      <Menu.Item>Blog</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
