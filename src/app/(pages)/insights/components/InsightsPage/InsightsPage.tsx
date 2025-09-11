import { getAllArticles, getCategoryCounts, getAvailableCategories } from '@/lib/articles/articles';
import FeaturedArticle from '../FeaturedArticle';
import { InsightsCard } from '@/components/ui/InsightsCard';
import PageHeader from '@/components/ui/PageHeader';
import CategoryNavigation from '../CategoryNavigation/CategoryNavigation';
import styles from './InsightsPage.module.css';

export default async function InsightsPage() {
  const articles = await getAllArticles();
  const featuredArticle = articles[0];
  const articlesList = articles.slice(1);
  const categoryCounts = await getCategoryCounts();
  const availableCategories = await getAvailableCategories();

  return (
    <div className={styles.container}>
      <PageHeader title="Explore Insights" />

      {featuredArticle && (
        <div className={styles.featuredSection}>
          <FeaturedArticle article={featuredArticle} />
        </div>
      )}

      <div className={styles.contentSection}>
        <CategoryNavigation
          categories={availableCategories}
          categoryCounts={categoryCounts}
          activeCategory="All Insights"
        />

        <div className={styles.articlesGrid}>
          {articlesList.map((article) => (
            <InsightsCard 
              key={article.id} 
              article={article}
              variant="insights-page"
              showDescription={false}
            />
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
