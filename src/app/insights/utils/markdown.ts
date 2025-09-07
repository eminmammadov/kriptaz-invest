import fs from 'fs';
import path from 'path';

export async function getMarkdownContent(markdownPath: string): Promise<string> {
  try {
    // For build time, read from file system
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
      const fullPath = path.join(process.cwd(), 'public', markdownPath);
      return fs.readFileSync(fullPath, 'utf8');
    }
    
    // For development, use fetch
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${markdownPath}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return '';
  }
}
