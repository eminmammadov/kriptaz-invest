import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/lib/articles/articles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticlePage.module.css';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

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
          <div className={styles.markdown}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {article.content || ''}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}
