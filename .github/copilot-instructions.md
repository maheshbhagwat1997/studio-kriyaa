# Studio Kriyaa - AI Copilot Instructions

## Project Overview
Studio Kriyaa is a React + Vite portfolio site for an interior design studio. It showcases projects through a single-page layout with modular sections, currently rendered primarily through `HomePage.jsx` as a monolithic component.

## Architecture & Component Structure

### Key Components
- **App.jsx** - Entry point that renders `HomePage`
- **HomePage.jsx** - Main page combining inline layout with asset imports (images: hero.jpg, explore.jpg, content1-3.jpg, promo.jpg)
- **src/sections/** - Reusable section components:
  - `HeroSection.jsx` - Hero with CTA button (inline styles)
  - `NavigationSection.jsx` - Navigation bar (inline styles)
  - `AboutStudioSection.jsx` - About content (inline styles)
  - `DesignPhilosophySection.jsx` - Philosophy/values
  - `WorkShowcaseSection.jsx` - Portfolio showcase
  - `ProcessSection.jsx` - Design process
  - `FooterSection.jsx` - Footer with copyright year via `new Date().getFullYear()`
- **src/components/** - Currently empty; reserved for future reusable UI components

### Data Flow
Single-page layout: no routing, state management, or API calls currently. All content is static/hardcoded.

## Styling Conventions

### CSS Strategy
- **Global styles**: `index.css` (Poppins font family, color scheme, responsive baseline)
- **Page-specific**: `HomePage.css` (navbar, hero, sections - Poppins font, earthy palette: #e6cdaa, #2e5c7b, #333)
- **Component-specific**: Inline `style={}` objects in React components (primarily used in `src/sections/`)
- **App.css**: Minimal, largely boilerplate from Vite template (can be cleaned up)

### Color Palette
- Navbar: `#e6cdaa` (warm beige)
- Logo/accent: `#2e5c7b` (dark teal)
- Text: `#333` (dark gray)
- Footer: `#333` (dark)
- Backgrounds: `#f7f7f7`, `#faf6f0` (light off-white)

### Responsive Design
Currently not mobile-optimized; consider adding media queries to `HomePage.css` for `max-width: 768px` breakpoints.

## Development Workflow

### Build & Run Commands
```bash
npm run dev      # Start Vite dev server (HMR enabled)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint check (eslint .)
```

### Asset Management
- Images stored in `src/assets/` and imported as ES modules in `HomePage.jsx`
- Vite handles image optimization; import paths are relative to component files

## Key Patterns & Conventions

1. **Functional Components Only**: All components use modern React (no class components)
2. **Inline Styles**: Section components use inline `style={{}}` objects; avoid new CSS files for sections
3. **No State/Hooks Currently**: Components are pure presentational; if state is needed, add to parent or extract to custom hook
4. **Poppins Font**: Primary font across the site (loaded globally in `index.css`)
5. **React 19.2.0**: Latest version with Strict Mode in `main.jsx`

## Integration Points & Dependencies

### External Dependencies
- **React 19.2.0** & **React-DOM 19.2.0** - Core framework
- **Vite 7.2.4** - Build tool with Fast Refresh via `@vitejs/plugin-react`
- **ESLint 9.39.1** - Linting (eslint-plugin-react-hooks, eslint-plugin-react-refresh)

### Build Configuration
- `vite.config.js` - Minimal config with React plugin enabled
- `eslint.config.js` - ESLint configuration for React projects
- `index.html` - Entry point with `<div id="root"></div>`

## When Adding Features

- **New sections**: Create as default-export functional component in `src/sections/`, use inline styles matching HomePage.css palette
- **Reusable UI elements**: Add to `src/components/` with consistent styling approach
- **Global styles**: Update `index.css` or `HomePage.css` (prefer HomePage.css for page-specific rules)
- **Assets**: Place in `src/assets/`, import as ES modules in components
- **Linting**: Run `npm run lint` before committing; fix warnings related to React refresh and hooks

## Known Limitations & Future Improvements

- HomePage.jsx is monolithic; consider breaking into smaller section imports for better maintainability
- App.css contains boilerplate; can be removed or consolidated
- No mobile responsiveness; add media queries for tablet/mobile views
- No state management or routing; scale with React Context or Router if needed
