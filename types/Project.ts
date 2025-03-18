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