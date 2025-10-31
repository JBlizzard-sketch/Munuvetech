# Munuve Tech Website - Setup Instructions

## Quick Start

This project is a world-class digital agency website built with modern web technologies. Follow these instructions to set up and run the application locally or deploy it to production.

## Prerequisites

- **Node.js**: v20 or higher
- **npm**: v10 or higher (comes with Node.js)
- **Git**: For version control

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd munuve-tech-website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all necessary packages including:
- React & TypeScript
- Express.js
- Vite
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- React Query
- And all other dependencies

### 3. Environment Setup

The application uses in-memory storage by default, so no database setup is required for development. If you plan to use a production database later, create a `.env` file:

```bash
# Optional: Add environment variables if needed
# DATABASE_URL=your_database_url
# SESSION_SECRET=your_session_secret (already configured)
```

## Running the Application

### Development Mode

Start the development server (runs both frontend and backend):

```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5000
- **Backend API**: http://localhost:5000/api

The development server includes:
- Hot module replacement (HMR)
- TypeScript compilation
- API route handling
- Automatic browser refresh

### Production Build

Build the application for production:

```bash
npm run build
```

This creates optimized production builds:
- Frontend: `dist/public/`
- Backend: `dist/`

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
munuve-tech-website/
├── client/                    # Frontend application
│   ├── public/               # Static assets (logo, robots.txt, sitemap.xml)
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AnimatedSection.tsx
│   │   │   └── MetricCounter.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   ├── CaseStudyDetail.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   └── Contact.tsx
│   │   ├── lib/             # Utilities and configuration
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                   # Backend application
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Data storage layer
│   └── index.ts             # Server entry point
├── shared/                   # Shared code between frontend and backend
│   └── schema.ts            # Data schemas and types
├── design_guidelines.md      # Design system documentation
├── PROGRESS_LOG.md          # Development progress tracking
├── SETUP_INSTRUCTIONS.md    # This file
└── FINAL_REPORT.md          # Project summary and metrics

```

## Key Features

### Pages
- **Home** - Hero, services overview, metrics, featured projects
- **Services** - Detailed service offerings with outcomes
- **Case Studies** - Filterable portfolio of client work
- **About** - Company mission, values, timeline
- **Blog** - Technical articles with Markdown support
- **Contact** - Form with validation and submission

### Technical Highlights
- **Responsive Design** - Mobile-first, works on all devices
- **Animations** - Smooth Framer Motion scroll animations
- **SEO Optimized** - Meta tags, sitemap, robots.txt
- **Type Safe** - Full TypeScript coverage
- **Performance** - Code splitting, lazy loading, optimized assets
- **Accessible** - WCAG 2.1+ compliance

## API Endpoints

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get single blog post

### Case Studies
- `GET /api/case-studies` - Get all case studies (optional `?category=` filter)
- `GET /api/case-studies/:slug` - Get single case study

### Contact
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
4. Deploy!

Vercel will automatically:
- Build your application
- Set up SSL/HTTPS
- Provide a production URL
- Enable automatic deployments on git push

### Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist/public`
4. Deploy!

### Custom Server

Build and run on your own infrastructure:

```bash
npm run build
NODE_ENV=production npm start
```

## Customization

### Branding
- Logo: Replace `client/public/logo.png`
- Colors: Update CSS variables in `client/src/index.css`
- Fonts: Modify imports in `client/index.html`

### Content
- Blog Posts: Add to seed data in `server/storage.ts`
- Case Studies: Add to seed data in `server/storage.ts`
- Services: Modify arrays in `client/src/pages/Services.tsx`

### Design System
- Review `design_guidelines.md` for design principles
- Color palette, typography, spacing all documented
- Component usage guidelines included

## Testing

Run tests (when implemented):

```bash
npm test
```

Check code quality:

```bash
npm run lint
```

## Performance Optimization

The application is built with performance in mind:
- **Images**: Lazy loaded, optimized formats
- **Code**: Split by route, tree-shaken
- **Fonts**: Preconnected, optimized loading
- **CSS**: Purged unused styles with Tailwind

Target Lighthouse scores:
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Troubleshooting

### Port Already in Use
If port 5000 is in use, the app will automatically try another port.

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Type Errors
Ensure TypeScript is up to date:
```bash
npm install -D typescript@latest
```

## Support

For issues or questions:
1. Check `PROGRESS_LOG.md` for implementation details
2. Review `design_guidelines.md` for design decisions
3. Examine `FINAL_REPORT.md` for architecture overview

## Next Steps

1. **Add Database**: Replace MemStorage with PostgreSQL/MongoDB
2. **Add CMS**: Integrate with Sanity/Contentful for content management
3. **Add Analytics**: Implement Google Analytics or Plausible
4. **Add Search**: Implement full-text search for blog/case studies
5. **Add Authentication**: If needed for admin areas

---

**Built with ❤️ by Munuve Tech**

For production deployment support or customization, contact the development team.
