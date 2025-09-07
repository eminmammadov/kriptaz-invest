import { getFeaturedArticle, getArticles, articles } from '@/app/insights/data/articles';
import FeaturedArticle from '../FeaturedArticle';
import ArticleCard from '../ArticleCard';
import styles from './InsightsPage.module.css';

export default function InsightsPage() {
  const featuredArticle = getFeaturedArticle();
  const articlesList = getArticles();

  // Count articles by category
  const categoryCounts = {
    'All Insights': articles.length,
    'Blogs': articles.filter(a => a.category === 'Analysis' || a.category === 'Market Analysis').length,
    'Articles': articles.filter(a => a.category === 'Research' || a.category === 'Industry Report').length,
    'Research': articles.filter(a => a.category === 'Research').length,
    'Podcasts': articles.filter(a => a.category === 'Technology' || a.category === 'Policy Analysis').length,
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explore Insights</h1>
      </div>

      <nav className={styles.categoryNavigation}>
        <a href="#" className={`${styles.categoryLink} ${styles.active}`}>
          All Insights <span className={styles.categoryCount}>{categoryCounts['All Insights']}</span>
        </a>
        <a href="#" className={styles.categoryLink}>
          Blogs <span className={styles.categoryCount}>{categoryCounts['Blogs']}</span>
        </a>
        <a href="#" className={styles.categoryLink}>
          Articles <span className={styles.categoryCount}>{categoryCounts['Articles']}</span>
        </a>
        <a href="#" className={styles.categoryLink}>
          Research <span className={styles.categoryCount}>{categoryCounts['Research']}</span>
        </a>
        <a href="#" className={styles.categoryLink}>
          Podcasts <span className={styles.categoryCount}>{categoryCounts['Podcasts']}</span>
        </a>
      </nav>

      {featuredArticle && (
        <div className={styles.featuredSection}>
          <FeaturedArticle article={featuredArticle} />
        </div>
      )}

      <div className={styles.articlesGrid}>
        {articlesList.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className={styles.loadMoreButton}>
        <button className={styles.loadMoreBtn}>
          Load More Articles
        </button>
      </div>
    </div>
  );
}
