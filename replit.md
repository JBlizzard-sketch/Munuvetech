# Munuve Tech Website

## Overview

Munuve Tech is a production-ready digital agency website built to showcase web systems, automation, analytics capabilities, and drive business conversions. The platform serves as both a marketing tool and a demonstration of technical excellence, featuring cinematic interactions, responsive design, and world-class user experience.

The application is a full-stack TypeScript solution with a React frontend and Express backend, designed for high performance (targeting 90+ Lighthouse scores) and seamless scalability.

## Recent Changes (October 31, 2025)

**Critical Layout Fix - Content Display Restored:**
- Fixed critical layout issue where Case Studies and Blog content was pushed completely off-screen
- Root cause: Excessive section padding (`py-24 md:py-32`) combined with layout elements created massive whitespace
- Solution: Reduced section padding to `py-12` and removed sticky positioning from filter tabs
- Removed AnimatedSection wrapper from hero sections to prevent layout conflicts
- Both Case Studies (7 items) and Blog (8 posts) now display correctly on page load
- All cards render with proper images, titles, categories, and interactive elements
- Filter buttons functional on both pages (category filters for Case Studies, tag filters for Blog)

**Previous Update (October 30, 2025) - Website Enhancements:**
- Fixed all React DOM nesting warnings by refactoring Navigation and Footer components to properly use wouter Link
- Enlarged logo from h-8 md:h-10 to h-12 md:h-14 and added "Munuve Tech" gradient text for better brand visibility
- Created comprehensive Team page featuring 6 team member profiles including CEO Joe Makali Munuve
- Created Careers page with 6 job openings and detailed application process information
- Added cover images to main blog posts (automation-roi-guide, web-performance-optimization, data-driven-decision-making)
- Created _redirects file for Netlify deployment to fix SPA routing and prevent 404 errors
- Updated all navigation and footer links to include Team and Careers pages
- Verified clean browser console with no warnings or errors
- All components now production-ready with proper accessibility and SEO
- Fixed founder name standardization to Joe Makali Munuve (single n) across all files

**Previous Complete Brand Redesign:**
- Updated logo to high-resolution Munuve Tech logo with blue and silver metallic design
- Redesigned entire color system from violet to electric blue (#3B82F6 to #60A5FA) with silver metallic accents
- Improved hero carousel by reducing overlay opacity from 95% to 40% for better image visibility
- Expanded content library: 10+ blog posts and 7+ case studies
- Added 3 new detailed case studies: STERA Pharmacy (e-commerce), Motkitt Ventures (experiential marketing), and Kechita Credit (microfinance)
- Created comprehensive Testimonials page with 6 client success stories and filterable categories
- Resolved all TypeScript type errors in storage layer

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing:**
- React 18 with TypeScript for type-safe component development
- Wouter for lightweight, fast client-side routing
- Vite as the build tool for blazing-fast hot module replacement (HMR)

**State Management:**
- TanStack Query v5 for server state management and data fetching
- Custom query client with retry logic and error handling
- In-view animations managed via Framer Motion with viewport detection

**UI Framework:**
- Tailwind CSS for utility-first styling with custom design system
- shadcn/ui component library (New York variant) for consistent, accessible UI primitives
- Custom CSS variables for theming (light/dark mode support built-in)
- Framer Motion for 60fps animations and scroll-triggered effects

**Design System:**
- Color palette: Deep charcoal/graphite backgrounds with electric blue (#3B82F6 to #60A5FA) gradient and silver metallic accents (#CBD5E1 to #E2E8F0)
- Logo-inspired colors: Dark navy/black (#1E293B), gradient blues, and silver tones matching the Munuve Tech brand identity
- Typography: Inter (primary), JetBrains Mono (code/metrics)
- Spacing system based on Tailwind's 4px grid
- Component-level animation hooks (AnimatedSection, MetricCounter) for reusable scroll effects
- Improved hero carousel with minimal overlay (40% opacity) to showcase imagery

**Form Handling:**
- React Hook Form for performant form state management
- Zod validation schemas shared between client and server
- @hookform/resolvers for seamless Zod integration

**Content Rendering:**
- React Markdown with remark-gfm for rich text blog posts and case studies
- Dynamic image optimization via Unsplash CDN with query parameters

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for API routes
- Custom middleware for request logging and error handling
- Session management configured (connect-pg-simple) for future authentication

**Data Layer:**
- Currently using in-memory storage (MemStorage class) for development/demo
- Drizzle ORM schema definitions ready for PostgreSQL migration
- Type-safe data models with Zod validation on all inputs

**API Design:**
- RESTful endpoints for blog posts, case studies, contact submissions, newsletter subscriptions
- Zod schema validation on all POST requests
- Error responses with appropriate HTTP status codes (404, 500)
- Query parameter support for filtering (e.g., case studies by category)

**Data Models:**
- BlogPost: slug-based routing, tags, categories, markdown content, author metadata (10+ posts)
- CaseStudy: client info, industry, challenge/solution narrative, metrics array, featured flag (7+ studies including STERA Pharmacy, Motkitt Ventures, Kechita Credit)
- ContactSubmission: form data with service selection
- NewsletterSubscription: email collection with timestamps

**Content Pages:**
- Home: Hero carousel with minimal overlay, services showcase, featured case studies
- Services: Comprehensive service offerings with detailed descriptions
- Case Studies: Portfolio of client projects with detailed breakdowns
- Testimonials: Client success stories with filterable categories (6 testimonials)
- Blog: Tech insights and industry articles (10+ posts)
- About: Company information and team details
- Contact: Multi-service contact form with validation

### Build & Deployment

**Development:**
- `npm run dev` starts concurrent Vite dev server and Express backend
- Hot reload for both frontend and backend changes
- tsx for TypeScript execution in Node.js

**Production:**
- `npm run build` compiles Vite frontend to `dist/public` and bundles Express backend with esbuild
- `npm start` runs production server serving static frontend + API routes
- Environment variables via `.env` (DATABASE_URL for future PostgreSQL connection)

**Performance Optimizations:**
- Route-based code splitting for blog and case study detail pages (lazy loading)
- Image optimization via CDN parameters (width, quality, format, crop)
- Responsive image loading with viewport-specific sizes
- Memoized components and animation controls to prevent re-renders

### External Dependencies

**UI Component Libraries:**
- @radix-ui/* (18+ packages): Accessible, unstyled primitives for dialogs, dropdowns, tooltips, etc.
- embla-carousel-react: Touch-enabled carousel for hero section
- lucide-react: Icon library
- class-variance-authority: Type-safe component variant management
- tailwind-merge + clsx: Utility class merging

**Animation & Interaction:**
- framer-motion: Declarative animations, scroll-triggered effects, gesture handling
- react-day-picker: Calendar UI (currently unused but available)

**Forms & Validation:**
- react-hook-form: Form state management
- zod: Runtime type validation (shared schemas)
- @hookform/resolvers: Zod resolver for react-hook-form

**Data Fetching:**
- @tanstack/react-query: Server state management, caching, background refetching

**Content:**
- react-markdown: Markdown rendering for blog posts
- remark-gfm: GitHub-flavored markdown support (tables, strikethrough, etc.)

**Backend:**
- @neondatabase/serverless: PostgreSQL driver (ready for Neon DB integration)
- drizzle-orm: Type-safe ORM
- drizzle-zod: Automatic Zod schema generation from Drizzle tables
- connect-pg-simple: PostgreSQL session store for Express (configured but not active)

**Developer Tools:**
- @replit/* plugins: Runtime error overlay, cartographer, dev banner (dev mode only)
- esbuild: Fast backend bundler for production builds
- tsx: TypeScript execution for development server

**Third-Party Services:**
- Unsplash/Pexels: Image CDN for hero carousel, case studies, blog posts
- Google Fonts: Inter and JetBrains Mono typefaces

**Future Integrations (Configured but Not Active):**
- PostgreSQL database via DATABASE_URL environment variable
- Session-based authentication (session secret already configured)
- Newsletter email service (submission endpoint exists, email sending not implemented)