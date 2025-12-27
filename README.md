# Portfolio Website

A modern, accessible, and feature-rich portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **A11y Optimized** - Full accessibility support with ARIA labels, keyboard navigation, and screen reader compatibility
- ✅ **Animations & Effects** - Smooth animations powered by Framer Motion
- ✅ **Automated SEO** - Built-in SEO optimization with meta tags, sitemap, and structured data
- ✅ **Built-in Analytics** - Google Analytics integration ready
- ✅ **Components** - Modular, reusable React components
- ✅ **Project Styles** - Beautiful project showcase with filtering
- ✅ **Sticky Scrolling** - Smooth scroll behavior with sticky navigation
- ✅ **Visual Breakpoints** - Development tool to visualize responsive breakpoints

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Analytics

To enable Google Analytics:

1. Create a `.env.local` file in the root directory
2. Add your Google Analytics ID:

```
NEXT_PUBLIC_GA_ID=your-ga-measurement-id
```

### Personalization

Update the following files with your information:

- `app/layout.tsx` - Update metadata (title, description, social links)
- `components/Hero.tsx` - Update name and tagline
- `components/About.tsx` - Update about section
- `components/Skills.tsx` - Update skills and technologies
- `components/Experience.tsx` - Update work experience
- `components/Projects.tsx` - Update projects
- `components/Contact.tsx` - Update contact information
- `components/Footer.tsx` - Update social links and copyright

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form
│   ├── Analytics.tsx       # Analytics integration
│   └── BreakpointIndicator.tsx # Dev tool
└── public/                 # Static assets
```

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Screen reader friendly
- Reduced motion support

## SEO Features

- Meta tags (Open Graph, Twitter Cards)
- Structured data ready
- Sitemap generation
- Robots.txt
- Semantic HTML structure

## Development Tools

### Visual Breakpoints

Press `B` key during development to toggle the breakpoint indicator showing the current responsive breakpoint.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables if needed
4. Deploy!

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your color palette
  }
}
```

### Animations

Animations are configured in `tailwind.config.ts` and components use Framer Motion for advanced animations.

## License

MIT

## Contributing

Feel free to fork this project and customize it for your own portfolio!

