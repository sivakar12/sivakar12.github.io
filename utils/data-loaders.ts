import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { Article } from '@/types/Article';
import { CSNote } from '@/types/CsNote';
import { HomePageItem } from '@/types/home';
import { ProjectItem } from '@/types/Project';
import { LinkItem } from '@/types/Link';
import { Texts } from '@/types/Texts';

// Shared utility function
function readMarkdownFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
}

// Articles data loader
const articlesFolder = path.join(process.cwd(), 'data', 'articles');

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesFolder);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const articles = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(articlesFolder, fileName);
    const { data, content } = readMarkdownFile(filePath);

    return {
      id,
      title: data.title,
      date: data.date,
      hidden: data.hidden,
      shortDescription: data.shortDescription,
      content
    }
  }).filter(article => article.content && article.title);

  return articles;
}

export function getArticleById(id: string): Article {
  const filePath = path.join(articlesFolder, `${id}.md`);
  const { data, content } = readMarkdownFile(filePath);
  return {
    id,
    title: data.title,
    date: data.date,
    hidden: data.hidden,
    shortDescription: data.shortDescription,
    content
  }
}

// CS Notes data loader
const csNotesDir = path.join(process.cwd(), 'data', 'cs-notes');

export function getAllCSNotes(): CSNote[] {
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

  return csNotes;
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
const projectsDirectory = path.join(process.cwd(), 'data/projects');

export function getAllProjects(): ProjectItem[] {
  // Get file names under /data/projects
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...data,
        longDescriptionMarkdown: content,
      } as ProjectItem;
    });

  // Sort projects by date in descending order
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
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