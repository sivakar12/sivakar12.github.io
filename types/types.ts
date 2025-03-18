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

export interface ProjectItem {
  id: string;
  title: string;
  emoji: string;
  date: string;
  shortDescription: string;
  longDescriptionMarkdown: string;
  screenshotUrls: string[];
  links: ProjectLink[];
}

export interface HomePageItem {
  mainPoint: string;
  description: string | string[];  // Can be a single string or array of bullet points
}

export type Article = {
  id: string;
  title: string;
  date?: string;
  hidden: boolean;
  shortDescription: string;
  content: string;
};

export type CSNote = {
  id: string;
  title: string;
  content: string;
}; 