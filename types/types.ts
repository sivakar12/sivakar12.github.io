export type Texts = Record<string, string>;

export type LinkItem = {
  id: string;
  name: string;
  url: string;
  description: string;
  emoji: string;
};

export interface ProjectLink {
  title: string;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  shortDescription?: string;
  hidden?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  content: string;
  shortDescription?: string;
  emoji?: string;
  screenshotUrls?: string[];
  links?: { title: string; url: string; }[];
}

export interface HomePageItem {
  mainPoint: string;
  description: string | string[];  // Can be a single string or array of bullet points
}

export type CSNote = {
  id: string;
  title: string;
  content: string;
};

export interface Profile {
  name: string;
  imageSrc: string;
  imageAlt: string;
} 