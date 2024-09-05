import { LinkItem } from "./types";

// export const linksData: LinksData = {
//   website: "https://sivakar.com",
//   LinkedIn: "https://www.linkedin.com/in/sivakar-sithamparanathan-363762109/",
//   GitHub: "http://github.com/sivakar12"
//   //Goodreads
// }

const links: LinkItem[] = [
  {
    id: "website",
    name: "Website",
    url: "https://sivakar.com",
    emoji: "🕸️"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sivakar-sithamparanathan-363762109/",
    emoji: "💼"
  },
  {
    id: "github",
    name: "GitHub",
    url: "http://github.com/sivakar12",
    emoji: "⌨️"
  },
  {
    id: "goodreads",
    name: "Goodreads",
    url: "https://www.goodreads.com/user/show/64724864-sivakar-sithamparanathan",
    emoji: "📚"
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://x.com/sivakar12",
    emoji: "🐦‍⬛"
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/sivakar12/",
    emoji: "🤸‍♂️"
  },
  {
    id: "duolingo",
    name: "Duolingo",
    url: "https://www.duolingo.com/profile/sivakar12",
    emoji: "🦉"
  }
]

export default links;