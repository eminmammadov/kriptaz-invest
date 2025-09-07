# Insights Page Components

This directory contains all the components for the Insights page, which displays articles and blog posts in a grid layout with a featured article at the top.

## Components

### InsightsPage
Main page component that orchestrates the layout and displays all articles.

### FeaturedArticle
Large banner component that displays the featured article prominently at the top of the page.

### ArticleCard
Grid item component that displays individual articles in the main grid layout.

## Data Structure

Articles are defined in `src/app/insights/data/articles.ts` with the following interface:

```typescript
interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  source?: string;
  date: string;
  imagePath: string;
  slug: string;
  content?: string;
  featured?: boolean;
}
```

## Features

- Responsive design that works on mobile and desktop
- Hover effects and smooth transitions
- Markdown-ready content structure
- SEO-friendly URLs with slugs
- Image optimization with Next.js Image component
- Clean, modern design matching the reference image

## Usage

The insights page is automatically available at `/insights` route and uses the components in this directory to render the article grid layout.
