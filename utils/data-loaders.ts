import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { Article, CSNote, HomePageItem, ProjectItem, LinkItem, Texts, Profile, MiscPage } from '@/types/types';

// Shared utility function
function readMarkdownFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
}

// Articles data loader
const articlesDir = path.join(process.cwd(), 'data', 'articles');

export function getAllArticles(): Article[] {
  // Read the order file
  const orderFilePath = path.join(process.cwd(), 'data', 'articles-order.txt');
  let orderedIds: string[] = [];
  try {
    const orderContent = fs.readFileSync(orderFilePath, 'utf8');
    orderedIds = orderContent.split('\n').filter(line => line.trim());
  } catch (error) {
    console.warn('Could not read articles-order.txt, falling back to alphabetical order');
  }

  const fileNames = fs.readdirSync(articlesDir);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const articles = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(articlesDir, fileName);
    const { data, content } = readMarkdownFile(filePath);

    return {
      id,
      title: data.title,
      content,
      shortDescription: data.shortDescription,
      hidden: data.hidden || false
    }
  }).filter(article => article.content && article.title && !article.hidden);

  // Sort articles based on the order file
  if (orderedIds.length > 0) {
    articles.sort((a, b) => {
      const indexA = orderedIds.indexOf(a.id);
      const indexB = orderedIds.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  } else {
    articles.sort((a, b) => a.title.localeCompare(b.title));
  }

  return articles;
}

export function getArticleById(id: string): Article | null {
  try {
    const filePath = path.join(articlesDir, `${id}.md`);
    const { data, content } = readMarkdownFile(filePath);
    
    // Don't return hidden articles
    if (data.hidden) {
      return null;
    }

    return {
      id,
      title: data.title,
      content,
      shortDescription: data.shortDescription,
      hidden: false
    }
  } catch (error) {
    console.error(`Error loading article ${id}:`, error);
    return null;
  }
}

// CS Notes data loader
const csNotesDir = path.join(process.cwd(), 'data', 'cs-notes');

export function getAllCSNotes(): CSNote[] {
  // Read the order file
  const orderFilePath = path.join(process.cwd(), 'data', 'cs-notes-order.txt');
  let orderedIds: string[] = [];
  try {
    const orderContent = fs.readFileSync(orderFilePath, 'utf8');
    orderedIds = orderContent.split('\n').filter(line => line.trim());
  } catch (error) {
    console.warn('Could not read cs-notes-order.txt, falling back to alphabetical order');
  }

  const fileNames = fs.readdirSync(csNotesDir);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const csNotes = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(csNotesDir, fileName);
    const { data, content } = readMarkdownFile(filePath);

    return {
      id,
      title: data.title,
      content
    }
  }).filter(note => note.content && note.title);

  // Sort notes based on the order file
  if (orderedIds.length > 0) {
    return csNotes.sort((a, b) => {
      const indexA = orderedIds.indexOf(a.id);
      const indexB = orderedIds.indexOf(b.id);
      // If an ID is not in the order file, put it at the end
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  }

  // Fallback to alphabetical order if no order file
  return csNotes.sort((a, b) => a.id.localeCompare(b.id));
}

export function getCSNoteById(id: string): CSNote {
  const filePath = path.join(csNotesDir, `${id}.md`);
  const { data, content } = readMarkdownFile(filePath);
  return {
    id,
    title: data.title,
    content
  }
}

export function loadHomeContent(): HomePageItem[] {
  try {
    const yamlPath = path.join(process.cwd(), 'data', 'home-content.yaml');
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    const data = yaml.load(fileContents) as HomePageItem[];
    
    // Type assertion and validation
    if (!Array.isArray(data)) {
      throw new Error('Invalid YAML structure');
    }

    return data;
  } catch (error) {
    console.error('Error loading home content:', error);
    return [];
  }
}

// Projects data loader
const projectsDir = path.join(process.cwd(), 'data', 'projects');

export function getAllProjects(): ProjectItem[] {
  // Read the order file
  const orderFilePath = path.join(process.cwd(), 'data', 'projects-order.txt');
  let orderedIds: string[] = [];
  try {
    const orderContent = fs.readFileSync(orderFilePath, 'utf8');
    orderedIds = orderContent.split('\n').filter(line => line.trim());
  } catch (error) {
    console.warn('Could not read projects-order.txt, falling back to alphabetical order');
  }

  const fileNames = fs.readdirSync(projectsDir);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const projects = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(projectsDir, fileName);
    const { data, content } = readMarkdownFile(filePath);

    return {
      id,
      title: data.title,
      content,
      shortDescription: data.shortDescription,
      emoji: data.emoji,
      screenshotUrls: data.screenshotUrls || [],
      links: data.links || [],
      hidden: data.hidden || false
    }
  }).filter(project => project.content && project.title && !project.hidden);

  // Sort projects based on the order file
  if (orderedIds.length > 0) {
    projects.sort((a, b) => {
      const indexA = orderedIds.indexOf(a.id);
      const indexB = orderedIds.indexOf(b.id);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  } else {
    projects.sort((a, b) => a.title.localeCompare(b.title));
  }

  return projects;
}

export function getProjectById(id: string): ProjectItem | null {
  try {
    const filePath = path.join(projectsDir, `${id}.md`);
    const { data, content } = readMarkdownFile(filePath);
    
    // Don't return hidden projects
    if (data.hidden) {
      return null;
    }

    return {
      id,
      title: data.title,
      content,
      shortDescription: data.shortDescription,
      emoji: data.emoji,
      screenshotUrls: data.screenshotUrls || [],
      links: data.links || [],
      hidden: false
    }
  } catch (error) {
    console.error(`Error loading project ${id}:`, error);
    return null;
  }
}

export function loadLinks(): LinkItem[] {
  try {
    const yamlPath = path.join(process.cwd(), 'data', 'links.yaml');
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    const data = yaml.load(fileContents) as LinkItem[];
    
    // Type assertion and validation
    if (!Array.isArray(data)) {
      throw new Error('Invalid YAML structure');
    }

    return data;
  } catch (error) {
    console.error('Error loading links:', error);
    return [];
  }
}

export function loadTexts(): Texts {
  try {
    const yamlPath = path.join(process.cwd(), 'data', 'texts.yaml');
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    const data = yaml.load(fileContents) as Texts;
    
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid YAML structure');
    }

    return data;
  } catch (error) {
    console.error('Error loading texts:', error);
    return {};
  }
}

export function loadProfile(): Profile {
  try {
    const yamlPath = path.join(process.cwd(), 'data', 'profile.yaml');
    const fileContents = fs.readFileSync(yamlPath, 'utf8');
    const data = yaml.load(fileContents) as Profile;
    
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid YAML structure');
    }

    return data;
  } catch (error) {
    console.error('Error loading profile:', error);
    return {
      name: "Sivakar Sithamparanathan",
      imageSrc: "/profile.jpeg",
      imageAlt: "Sivakar Sithamparanathan"
    };
  }
}

// Misc Pages data loader
const miscPagesDir = path.join(process.cwd(), 'data', 'misc-pages');

export function getAllMiscPages(): MiscPage[] {
  if (!fs.existsSync(miscPagesDir)) {
    return [];
  }
  const fileNames = fs.readdirSync(miscPagesDir);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const pages = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(miscPagesDir, fileName);
    const { content } = readMarkdownFile(filePath);

    return {
      id,
      content
    }
  }).filter(page => page.content);

  return pages.sort((a, b) => a.id.localeCompare(b.id));
}

export function getMiscPageById(id: string): MiscPage | null {
  try {
    const filePath = path.join(miscPagesDir, `${id}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const { content } = readMarkdownFile(filePath);
    
    return {
      id,
      content
    }
  } catch (error) {
    console.error(`Error loading misc page ${id}:`, error);
    return null;
  }
}