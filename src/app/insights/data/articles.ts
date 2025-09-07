export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  source?: string;
  date: string;
  timestamp: number; // For sorting by date
  imagePath: string;
  slug: string;
  markdownPath: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Blockchain Technology in Investment Management",
    description: "Exploring how blockchain technology is revolutionizing traditional investment management practices and creating new opportunities for investors worldwide.",
    category: "Analysis",
    source: "Kriptaz Research",
    date: "December 15, 2024",
    timestamp: new Date('2024-12-15T10:00:00Z').getTime(),
    imagePath: "/images/article/test.png",
    slug: "future-blockchain-investment-management",
    markdownPath: "/markdown/future-blockchain-investment-management.md"
  },
  {
    id: "2",
    title: "Cryptocurrency Market Analysis: Q4 2024 Trends",
    description: "A comprehensive analysis of cryptocurrency market trends, performance metrics, and future outlook for the fourth quarter of 2024.",
    category: "Market Analysis",
    source: "Kriptaz Analytics",
    date: "December 10, 2024",
    timestamp: new Date('2024-12-10T10:00:00Z').getTime(),
    imagePath: "/images/article/test.png",
    slug: "cryptocurrency-market-analysis-q4-2024",
    markdownPath: "/markdown/cryptocurrency-market-analysis-q4-2024.md"
  },
  {
    id: "3",
    title: "DeFi Protocols: Risk Assessment and Investment Strategies",
    description: "An in-depth examination of DeFi protocols, their risk profiles, and strategic approaches for investors looking to participate in decentralized finance.",
    category: "Research",
    source: "Kriptaz DeFi Lab",
    date: "November 25, 2024",
    timestamp: new Date('2024-11-25T10:00:00Z').getTime(),
    imagePath: "/images/article/test.png",
    slug: "defi-protocols-risk-assessment-investment-strategies",
    markdownPath: "/markdown/defi-protocols-risk-assessment-investment-strategies.md"
  },
  {
    id: "4",
    title: "NFT Market Evolution: From Art to Utility",
    description: "Exploring the transformation of the NFT market from simple digital art to utility-driven applications across various industries.",
    category: "Industry Report",
    source: "Kriptaz NFT Research",
    date: "November 18, 2024",
    timestamp: new Date('2024-11-18T10:00:00Z').getTime(),
    imagePath: "/images/article/test.png",
    slug: "nft-market-evolution-art-to-utility",
    markdownPath: "/markdown/nft-market-evolution-art-to-utility.md"
  },
  {
    id: "5",
    title: "Central Bank Digital Currencies: Global Implementation Status",
    description: "A comprehensive overview of Central Bank Digital Currency (CBDC) projects worldwide, their implementation status, and implications for the financial system.",
    category: "Policy Analysis",
    source: "Kriptaz Policy Research",
    date: "October 30, 2024",
    timestamp: new Date('2024-10-30T10:00:00Z').getTime(),
    imagePath: "/images/article/test.png",
    slug: "central-bank-digital-currencies-global-implementation",
    markdownPath: "/markdown/central-bank-digital-currencies-global-implementation.md"
  },
  {
    id: "6",
    title: "Web3 Infrastructure: Building the Decentralized Internet",
    description: "An exploration of Web3 infrastructure components, their current state, and the technologies powering the decentralized internet of the future.",
    category: "Technology",
    source: "Kriptaz Tech Lab",
    date: "October 20, 2024",
    timestamp: new Date('2024-10-20T10:00:00Z').getTime(),
    imagePath: "/images/article/test.png",
    slug: "web3-infrastructure-decentralized-internet",
    markdownPath: "/markdown/web3-infrastructure-decentralized-internet.md"
  }
];

export const getFeaturedArticle = (): Article | undefined => {
  const sortedArticles = [...articles].sort((a, b) => b.timestamp - a.timestamp);
  return sortedArticles[0];
};

export const getArticles = (): Article[] => {
  const sortedArticles = [...articles].sort((a, b) => b.timestamp - a.timestamp);
  return sortedArticles.slice(1); // Skip the most recent (featured) article
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};
