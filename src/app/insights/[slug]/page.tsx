import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticles } from '@/app/insights/data/articles';
import { getMarkdownContent } from '@/app/insights/utils/markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticlePage.module.css';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getArticles();
  const featuredArticle = getArticles().find(article => article.featured);
  
  const allArticles = [...articles];
  if (featuredArticle) {
    allArticles.push(featuredArticle);
  }

  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  const markdownContent = await getMarkdownContent(article.markdownPath);

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <Link href="/insights" className={styles.backLink}>
          ← Back to Insights
        </Link>
      </div>

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.imageContainer}>
            <Image
              src={article.imagePath}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          
          <div className={styles.metadata}>
            <span className={styles.category}>{article.category}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.source}>{article.source}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.date}>{article.date}</span>
          </div>
          
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.description}>{article.description}</p>
        </header>

        <div className={styles.content}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            className={styles.markdown}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
