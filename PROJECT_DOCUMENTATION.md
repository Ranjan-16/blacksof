# Blacksof - Automotive Solutions Website

## 📋 Project Overview

**Blacksof** is a modern, high-performance automotive solutions website built with Next.js 15, showcasing advanced automotive technologies with a focus on NVH (Noise, Vibration, and Harshness) solutions and soft trims for seamless vehicle experiences.

### 🎯 Project Goals

- Showcase automotive solutions with interactive video content
- Provide a premium user experience with smooth animations
- Demonstrate technical capabilities through modern web technologies
- Optimize for performance and accessibility

### 🌐 Live Features

- **Hero Video Section**: Full-screen video background with overlay content
- **Interactive Automotive Showcase**: Video carousels for passenger and commercial vehicles
- **Contact Form**: Professional contact form with validation
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Performance Optimized**: Advanced caching, lazy loading, and code splitting

---

## 🏗️ Technical Architecture

### **Framework & Core Technologies**

- **Next.js 15.3.5**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **Tailwind CSS 4**: Utility-first CSS framework
### **Key Libraries & Dependencies**

```json
{
  "framer-motion": "^12.23.0", // Animation library
  "lucide-react": "^0.525.0", // Icon library
  "swiper": "^11.2.10" // Touch slider/carousel
}
```

### **Performance Optimizations**

- **Code Splitting**: Webpack optimization for vendor chunks
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Resource Hints**: DNS prefetch and preloading for critical assets
- **Lazy Loading**: Videos and images load on demand
- **Memoization**: React.memo and useMemo for component optimization

---

## 📁 Project Structure

```
blacksof/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles and animations
│   │   ├── layout.js          # Root layout with metadata
│   │   └── page.js            # Home page component
│   ├── components/            # Reusable components
│   │   ├── common/           # Shared components
│   │   │   └── Carousel.jsx  # Video carousel component
│   │   ├── forms/            # Form components
│   │   │   ├── ContactForm.jsx
│   │   │   └── index.js
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.jsx    # Navigation header
│   │   │   ├── Footer.jsx    # Site footer
│   │   │   └── index.js
│   │   ├── sections/         # Page sections
│   │   │   ├── HeroVideoSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── AutomotiveSection.jsx
│   │   │   └── index.js
│   │   ├── ui/               # UI primitives
│   │   │   ├── Button.jsx    # Reusable button component
│   │   │   ├── Input.jsx     # Form input component
│   │   │   ├── TextArea.jsx  # Form textarea component
│   │   │   └── index.js
│   │   ├── AutoMotiveDesktop.jsx  # Desktop automotive showcase
│   │   ├── Tabs.jsx          # Tab component
│   │   └── index.js          # Component barrel exports
│   └── hooks/                # Custom React hooks
│       └── useScrollAnimation.js  # Scroll direction detection
├── public/                   # Static assets
│   ├── videos/              # Video files
│   ├── images/              # Image assets
│   └── logo.svg            # Company logo
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

---

## 🧩 Component Architecture

### **Core Components**

#### **1. Layout Components**

- **Header**: Responsive navigation with scroll-based hide/show behavior
- **Footer**: Company information and links with background image
- **Layout**: Root layout with metadata and font loading

#### **2. Section Components**

- **HeroVideoSection**: Full-screen video background with overlay content
- **AutomotiveSection**: Interactive showcase with video carousels
- **ContactSection**: Professional contact form with validation

#### **3. UI Components**

- **Button**: Memoized button with variants (primary, secondary, outline)
- **Input**: Styled form input with validation states
- **TextArea**: Multi-line text input for forms
- **Carousel**: Swiper-based video carousel with lazy loading

#### **4. Common Components**

- **Carousel**: Reusable video carousel with performance optimizations
- **AutoMotiveDesktop**: Desktop-specific automotive showcase
- **Tabs**: Interactive tab component (MotionTabs)

---

## 🎨 Design System

### **Color Palette**

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary-blue: #006cbc;
}
```

### **Typography**

- **Primary Font**: Geist (Google Fonts)
- **Font Weights**: 100-900 (variable)
- **Font Display**: swap (performance optimization)

### **Responsive Breakpoints**

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1920px
- **Large Desktop**: > 1920px

### **Animation System**

- **Fade In**: Custom CSS keyframe animation
- **Scroll Animations**: Intersection Observer based
- **Hover Effects**: CSS transitions with hardware acceleration
- **Loading States**: Spinner animations for async operations

---

## ⚡ Performance Features

### **Loading Optimizations**

- **Critical Resource Preloading**: Logo and hero video
- **DNS Prefetching**: External font resources
- **Lazy Loading**: Videos load only when in viewport
- **Image Optimization**: WebP/AVIF with responsive sizing

### **Runtime Optimizations**

- **Component Memoization**: React.memo for expensive components
- **Hook Optimization**: useMemo and useCallback for performance
- **Scroll Throttling**: requestAnimationFrame for smooth scrolling
- **Code Splitting**: Vendor and library-specific chunks

### **Caching Strategy**

- **Static Assets**: 1-year cache TTL
- **Videos**: Long-term caching with proper headers
- **Fonts**: Preconnect and prefetch for faster loading

---

## 🔧 Configuration Files

### **Next.js Configuration** (`next.config.js`)

```javascript
{
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["swiper", "lucide-react"]
  },
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000 // 1 year
  },
  output: "standalone",
  reactStrictMode: true
}
```

### **Tailwind Configuration** (`tailwind.config.js`)

- **Content Paths**: App, components, and pages directories
- **Custom Utilities**: Extended with project-specific classes
- **Responsive Design**: Mobile-first approach

---

## 📱 Responsive Design

### **Mobile-First Approach**

- **Flexible Layouts**: CSS Grid and Flexbox
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Reduced bundle size for mobile devices

### **Desktop Enhancements**

- **Advanced Layouts**: Complex grid systems
- **Hover States**: Enhanced interactive elements
- **Larger Viewports**: Optimized for desktop screens

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm/yarn/pnpm package manager

### **Installation**

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### **Development Workflow**

1. **Development**: `npm run dev` - Hot reload on localhost:3000
2. **Linting**: `npm run lint` - ESLint code quality checks
3. **Building**: `npm run build` - Production build optimization
4. **Deployment**: `npm start` - Production server

---

## 📊 Performance Metrics

### **Core Web Vitals Targets**

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Optimization Techniques**

- **Bundle Splitting**: Vendor and component-specific chunks
- **Resource Hints**: Preload, prefetch, and preconnect
- **Image Optimization**: Modern formats with responsive sizing
- **Code Optimization**: Tree shaking and minification

---

## 🎬 Video Content Management

### **Video Assets**

- **Hero Video**: `automotive.224e7418884105595114.mp4` (Main background)
- **Passenger Vehicle Videos**:
  - Complete body, Front, Cabin, Trunk demonstrations
- **Commercial Vehicle Videos**:
  - Cabin and exterior showcases

### **Video Optimization**

- **Lazy Loading**: Videos load only when in viewport
- **Preload Strategy**: Metadata preloading for faster start
- **Poster Images**: Fallback images for better UX
- **Autoplay Management**: Conditional autoplay based on visibility

### **Video Data Structure**

```javascript
const videoData = {
  passengerVehicle: [
    {
      id: 1,
      label: "Complete body",
      videoSrc: "/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
      poster: "/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
    },
    // ... more videos
  ],
  commercialVehicle: [
    // Commercial vehicle videos
  ],
};
```

---

## 🔗 API Integration

### **Contact Form Submission**

- **Client-Side Validation**: Real-time form validation
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during submission
- **Success Handling**: Form reset and confirmation

### **Form Data Structure**

```javascript
const formData = {
  name: "",
  email: "",
  company: "",
  message: "",
};
```

### **Validation Rules**

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Company**: Optional field
- **Message**: Required, minimum 10 characters

---

## 🎯 SEO & Accessibility

### **SEO Optimizations**

- **Meta Tags**: Comprehensive title, description, keywords
- **Structured Data**: Schema markup for automotive business
- **Open Graph**: Social media sharing optimization
- **Sitemap**: XML sitemap for search engines

### **Accessibility Features**

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color ratios

### **Performance Accessibility**

- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators
- **Loading States**: Screen reader announcements

---

## 🔒 Security Considerations

### **Content Security Policy**

- **Script Sources**: Restricted to trusted domains
- **Style Sources**: Inline styles with nonce
- **Image Sources**: Optimized and validated sources

### **Form Security**

- **Input Sanitization**: Client and server-side validation
- **CSRF Protection**: Token-based protection
- **Rate Limiting**: Submission frequency limits

---

## 🧪 Testing Strategy

### **Component Testing**

- **Unit Tests**: Individual component functionality
- **Integration Tests**: Component interaction testing
- **Visual Regression**: Screenshot comparison testing

### **Performance Testing**

- **Lighthouse Audits**: Regular performance monitoring
- **Bundle Analysis**: Bundle size optimization
- **Load Testing**: Server performance under load

### **Accessibility Testing**

- **Automated Testing**: axe-core integration
- **Manual Testing**: Screen reader testing
- **Keyboard Testing**: Navigation without mouse

---

## 🚀 Deployment & DevOps

### **Build Process**

```bash
# Production build
npm run build

# Static export (if needed)
npm run export

# Docker deployment
docker build -t blacksof .
docker run -p 3000:3000 blacksof
```

### **Environment Configuration**

- **Development**: Hot reload, source maps
- **Staging**: Production build with debugging
- **Production**: Optimized build, error tracking

### **Monitoring & Analytics**

- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Runtime error monitoring
- **User Analytics**: Behavior and conversion tracking

---

## 📚 Development Guidelines

### **Code Standards**

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Naming Conventions**: PascalCase for components, camelCase for functions
- **File Organization**: Feature-based folder structure

### **Git Workflow**

- **Branch Strategy**: Feature branches with PR reviews
- **Commit Messages**: Conventional commit format
- **Code Reviews**: Mandatory peer reviews
- **CI/CD**: Automated testing and deployment

### **Component Development**

- **Reusability**: Build components for reuse
- **Performance**: Use React.memo and hooks optimization
- **Accessibility**: Include ARIA attributes and semantic HTML
- **Documentation**: JSDoc comments for complex components

---

## 🔧 Troubleshooting

### **Common Issues**

#### **Video Loading Problems**

- Check video file paths and formats
- Verify browser video codec support
- Test autoplay policies in different browsers

#### **Performance Issues**

- Run Lighthouse audit for bottlenecks
- Check bundle size with webpack-bundle-analyzer
- Verify image optimization settings

#### **Styling Issues**

- Check Tailwind CSS purging configuration
- Verify responsive breakpoints
- Test across different devices and browsers

### **Debug Commands**

```bash
# Analyze bundle size
npm run analyze

# Check for unused dependencies
npm run depcheck

# Run performance audit
npm run lighthouse
```

---

## 📈 Future Enhancements

### **Planned Features**

- **Multi-language Support**: i18n implementation
- **CMS Integration**: Content management system
- **Advanced Analytics**: Detailed user behavior tracking
- **Progressive Web App**: PWA capabilities

### **Technical Improvements**

- **Server-Side Rendering**: Enhanced SEO and performance
- **Edge Computing**: CDN optimization
- **Advanced Caching**: Redis implementation
- **API Integration**: Backend service integration

### **User Experience**

- **Interactive 3D Models**: WebGL automotive showcases
- **Virtual Reality**: VR product demonstrations
- **AI Chatbot**: Automated customer support
- **Personalization**: User-specific content

---

## 📞 Support & Maintenance

### **Documentation Updates**

- Regular documentation reviews
- Component API documentation
- Performance optimization guides

### **Maintenance Schedule**

- **Weekly**: Dependency updates and security patches
- **Monthly**: Performance audits and optimization
- **Quarterly**: Major feature releases and reviews

### **Contact Information**

- **Technical Lead**: [Contact Information]
- **Project Manager**: [Contact Information]
- **Support Team**: [Contact Information]

---

_Last Updated: December 2024_
_Version: 1.0.0_
