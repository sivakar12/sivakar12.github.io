type PersonalWebsiteData = {
  name: string;
  title: string;
  bigBio: string;
  smallBio: string;
  contact: ContactData;
  photoUrl: string;
  resume: ResumeData;
  projects: ProjectItem[];
  articles: ArticleItem[];
  settings: WebsiteSettings;
}

type ContactData = {
  email: string;
  phone: string;
}

type LinksData = {
  website: string;
  LinkedIn: string;
  GitHub: string;
  Twitter?: string;
  Goodreads?: string;
  YouTube?: string;
}

type ResumeData = {
  name: string;
  contact: ContactData;
  links: LinksData;
  personalStatement: string;
  skills: SkillGroupItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  interests: string[];
}

type SkillGroupItem = {
  title: string;
  details: string;
}

type ExperienceItem = {
  company: string;
  jobTitle: string;
  dates: string;
  details: {
    title: string;
    description: string;
  }[];
}

type EducationItem = {
  title: string;
  details: string[];
}

type ProjectItem = {
  title: string;
  date: string;
  shortDescription: string;
  longDescriptionMarkdown: string;
  screenshotUrls: string[];
  links: {
    title: string;
    url: string;
  }[]
}

type ArticleItem = {
  title: string;
  hidden: boolean;
  date?: string;
  shortDescription?: string;
  contentMarkdown: string;
}

type ColorScheme = {
  light: {
    primary: string;
    primaryGradient: string;
    secondary: string;
    secondaryGradient: string;
    background: string;
    text: string;
    accent: string;
  };
  dark: {
    primary: string;
    primaryGradient: string;
    secondary: string;
    secondaryGradient: string;
    background: string;
    text: string;
    accent: string;
  };
  shared: {
    white: string;
    black: string;
    grayLight: string;
    grayDark: string;
  };
}

type WebsiteSettings = {
  font: string;
  colorScheme: ColorScheme;
}