# Munuve Tech Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from world-class digital studios (Framer, Locomotive, Clay, Stripe, Superlist) to achieve award-level sophistication. The design reflects executive minimalism meets high-tech elegance, with every element reinforcing Munuve Tech's technical mastery and business credibility.

## Logo-Derived Design System
The geometric, layered logo with violet-to-graphite gradient and premium dimensional quality serves as the visual anchor. All design decisions derive from its refined aesthetic: sophisticated depth, metallic precision, and subtle luxury.

## Color Palette
- **Primary Base**: Deep charcoal (#1a1a1a) and graphite (#2d2d2d) for backgrounds
- **Secondary Neutral**: Dark slate (#0f0f0f) for depth, soft white (#f5f5f5) for text
- **Signature Accent**: Electric blue (#3B82F6 to #60A5FA gradient) derived from Munuve Tech logo
- **Metallic Touches**: Silver/metallic highlights (#CBD5E1 to #E2E8F0) for premium texture, inspired by logo's metallic sheen
- **State Colors**: Success green (#10b981), warning amber (#f59e0b), error red (#ef4444)
- **Logo-Inspired**: Dark navy/black (#1E293B), gradient blues (#3B82F6, #60A5FA, #93C5FD), silver accents (#94A3B8)

## Typography System
**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight, tracking -0.02em for impact
- Body: 400-500 weight, tracking normal
- Display (Hero): 700-800 weight, 3.5rem to 6rem scale

**Secondary Font**: JetBrains Mono for technical elements, code snippets, metrics
- Weights: 400-500
- Use sparingly for KPIs, data points, technical labels

**Hierarchy**:
- H1: text-6xl md:text-7xl lg:text-8xl, font-bold, leading-tight
- H2: text-4xl md:text-5xl, font-semibold
- H3: text-2xl md:text-3xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Small/Caption: text-sm, tracking-wide, uppercase for labels

## Layout & Spacing System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24 (e.g., p-8, gap-12, mt-20)

**Grid System**:
- Container: max-w-7xl with px-6 md:px-8 lg:px-12
- Section Padding: py-20 md:py-24 lg:py-32 for vertical rhythm
- Grid Columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for features/cards
- Generous whitespace between sections (min 20 units vertical spacing)

**Viewport Strategy**:
- Hero: 85vh to 100vh height with content centered
- Content Sections: Natural height based on content, no forced viewport heights
- Multi-column sparingly: Features (3-col), testimonials (2-col), metrics (4-col)

## Component Library

### Navigation
- Fixed transparent header with blur backdrop (backdrop-blur-md bg-charcoal/80)
- Logo left, nav center, CTA button right
- Smooth scroll behavior with scroll-triggered opacity change
- Mobile: hamburger menu with full-screen overlay transition

### Hero Section
- Large background image: Abstract technology/geometric patterns with violet gradient overlay
- Centered content with bold headline, subheadline, dual CTAs
- Scroll indicator (animated chevron) at bottom
- Floating card elements with subtle 3D transform on scroll

### Feature Cards
- Dark cards (bg-graphite) with border-l-4 border-violet accent
- Icon (violet gradient), title (H3), description, optional link
- Hover: translate-y-[-4px] with shadow-2xl elevation
- Grid layout with gap-8

### Case Study Cards
- Large featured image with gradient overlay on hover
- Client logo, project title, tags, results metrics
- Click expands to modal with full case study detail
- Filter buttons above grid (All, Web Systems, Automation, Analytics)

### Metrics/Stats
- Mono font for numbers, large scale (text-5xl)
- Violet accent color, animated counter on scroll into view
- Label below in uppercase small text
- 4-column grid on desktop, 2-column on tablet, stacked on mobile

### Blog Cards
- Featured image, category tag (violet badge), title, excerpt, read time
- Masonry or standard grid layout
- Hover: image scale(1.05) with smooth transition
- Tag filtering system with active state styling

### Forms
- Dark input fields (bg-slate with border-graphite)
- Focus: border-violet with ring-violet glow
- Labels above inputs, help text below in muted color
- Submit button: violet gradient with hover scale and brightness
- Validation states with inline error messages

### Buttons
Primary (CTA): bg-gradient-to-r from-violet-600 to-violet-500, hover brightness-110, px-8 py-4
Secondary (Outline): border-2 border-violet, text-violet, hover bg-violet/10
Tertiary (Text): text-violet, underline-offset-4, hover underline
Blur on images: backdrop-blur-sm bg-white/10 border border-white/20

### Footer
- Dark background (bg-slate-950)
- 4-column layout: Brand/mission, Quick links, Services, Newsletter signup
- Social icons (violet on hover)
- Bottom bar: Copyright, Privacy/Terms links
- Subtle top border (border-t border-graphite)

## Motion & Interactions
**Scroll Animations**: Fade-up on scroll (opacity 0→1, translateY 20→0) with stagger delay
**Parallax**: Subtle background movement at 0.5x scroll speed for depth
**Hover States**: Natural easing (ease-out 300ms), subtle elevation (4-8px)
**Page Transitions**: Fade with slight slide (150ms duration)
**Carousels**: Smooth auto-advance (5s), manual controls, progress indicators
**60fps Target**: Use transform and opacity only, avoid layout-triggering properties

**Avoid**: Excessive animations, bouncing effects, spinning loaders, distracting micro-interactions

## Images
**Hero Section**: Large abstract technology visual - geometric patterns, 3D renders, or data visualization with violet gradient overlay (70% opacity)

**Service/Feature Sections**: Icon-based (no images) with violet gradient SVG icons

**Case Studies**: Real project screenshots, mockups, or results dashboards - minimum 1200x800px

**About/Team**: Professional team photo or office environment shot

**Blog**: Featured images for each article - 16:9 ratio, technology/business themes

**Placement**: Hero (full-width background), case studies (card thumbnails), blog (article headers), about (team section)

## Accessibility & Performance
- WCAG 2.1 AA minimum contrast ratios (4.5:1 for body text)
- Focus indicators on all interactive elements (ring-2 ring-violet)
- Semantic HTML throughout (nav, main, article, section)
- Alt text for all images, aria-labels for icons
- Keyboard navigation support
- Lazy loading for images below fold
- Optimized images (WebP, next-gen formats)
- Code splitting per page
- Preload critical assets

## Design Principles
1. **Precision over Decoration**: Every element serves a clear business purpose
2. **Performance as Feature**: Speed and smoothness demonstrate technical mastery
3. **Hierarchy through Contrast**: Bold scale differences, not just color
4. **Breathing Room**: Generous spacing signals confidence and clarity
5. **Subtle Luxury**: Premium feel through restraint, not excess
6. **Results-Focused**: Metrics, outcomes, and value drive content presentation

This design system creates a sophisticated, high-performance digital presence that positions Munuve Tech as an elite technical partner while maintaining exceptional usability and conversion potential.