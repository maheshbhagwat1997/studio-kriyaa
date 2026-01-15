# Studio Kriyaa - AI Copilot Instructions

## Project Overview
Studio Kriyaa is a React + Vite + React Router portfolio site for an interior design studio. It's a **multi-page router-based application** with 9 routed pages showcasing design services and portfolio. The site includes a contact form with EmailJS integration and custom scroll-triggered animations.

## Current Architecture

### Key Components
- **App.jsx** - Router entry point with ScrollToTop behavior management, defines all 9 routes
- **HomePage.jsx** - Home page with hero, process cards, content sections, and portfolio showcase
- **src/pages/** - Individual page components (9 total):
  - `AboutPage.jsx` - About/philosophy with feature cards
  - `ServicesPage.jsx` - 6-item services grid + design process steps
  - `ContactPage.jsx` - Contact form (EmailJS) + info blocks + social links
  - `ProjectStoryPage.jsx` - Interactive accordion showcase with collapsible sections and image galleries
  - `FurniturePage.jsx` - Furniture selection service showcase
  - `DecorPage.jsx` - Decor service showcase
  - `LightingPage.jsx` - Lighting service showcase
  - `TextilesPage.jsx` - Textiles service showcase
- **src/components/** - Reusable UI components:
  - `Footer.jsx` - Footer component (styling reference only - footer is inline in each page)
  - `AnimatedCat.jsx` - Interactive Easter egg: clickable cat mascot with wave animation (appears on all pages)
  - `CatCanvas.jsx` - Additional cat component variant
- **src/utils/** - Animation utilities:
  - `entrance.js` - Scroll-triggered entrance animations (`.animate-on-scroll` class)
  - `animate.js` - Easing functions, smooth scroll polyfill, requestAnimationFrame wrapper

### Data Flow
- **No state management**: All components are presentational
- **Contact form state**: Managed locally in `ContactPage.jsx` with `useState`
- **EmailJS integration**: Direct API calls (Service ID: `service_qlm98yj`, Template ID: `template_kf6vxnk`)
- **Routing**: React Router v7.12.0 handles navigation; `ScrollToTop.jsx` scrolls to top on route change and reinitializes entrance animations
- **Footer**: Unified footer structure across all pages with consistent styling, links, and layout

## Styling Strategy

### CSS Files Hierarchy
1. **index.css** - Global variables (colors, typography), scrollbar, `.animate-on-scroll` utility class
2. **HomePage.css** - Page-level styles (navbar, hero, footer, content sections, process cards)
3. **Pages.css** - Page template styles (`.page-hero`, feature grids, form styling, service grids)
4. **ProjectStory.css** - Accordion sections and image gallery styles for ProjectStoryPage
5. **Footer.css** - Footer component styles (reference for styling)
6. **AnimatedCat.css** - Cat mascot styling with keyframe animations
7. **Component-level** - Inline styles in form inputs where necessary

### Color Palette (CSS Variables)
```css
--primary-color: #c9905a;        /* Warm bronze - buttons, accents */
--secondary-color: #6b7f89;      /* Muted navy - headings, links */
--accent-color: #d4a574;         /* Lighter bronze - hover states */
--light-bg: #faf8f5;             /* Off-white - section backgrounds */
--dark-text: #1a1a1a;            /* Near-black - body text */
--light-text: #666;              /* Gray - secondary text */
--border-accent: #e8dcc8;        /* Beige - subtle borders */
```

### Font Strategy
- **Playfair Display** (serif) - Headlines (h1-h6)
- **Poppins** (sans-serif) - Body text, buttons, form inputs

### Responsive Breakpoints
- **768px** - Tablet: Stack sections, reduce padding, adjust font sizes
- **480px** - Mobile: Further scaling, single-column layout

## Key Patterns & Conventions

### Entrance Animations
1. Add `.animate-on-scroll` class to section elements
2. Utility initializes on page load via `initEntranceAnimations()` in `main.jsx`
3. Elements fade in + slide up (22px) when 12% from viewport bottom
4. Respects `prefers-reduced-motion` media query

**Example:**
```jsx
<section className="content-section animate-on-scroll">
  {/* Content auto-animates on scroll */}
</section>
```

### Footer Pattern (All Pages - STANDARDIZED)
The footer is **identical across all pages** using the same structure as HomePage:
- Logo with link to home in `footer-logo-top` container with styled text
- Three footer columns: Quick Links, Explore, and Connect
- Quick Links use `<Link>` components for internal navigation
- Connect column uses external `<a>` tags with target="_blank" for social media
- Copyright notice: © 2025 Studio Kriyaa. All rights reserved.

**Important**: When adding new pages, copy the footer from HomePage.jsx or another page to maintain consistency.

### Form Handling (ContactPage Pattern)
- Local state for form fields + submission status
- EmailJS sends to `contact.studiokriyaa@gmail.com`
- Success/error messages displayed inline with auto-hide (3-5s)
- Button disabled during submission

### Link Strategy
- Internal navigation: `<Link to="/">` (React Router)
- External forms/social: `<a href="https://..." target="_blank">`
- Booking form: Google Forms (hardcoded in `hero-btn` links across all pages)

### Interactive Components Pattern
**AnimatedCat Easter Egg:**
- Clickable cat mascot in top-right corner (appears on all pages)
- Click triggers wave animation + temporary message bubble
- Uses local state: `showMessage`, `isWaving` (3s timeout)
- Pure CSS animations with `@keyframes` for wave effect
- Example: Copy from `AnimatedCat.jsx` for similar interactive mascots

**ProjectStoryPage Accordion:**
- Uses local `useState` to track `openSection` (index or null)
- `toggleSection(index)` collapses/expands sections
- Sections array contains title, description, and image arrays
- CSS handles smooth height transitions with `max-height` trick

## Development Workflow

### Build & Run
```bash
npm run dev      # Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Local preview of production build
npm run lint     # ESLint check
```

### Common Tasks

**Adding a new page:**
1. Create component in `src/pages/PageName.jsx` (copy structure from AboutPage or ContactPage)
2. Import and add `<Route>` in App.jsx
3. Add nav link to navbar (all pages have navbar)
4. **Copy footer from HomePage** to maintain consistency (use footer-logo-top class)
5. Include footer copyright year: `© 2025 Studio Kriyaa`

**Adding a new section to HomePage:**
1. Create `<section className="content-section animate-on-scroll">` wrapper
2. Use `.content-image` + `.content-text` divs for 2-column layout, or `.reverse` for flipped
3. Add `.outline-btn` or `.hero-btn` for CTAs
4. Styles inherit from HomePage.css

**Adding accordion sections (ProjectStoryPage pattern):**
1. Store sections data in array: `{ title, description, images[] }`
2. Use `useState` for `openSection` tracking (index or null)
3. Map sections with `onClick={() => toggleSection(index)}`
4. Import `ProjectStory.css` for accordion styling
5. Image galleries use flexbox with gap and responsive wrapping

**Form submissions:**
- EmailJS already configured; copy ContactPage pattern
- Init key: `"VnM6YXmL3J3AjXxmP"`
- Service/Template IDs hardcoded in component

## Integration Points

### Dependencies
- **React Router DOM 7.12.0** - Multi-page navigation
- **EmailJS Browser 4.4.1** - Contact form email delivery
- **Vite 7.2.4** - Build tool with Fast Refresh

### Asset Management
- Images in `src/assets/`, imported as ES modules with correct relative paths (`./assets/filename`)
- Videos also stored in `src/assets/` and exported via `src/utils/media.js` (e.g., `studioShowreelUrl`)
- Vite handles optimization
- CSS/JS can reference via relative imports

### Important: ScrollToTop Behavior
- `ScrollToTop.jsx` reinitializes entrance animations on route change
- Pass `behavior="smooth"` to use polyfilled smooth scroll (duration: 600ms)
- Falls back to instant scroll if native browser support unavailable
- **Critical**: Automatically called in App.jsx (`<ScrollToTop behavior="smooth" />`)

### EmailJS Configuration
- **Public Key**: `"VnM6YXmL3J3AjXxmP"` (must be initialized in ContactPage or main app)
- **Service ID**: `"service_qlm98yj"`
- **Template ID**: `"template_kf6vxnk"`
- **Recipient**: `"contact.studiokriyaa@gmail.com"` (set in EmailJS dashboard template)
- Import: `import emailjs from "@emailjs/browser"`

## Common Troubleshooting & Debugging

### Animations Not Showing on New Pages
- **Cause**: `ScrollToTop.jsx` not properly reinitializing animations via `initEntranceAnimations()`
- **Fix**: Verify `<ScrollToTop behavior="smooth" />` is in `App.jsx` Router component
- **Check**: Ensure page sections have `.animate-on-scroll` class

### EmailJS Form Not Sending
- **Cause**: EmailJS public key not initialized or incorrect Service/Template IDs
- **Check**: Verify `emailjs.init()` is called with `"VnM6YXmL3J3AjXxmP"` before form submission
- **Debug**: Check browser console for EmailJS errors; verify CORS setup in EmailJS dashboard
- **Verify**: Service ID `"service_qlm98yj"` and Template ID `"template_kf6vxnk"` match EmailJS account

### Navbar Active Link Not Highlighting
- **Cause**: NavLink component needs `.active` class instead of `<Link>`
- **Current Pattern**: Manually add `className="nav-link active"` to current page's nav item
- **Note**: React Router v7 doesn't auto-match active links; you must manually manage this state

### Images Not Loading
- **Common Issue**: Import path uses `../assets/` instead of `./assets/`
- **Correct Pattern**: `import hero from "./assets/hero.jpg"` (relative from component location)
- **Test**: Check browser DevTools Network tab; verify file exists in `src/assets/`

## Critical Implementation Details

### ScrollToTop Behavior (Essential for Page Transitions)
- `ScrollToTop.jsx` runs on **every route change** via `useLocation()` hook
- Immediately scrolls to top using triple-method approach for mobile reliability:
  1. `window.scrollTo(0, 0)` (standard)
  2. Sets `document.documentElement.scrollTop = 0` and `document.body.scrollTop = 0` (fallback)
  3. Repeats with `setTimeout(..., 0)` for mobile rendering race conditions
- **Critically important**: Reinitializes entrance animations via `initEntranceAnimations()` in a requestAnimationFrame after route change
- Without this reinitialization, new page sections won't animate in - always keep this in App.jsx

### Entrance Animations Deep Dive
- `entrance.js` uses `IntersectionObserver` with custom settings:
  - `rootMargin: '0px 0px -12% 0px'` = triggers when 12% from viewport bottom
  - `threshold: 0.08` = minimum 8% visibility
  - `duration: 600ms` with `easeInOutCubic` timing
  - `translateY: 22px` = slides elements up 22px while fading in
- **Respects `prefers-reduced-motion`** via `@media (prefers-reduced-motion: reduce)` in CSS
- **Selector**: `.animate-on-scroll` class required on section elements to activate

### AnimatedCat Easter Egg Behavior
- Click triggers wave animation + contextual message popup (3-second timeout)
- Messages are **page-aware**: different messages for `/`, `/about`, `/services`, `/contact`, `/project-story`
- Also includes **time-aware greetings**: "Good morning/afternoon/evening" based on `Date.getHours()`
- Uses route-based logic via `useLocation()` to detect current page
- Pure CSS animations for wave effect via `@keyframes wave-animation` in AnimatedCat.css

## Recent Changes (January 2026)

✅ **Added 4 new service detail pages** - FurniturePage, DecorPage, LightingPage, TextilesPage (9 routes total)
✅ **Removed orphaned Footer component** - Unreachable `<Footer />` tag in App.jsx has been removed
✅ **Standardized footer across all pages** - All pages (About, Services, Contact, etc.) now use same footer as HomePage with proper styling
✅ **Fixed kids2.jpg import path** - Corrected relative path from `../assets/kids2.jpg` to `./assets/kids2.jpg`
✅ **Added CatCanvas component** - Additional cat animation variant in components/

## File Structure Best Practices

1. **Navbar/Footer**: Inline in each page component (not extracted to separate component - maintains styling consistency)
2. **Page imports**: Each page imports `../HomePage.css` and `../styles/Pages.css` for consistent base styles
3. **Footer logo styling**: Uses `footer-logo-top` class with text color override `style={{ color: '#111' }}`
4. **Assets**: All images stored in `src/assets/` and imported with relative path `./assets/`

## When Adding Features

- **New pages**: Follow AboutPage/ServicesPage/ContactPage structure (navbar + page-hero + sections + footer)
- **New sections**: Use `.animate-on-scroll`, inherit colors from CSS variables
- **Forms**: Replicate ContactPage pattern with EmailJS
- **Mobile**: Test responsive behavior at 768px and 480px breakpoints
- **Footer**: Always include the standardized footer matching HomePage structure
- **Linting**: Run `npm run lint` before committing
- **Routes**: Add new `<Route>` entries in App.jsx and ensure ScrollToTop is configured

## Known Conventions

1. **Footer is inline** - Each page has its own footer markup (matching HomePage pattern) for styling flexibility
2. **Two-column layouts** - Use `.content-section` + `.content-image` + `.content-text` pattern
3. **CTA buttons** - Use `.hero-btn` (primary) or `.outline-btn` (secondary)
4. **Form inputs** - Use inline styles for form fields styling (reference ContactPage)
5. **Footer year** - Statically set to 2025 (consider making dynamic with `new Date().getFullYear()` if needed)
6. **Asset imports** - All images from `src/assets/` use `./assets/filename` relative path (NOT `../assets/`)
7. **Service pages** - FurniturePage, DecorPage, LightingPage, TextilesPage follow identical structure pattern
