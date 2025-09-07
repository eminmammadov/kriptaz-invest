export async function getMarkdownContent(markdownPath: string): Promise<string> {
  try {
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
