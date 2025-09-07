import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/articles/articles';
import styles from './FeaturedArticle.module.css';

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className={styles.featuredArticle}>
      <div className={styles.content}>
        <div className={styles.metadata}>
          {article.category} • {article.date}
        </div>
        <h2 className={styles.title}>
          {article.title}
        </h2>
        <p className={styles.description}>
          {article.description}
        </p>
        <Link href={`/insights/${article.slug}`} className={styles.readMoreButton}>
          Read More
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={article.imagePath}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
