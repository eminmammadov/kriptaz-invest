import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  source?: string;
  date: string;
  timestamp: number;
  imagePath: string;
  slug: string;
  markdownPath: string;
  content?: string;
}

export async function getAllArticles(): Promise<Article[]> {
  const markdownDir = path.join(process.cwd(), 'src', 'lib', 'content', 'markdown');
  
  try {
    const files = fs.readdirSync(markdownDir);
    const articles: Article[] = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(markdownDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        const slug = file.replace('.md', '');
        
        articles.push({
          id: slug,
          title: data.title || '',
          description: data.description || '',
          category: data.category || 'General',
          source: data.source || 'Kriptaz',
          date: data.date || new Date().toLocaleDateString(),
          timestamp: new Date(data.date || new Date()).getTime(),
          imagePath: data.imagePath || '/images/articles/1.png',
          slug: data.slug || slug,
          markdownPath: `/lib/content/markdown/${file}`,
          content: content
        });
      }
    }

    // Sort by timestamp (newest first)
    return articles.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}

export async function getFeaturedArticle(): Promise<Article | undefined> {
  const articles = await getAllArticles();
  return articles[0]; // First article (newest)
}

export async function getArticles(): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.slice(1); // Skip the most recent (featured) article
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getAllArticles();
  return articles.find(article => article.slug === slug);
}

export async function getCategoryCounts(): Promise<Record<string, number>> {
  const articles = await getAllArticles();
  
  // Get all unique categories from articles
  const uniqueCategories = [...new Set(articles.map(a => a.category))];
  
  // Start with "All Insights"
  const counts: Record<string, number> = {
    'All Insights': articles.length,
  };
  
  // Add each unique category with its count
  uniqueCategories.forEach(category => {
    counts[category] = articles.filter(a => a.category === category).length;
  });

  return counts;
}

export async function getAvailableCategories(): Promise<string[]> {
  const articles = await getAllArticles();
  const uniqueCategories = [...new Set(articles.map(a => a.category))];
  return ['All Insights', ...uniqueCategories];
}
