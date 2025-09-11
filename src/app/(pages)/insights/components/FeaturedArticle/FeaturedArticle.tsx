import Image from 'next/image';
import { Article } from '@/lib/articles/articles';
import { Button } from '@/components/ui/Button';
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
        <Button
          href={`/insights/${article.slug}`}
          variant="secondary"
          size="medium"
          className={styles.readMoreButton}
        >
          Read More
        </Button>
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
