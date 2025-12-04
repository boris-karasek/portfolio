# Boris Karasek - Portfolio

A modern, animated portfolio website showcasing frontend development skills with interactive prism visuals and smooth scroll animations.

## ✨ Features

- **Interactive Prism Background** – Animated geometric background with rainbow light beams and bloom effects
- **Smooth Scroll Animations** – Framer Motion-powered transitions and parallax effects
- **Responsive Design** – Mobile-first approach with adaptive layouts and touch-friendly navigation
- **Mobile Navigation Menu** – Animated floating menu with section shortcuts
- **Section-Based Architecture** – Hero, About, Projects, and Contact sections with scroll-based tracking
- **Type-Safe** – Full TypeScript support with strict mode enabled
- **Accessible** – Semantic HTML and ARIA labels throughout

## 🛠️ Tech Stack

### Core
- **[React](https://react.dev)** – UI library
- **[TypeScript](https://www.typescriptlang.org)** – Type safety
- **[Vite](https://vitejs.dev)** – Build tool & dev server
- **[React Router](https://reactrouter.com)** – Client-side routing

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com)** – Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion)** – Animation library
- **[Lucide Icons](https://lucide.dev)** – Icon library
- **[CVA](https://cva.style/)** – Component variant management

### State Management
- **[Zustand](https://zustand-demo.vercel.app)** – Lightweight state management

### UI Components
- **[Radix UI](https://www.radix-ui.com)** – Headless component primitives
- **[shadcn/ui](https://ui.shadcn.com)** – Component library

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Lint code**
   ```bash
   npm run lint
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── features/              # Feature components
│   │   ├── background/        # Prism background & effects
│   │   ├── mainSections/      # Page sections
│   │   └── mobileNavigation/  # Mobile menu
│   ├── lib/prism/             # Geometry calculations
│   ├── routing/               # Layout & routing
│   └── ui/                    # Reusable UI components
├── hooks/                     # Custom React hooks
├── pages/                     # Page components
├── store/                     # Zustand stores
├── lib/                       # Utility functions
└── App.tsx                    # Root component
```

## 🎯 Key Components

### Store Management
- **[`useUIStore`](src/store/useUIStore.ts)** – Tracks current section, active project, and visibility states
- **[`usePrismStore`](src/store/usePrismStore.ts)** – Manages prism geometry and beam calculations

### Custom Hooks
- **[`useIsMobile`](src/hooks/useIsMobile.ts)** – Detects mobile viewport
- **[`useSectionObserver`](src/hooks/useSectionObserver.ts)** – Tracks section visibility for navigation

### Background System
- **[`PrismBackground`](src/components/features/background/PrismBackground.tsx)** – Main SVG background with animations
- **[`RainbowBeams`](src/components/features/background/RainbowBeams.tsx)** – Animated light beams
- **[`StarsBackground`](src/components/features/background/StarsBackground.tsx)** – Twinkling stars layer

## 🚀 Roadmap

### v1.1
- [ ] Implement contact form with email integration
- [ ] SEO optimization (meta tags, structured data)

### Prism Geometry
Modify calculations in [`src/components/lib/prism/computePrismGeometry.ts`](src/components/lib/prism/computePrismGeometry.ts) to adjust triangle size and position.

### Content
Update section content in:
- [`src/pages/Home.tsx`](src/pages/Home.tsx) – Main page structure
- [`src/components/features/mainSections/`](src/components/features/mainSections/) – Individual sections

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Boris Karasek** – Frontend Developer
- Email: karasekboris@gmail.com
- GitHub: [boris-karasek](https://github.com/boris-karasek)
- LinkedIn: [boris-karasek](https://linkedin.com/in/boris-karasek)