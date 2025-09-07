import { getAllArticles, getCategoryCounts, getAvailableCategories } from '@/lib/articles/articles';
import FeaturedArticle from '../FeaturedArticle';
import ArticleCard from '../ArticleCard';
import styles from './InsightsPage.module.css';

export default async function InsightsPage() {
  const articles = await getAllArticles();
  const featuredArticle = articles[0];
  const articlesList = articles.slice(1);
  const categoryCounts = await getCategoryCounts();
  const availableCategories = await getAvailableCategories();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explore Insights</h1>
      </div>

      {featuredArticle && (
        <div className={styles.featuredSection}>
          <FeaturedArticle article={featuredArticle} />
        </div>
      )}

      <div className={styles.contentSection}>
        <nav className={styles.categoryNavigation}>
          {availableCategories.map((category, index) => (
            <a 
              key={category} 
              href="#" 
              className={`${styles.categoryLink} ${index === 0 ? styles.active : ''}`}
            >
              {category} <span className={styles.categoryCount}>{categoryCounts[category] || 0}</span>
            </a>
          ))}
        </nav>

        <div className={styles.articlesGrid}>
          {articlesList.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className={styles.loadMoreButton}>
        <button className={styles.loadMoreBtn}>
          Load More Articles
        </button>
      </div>
    </div>
  );
}
