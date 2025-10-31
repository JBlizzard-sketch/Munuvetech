# Logo Upgrade & Management Guide

## Current Logo Status

The Munuve Tech logo is currently located at:
- **Primary Logo**: `client/public/logo.png` (3D geometric M design with violet-graphite gradient)
- **Used In**: Navigation header, Footer, Favicon

## Logo Requirements

### Recommended Logo Formats

To ensure optimal display across all devices and contexts, prepare the following logo variants:

#### 1. **Primary Horizontal Logo** (Required)
- **Format**: PNG with transparent background
- **Dimensions**: 2400×800px minimum (3:1 ratio)
- **File**: `client/public/logo.png`
- **Usage**: Main navigation, email signatures, presentations

#### 2. **Square/Icon Logo** (Required)
- **Format**: PNG with transparent background
- **Dimensions**: 1024×1024px minimum (1:1 ratio)
- **File**: `client/public/logo-square.png`
- **Usage**: Social media profiles, mobile app icons, favicons

#### 3. **SVG Vector Logo** (Highly Recommended)
- **Format**: SVG
- **File**: `client/public/logo.svg`
- **Usage**: Scalable display for all screen sizes, print materials
- **Benefit**: Crisp rendering at any size, smaller file size

#### 4. **Favicon** (Required)
- **Format**: ICO or PNG
- **Dimensions**: 32×32px and 16×16px
- **File**: `client/public/favicon.png` or `client/public/favicon.ico`
- **Usage**: Browser tabs, bookmarks

#### 5. **Stacked/Vertical Logo** (Optional)
- **Format**: PNG with transparent background
- **Dimensions**: Variable (centered alignment)
- **File**: `client/public/logo-stacked.png`
- **Usage**: Mobile views, narrow spaces, email footers

## How to Upload/Replace Logo

### Step 1: Prepare Your Logo Files

1. Export your logo in the formats listed above
2. Ensure transparent backgrounds (no white boxes)
3. Name files according to the convention above
4. Verify dimensions meet minimum requirements

### Step 2: Upload to Public Directory

Replace the logo files in the `client/public/` directory:

```bash
# Navigate to the public assets folder
cd client/public/

# Upload your new logo files
# - logo.png (primary horizontal)
# - logo-square.png (square variant)
# - logo.svg (vector version)
# - favicon.png (browser icon)
```

### Step 3: Update References (if needed)

The logo is referenced in the following files. If you're changing the filename or format, update these:

#### **Navigation Component**
File: `client/src/components/Navigation.tsx`

```typescript
// Current logo reference (line ~40)
<img 
  src="/logo.png" 
  alt="Munuve Tech" 
  className="h-8 md:h-10" 
/>

// To use SVG instead:
<img 
  src="/logo.svg" 
  alt="Munuve Tech" 
  className="h-8 md:h-10" 
/>
```

#### **Footer Component**
File: `client/src/components/Footer.tsx`

```typescript
// Current logo reference (line ~20)
<img 
  src="/logo.png" 
  alt="Munuve Tech" 
  className="h-10" 
/>
```

#### **HTML Head (Favicon)**
File: `client/index.html`

```html
<!-- Current favicon reference (line ~10) -->
<link rel="icon" type="image/png" href="/favicon.png" />

<!-- For ICO format: -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

### Step 4: Clear Cache & Test

After uploading new logo files:

1. **Clear browser cache**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Restart development server**: `npm run dev`
3. **Test on multiple devices**: Desktop, tablet, mobile
4. **Verify all locations**: Header, Footer, browser tab (favicon)

## Logo Display Guidelines

### Sizing Standards

- **Desktop Navigation**: 40-48px height
- **Mobile Navigation**: 32-36px height
- **Footer**: 40-56px height
- **Favicon**: 32×32px or 16×16px

### Spacing & Clearance

- Maintain minimum clearance of 1x logo height around the logo
- Never compress or stretch the logo (maintain aspect ratio)
- Use `object-fit: contain` in CSS to prevent distortion

### Color Variants

If your logo has multiple color variants:

- **Primary**: Violet-graphite gradient (current)
- **Monochrome Dark**: For light backgrounds
- **Monochrome Light**: For dark backgrounds (may need separate file)

Store variants as:
- `logo.png` (primary, full color)
- `logo-dark.png` (for light backgrounds)
- `logo-light.png` (for dark backgrounds)

## Responsive Logo Implementation

For optimal mobile experience, consider using different logo variants:

```typescript
// Example: Use stacked logo on mobile, horizontal on desktop
<img 
  src="/logo-stacked.png" 
  alt="Munuve Tech" 
  className="h-12 md:hidden" 
/>
<img 
  src="/logo.png" 
  alt="Munuve Tech" 
  className="hidden md:block h-10" 
/>
```

## Social Media Logo Specs

When using the logo on social media platforms:

| Platform | Recommended Size | Format | Notes |
|----------|-----------------|--------|-------|
| LinkedIn | 400×400px | PNG | Square logo preferred |
| Twitter/X | 400×400px | PNG | Square logo preferred |
| Facebook | 180×180px | PNG | Square logo preferred |
| Instagram | 320×320px | PNG | Square logo preferred |
| Open Graph | 1200×630px | PNG | Horizontal logo with background |

## Troubleshooting

### Logo Not Appearing
1. Check file path is correct (`/logo.png` not `./logo.png`)
2. Verify file is in `client/public/` directory
3. Clear browser cache
4. Restart development server

### Logo Blurry on High-DPI Screens
1. Upload higher resolution version (2x or 3x size)
2. Use SVG format for crisp rendering at any size
3. Use `srcset` for responsive images:

```html
<img 
  src="/logo.png" 
  srcset="/logo@2x.png 2x, /logo@3x.png 3x"
  alt="Munuve Tech"
/>
```

### Logo Too Large/Small
1. Adjust height classes in component files
2. Use responsive classes: `h-8 md:h-10 lg:h-12`
3. Never set width (let it scale proportionally)

## Advanced: Animated Logo (Optional)

For a premium experience, consider an animated SVG logo:

1. Export logo as SVG with layers
2. Add CSS animations or use GSAP for logo reveal
3. Trigger on page load or scroll into view
4. Keep animation subtle (1-2 seconds max)

---

## Quick Reference

**Upload Location**: `client/public/`
**Primary Logo**: `logo.png` or `logo.svg`
**Component Files**: `Navigation.tsx`, `Footer.tsx`
**Favicon**: `index.html` (line ~10)

---

**Last Updated**: October 30, 2025
**Maintainer**: Munuve Tech Development Team
