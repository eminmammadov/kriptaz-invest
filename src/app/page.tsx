
import { Hero } from '@/components/sections/Hero';
// import { ProjectSlider, ProjectLogo } from '@/components/sections/ProjectSlider';
import { Statistics } from '@/components/sections/Statistics';
import Rates from '@/components/sections/Rates';
import Insights from '@/components/sections/Insights';
import { Subscribe } from '@/components/sections/Subscribe';
import { getAllArticles } from '@/lib/articles/articles';

export default async function Home() {
  // Fetch articles data
  const articles = await getAllArticles();

  return (
    <>
      <Hero />
      <Statistics />
      <Rates />
      <Insights articles={articles} />
      <Subscribe />
    </>
  );
}
