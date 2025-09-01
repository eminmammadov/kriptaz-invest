# Kriptaz Invest

Professional crypto investment fund platform established by mutual investors. Built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with optimized breakpoints
- **Performance Optimized**: Image optimization, font preloading, bundle splitting
- **SEO Ready**: Comprehensive metadata, sitemap, robots.txt
- **State Management**: Zustand for global state management
- **Error Handling**: Error boundaries and comprehensive error tracking
- **Testing**: Jest and Testing Library setup
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode
- **Accessibility**: WCAG compliant components and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4, CSS Modules
- **State Management**: Zustand 5
- **Testing**: Jest, Testing Library
- **Code Quality**: ESLint, Prettier
- **Fonts**: Custom Gellix font, Google Fonts (Playfair)

## 📦 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kriptaz/kriptaz-invest.git
cd kriptaz-invest
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local` with your values.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # Dynamic sitemap
├── components/            # React components
│   ├── common/           # Reusable components
│   ├── layout/           # Layout components
│   ├── pages/            # Page-specific components
│   └── ui/               # UI components
├── shared/               # Shared utilities
│   ├── store/           # Zustand stores
│   └── types/           # TypeScript types
public/                   # Static assets
├── fonts/               # Custom fonts
├── images/              # Images and icons
└── videos/              # Video assets
```

## 🎨 Design System

### Colors
- Primary Black: `#111111`
- Light Gray: `#E7E7E7`
- Accent Green: `#5CE05C`
- Gold: `#AA965F`

### Typography
- **Primary Font**: Playfair (serif) - For body text and headings
- **Header Font**: Gellix (sans-serif) - For navigation and buttons

### Breakpoints
- Mobile Small: `375px`
- Mobile: `640px`
- Tablet: `768px`
- Desktop: `1024px`
- Large Desktop: `1280px`

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to [Vercel](https://vercel.com)
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 📝 Environment Variables

See `.env.example` for all available environment variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics ID
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console verification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Kriptaz Blockchain.

## 📞 Support

For support, email support@kriptaz.com or create an issue in this repository.

---

Built with ❤️ by [Kriptaz Blockchain](https://kriptaz.com)
