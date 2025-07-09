# Blacksof - Automotive Solutions Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Performance](https://img.shields.io/badge/Performance-Optimized-green)](https://web.dev/measure/)

A modern, high-performance automotive solutions website showcasing advanced NVH (Noise, Vibration, and Harshness) solutions and soft trims for seamless vehicle experiences.

## 🌐 Live Demo

**🚀 [View Live Website](https://blacksof-ranjan-16s-projects.vercel.app/)**

Experience the full interactive automotive showcase with video demonstrations, responsive design, and performance optimizations.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation & Development

```bash
# Clone the repository
git clone [repository-url]
cd blacksof

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # React components
│   ├── common/           # Shared components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI primitives
└── hooks/                # Custom React hooks
```

## 🎯 Key Features

### 🎬 Interactive Video Showcase

- **Hero Video Background**: Full-screen automotive video with overlay
- **Product Carousels**: Interactive video carousels for vehicle demonstrations
- **Lazy Loading**: Videos load only when in viewport for optimal performance

### ⚡ Performance Optimized

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Code Splitting**: Vendor and component-specific chunks
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Resource Hints**: Preloading and prefetching for critical assets

### 📱 Responsive Design

- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Swiper-based carousels with touch support
- **Adaptive Layout**: Different layouts for mobile and desktop

### 🎨 Modern UI/UX

- **Smooth Animations**: CSS-based animations with hardware acceleration
- **Scroll Effects**: Header hide/show on scroll with backdrop blur
- **Interactive Elements**: Hover states and loading animations

## 🛠️ Technology Stack

### Core Technologies

- **Next.js 15.3.5**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **Tailwind CSS 4**: Utility-first CSS framework

### Key Dependencies

- **Swiper 11.2.10**: Touch slider for carousels
- **Lucide React**: Modern icon library
- **Framer Motion**: Animation library (legacy support)

### Development Tools

- **ESLint**: Code linting and quality
- **Tailwind CSS**: Utility-first styling
- **PostCSS**: CSS processing

## 🧩 Component Architecture

### Layout Components

- **Header**: Responsive navigation with scroll behavior
- **Footer**: Company information and links
- **Layout**: Root layout with metadata

### Section Components

- **HeroVideoSection**: Full-screen video background
- **AutomotiveSection**: Interactive product showcase
- **ContactSection**: Professional contact form

### UI Components

- **Button**: Memoized button with variants
- **Input/TextArea**: Form input components
- **Carousel**: Performance-optimized video carousel

## ⚙️ Configuration

### Next.js Configuration (`next.config.js`)

```javascript
{
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["swiper", "lucide-react"]
  },
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000
  },
  output: "standalone",
  reactStrictMode: true
}
```

### Tailwind Configuration

- **Content Paths**: App, components, and pages
- **Responsive Design**: Mobile-first breakpoints
- **Custom Utilities**: Project-specific classes

## 🎨 Styling System

### Design Tokens

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary-blue: #006cbc;
}
```

### Typography

- **Font Family**: Geist (Google Fonts)
- **Font Weights**: 100-900 variable
- **Font Display**: swap for performance

### Animations

- **Fade In**: Custom CSS keyframes
- **Scroll Animations**: Intersection Observer
- **Hardware Acceleration**: transform3d optimizations

## 📊 Performance Features

### Loading Optimizations

- **Critical Resource Preloading**: Logo and hero video
- **DNS Prefetching**: External resources
- **Lazy Loading**: On-demand asset loading
- **Image Optimization**: Modern formats

### Runtime Optimizations

- **Component Memoization**: React.memo usage
- **Hook Optimization**: useMemo and useCallback
- **Scroll Throttling**: requestAnimationFrame
- **Bundle Splitting**: Optimized chunks

### Caching Strategy

- **Static Assets**: Long-term caching
- **Videos**: Optimized video delivery
- **Fonts**: Preconnect and prefetch

## 🔧 Development Guidelines

### Code Standards

- **ESLint**: Enforced code quality
- **Component Naming**: PascalCase for components
- **File Organization**: Feature-based structure
- **Performance**: Memoization best practices

### Git Workflow

- **Feature Branches**: Isolated development
- **Conventional Commits**: Standardized commit messages
- **Code Reviews**: Mandatory peer reviews
- **CI/CD**: Automated testing and deployment

### Code Quality

- **ESLint**: Static code analysis
- **Type Checking**: TypeScript support
- **Performance Monitoring**: Core Web Vitals

## 🚀 Deployment

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

### Environment Setup

- **Development**: Hot reload, source maps
- **Production**: Optimized build, minification
- **Docker**: Containerized deployment support

## 📈 Performance Metrics

### Target Metrics

- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1

### Optimization Results

- **Bundle Size**: Optimized with code splitting
- **Image Loading**: WebP/AVIF with lazy loading
- **Video Performance**: Intersection Observer loading

## 🔍 Troubleshooting

### Common Issues

#### Video Loading

- Check file paths and formats
- Verify browser codec support
- Test autoplay policies

#### Performance

- Run Lighthouse audits
- Check bundle analyzer
- Verify image optimization

#### Styling

- Check Tailwind purging
- Verify responsive breakpoints
- Test cross-browser compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For technical support or questions:

- **Technical Lead**: [Contact Information]
- **Project Manager**: [Contact Information]
- **Documentation**: See PROJECT_DOCUMENTATION.md

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
