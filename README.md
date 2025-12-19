# Boris Karasek - Portfolio

A modern, animated portfolio website showcasing frontend development skills with interactive prism visuals and smooth scroll animations.

## ✨ Features

- **Interactive Prism Background** – Animated geometric background with rainbow light beams and bloom effects
- **Smooth Scroll Animations** – Framer Motion-powered transitions and parallax effects
- **Responsive Design** – Mobile-first approach with adaptive layouts and touch-friendly navigation
- **Mobile Navigation Menu** – Animated floating menu with section shortcuts
- **Section-Based Architecture** – Hero, About, Projects, and Contact sections with scroll-based tracking
- **Type-Safe** – Full TypeScript support with strict mode enabled

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
│   │   ├── sections/          # Page sections
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
- **[`useMobileNavStore`](src/store/useMobileNavStore.ts)** - Manages mobile navigation state
- **[`useScreenStore`](src/store/useScreenStore.ts)** – Manages the current screen size (mobile / medium / desktop)
- **[`useSectionRefsStore`](src/store/useSectionRefsStore.ts)** – Stores React refs for page sections to enable scrolling and DOM access

### Custom Hooks
- **[`useSectionObserver`](src/hooks/useSectionObserver.ts)** – Tracks section visibility for navigation
- **[`useScreenListener`](src/hooks/useScreenListener.ts)** – Listens to window resize events and updates the screen state (mobile / medium / desktop)

### Background System
- **[`PrismBackground`](src/components/features/background/PrismBackground.tsx)** – Main SVG background with animations
- **[`RainbowBeams`](src/components/features/background/RainbowBeams.tsx)** – Animated light beams
- **[`StarsBackground`](src/components/features/background/StarsBackground.tsx)** – Twinkling stars layer

### Prism Geometry
Modify calculations in [`src/components/lib/prism/computePrismGeometry.ts`](src/components/lib/prism/computePrismGeometry.ts) to adjust triangle size and position.

### Beam Geometry
Modify calculations in [`src/components/lib/prism/computeBeamGeometry.ts`](src/components/lib/prism/computeBeamGeometry.ts) to control the light beams emitted from the prism.  
This includes beam length, thickness, spread angle, color distribution, and interpolation along the prism edge.

### Content
Update section content in:
- [`src/pages/Home.tsx`](src/pages/Home.tsx) – Main page structure
- [`src/components/features/sections/`](src/components/features/sections/) – Individual sections

### Environment Variables

Environment variables are required for the contact form and reCAPTCHA.

A `.env` file is not included in this repository for security reasons.

For **EmailJS**, add the following variables in your Vercel dashboard (or `.env` locally for development):

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
> Replace the placeholders (`your_service_id_here`, etc.) with the values from your EmailJS dashboard.

**Note:** The contact form now sends emails directly from the frontend via EmailJS. The previous `/api/sendEmail` backend using Nodemailer is no longer used.

## 🚀 Deployment

The project is deployed on Vercel.  
Serverless API routes and environment variables are managed via the Vercel dashboard.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Boris Karasek** – Frontend Developer
- Email: karasekboris@gmail.com
- GitHub: [boris-karasek](https://github.com/boris-karasek)
- LinkedIn: [boris-karasek](https://linkedin.com/in/boris-karasek)