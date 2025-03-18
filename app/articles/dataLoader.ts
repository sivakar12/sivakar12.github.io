import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article } from '@/types/Article';

const articlesFolder = path.join(process.cwd(), 'data', 'articles');

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesFolder);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const articles = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(articlesFolder, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

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
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    id,
    title: data.title,
    date: data.date,
    hidden: data.hidden,
    shortDescription: data.shortDescription,
    content
  }
}