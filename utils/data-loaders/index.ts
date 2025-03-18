import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { Article } from '@/types/Article';
import { CSNote } from '@/types/CsNote';
import { HomePageItem } from '@/types/home';

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