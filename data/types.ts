export type PersonalWebsiteData = {
  name: string;
  title: string;
  bigBio: string;
  smallBio: string;
  contact: ContactData;
  links: LinkItem[];
  photoUrl: string;
  resume: ResumeData;
  settings: WebsiteSettings;
}

export type ContactData = {
  email: string;
  phone: string;
}

export type LinkItem = {
  id: string;
  name: string;
  url: string;
  emoji: string;
}

export type ResumeData = {
  name: string;
  contact: ContactData;
  links: LinkItem[];
  personalStatement: string;
  skills: SkillGroupItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  interests: string[];
}

export type SkillGroupItem = {
  title: string;
  details: string;
}

export type ExperienceItem = {
  company: string;
  jobTitle: string;
  dates: string;
  details: {
    title: string;
    description: string;
  }[];
}

export type EducationItem = {
  title: string;
  details: string[];
}


export type ColorScheme = {
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

export type WebsiteSettings = {
  font: string;
  colorScheme: ColorScheme;
}