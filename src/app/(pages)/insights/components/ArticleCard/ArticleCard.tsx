import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/articles/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/insights/${article.slug}`} className={styles.articleCard}>
      <div className={styles.imageContainer}>
        <Image
          src={article.imagePath}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.metadata}>
          {article.category} • {article.date}
        </div>
        <h3 className={styles.title}>
          {article.title}
        </h3>
        <div className={styles.readMore}>
          Read More →
        </div>
      </div>
    </Link>
  );
}
