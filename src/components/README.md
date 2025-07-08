# Components Directory

This directory contains all React components organized following Next.js best practices and modern component architecture patterns.

## Quick Start

```jsx
// Import all components from the main barrel export
import { Header, Footer, ContactForm, HeroVideoSection } from '@/components';

// Or import from specific categories
import { Input, Button } from '@/components/ui';
import { ContactForm } from '@/components/forms';
```

## Directory Structure

```
components/
├── ui/                     # Reusable UI components
├── layout/                 # Layout components (Header, Footer)
├── forms/                  # Form components with validation
├── sections/               # Page section components
└── index.js                # Main barrel export
```

## Component Categories

### 🎨 UI Components (`/ui`)
Pure, reusable components with minimal business logic:
- `Input` - Form input field
- `TextArea` - Multi-line text input
- `Button` - Customizable button with variants

### 🏗️ Layout Components (`/layout`)
Components responsible for page structure:
- `Header` - Site navigation header
- `Footer` - Site footer with links

### 📝 Form Components (`/forms`)
Components with form logic and validation:
- `ContactForm` - Complete contact form with validation

### 📄 Section Components (`/sections`)
Feature-specific page sections:
- `HeroVideoSection` - Hero section with video background
- `ContactSection` - Contact information and form section

## Usage Examples

### Basic UI Components
```jsx
import { Input, TextArea, Button } from '@/components/ui';

function MyForm() {
  return (
    <form>
      <Input name="email" type="email" placeholder="Email" required />
      <TextArea name="message" placeholder="Message" rows={4} />
      <Button type="submit" variant="primary">Submit</Button>
    </form>
  );
}
```

### Layout Components
```jsx
import { Header, Footer } from '@/components/layout';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

### Form Components
```jsx
import { ContactForm } from '@/components/forms';

function ContactPage() {
  const handleSubmit = async (formData) => {
    // Handle form submission
    console.log(formData);
  };

  return <ContactForm onSubmit={handleSubmit} />;
}
```

### Section Components
```jsx
import { HeroVideoSection, ContactSection } from '@/components/sections';

function HomePage() {
  return (
    <>
      <HeroVideoSection 
        videoSrc="/hero-video.mp4"
        title="Welcome to Our Site"
      />
      <ContactSection 
        title="Get in Touch"
        onFormSubmit={handleContact}
      />
    </>
  );
}
```

## Component Props

### Common Props
All components accept these common props:
- `className` - Additional CSS classes
- `children` - Child elements (when applicable)
- `...rest` - Additional HTML attributes

### Responsive Design
Components are built with responsive design in mind:
- Mobile-first approach
- Tailwind CSS breakpoints
- Consistent spacing and typography

## Best Practices

### 1. Import Strategy
```jsx
// ✅ Good - Use barrel exports
import { Header, ContactForm } from '@/components';

// ❌ Avoid - Direct file imports
import Header from '@/components/layout/Header';
```

### 2. Component Composition
```jsx
// ✅ Good - Compose components
<ContactSection>
  <ContactForm onSubmit={handleSubmit} />
</ContactSection>

// ❌ Avoid - Monolithic components
<ContactSectionWithForm />
```

### 3. Props Passing
```jsx
// ✅ Good - Explicit props
<Button variant="primary" size="lg" disabled={loading}>
  Submit
</Button>

// ❌ Avoid - Unclear props
<Button type="1" big={true} state="disabled">
  Submit
</Button>
```

## Development Guidelines

### Adding New Components

1. **Choose the right category** based on component purpose
2. **Follow naming conventions** (PascalCase)
3. **Add JSDoc documentation** for props and usage
4. **Include in barrel exports** (`index.js` files)
5. **Write tests** for component functionality

### Component Structure
```jsx
/**
 * Component description
 * 
 * @param {Object} props - Component props
 * @param {string} props.requiredProp - Required prop description
 * @param {string} [props.optionalProp="default"] - Optional prop description
 */
export function ComponentName({ 
  requiredProp, 
  optionalProp = "default",
  className = "",
  ...rest 
}) {
  return (
    <div className={`base-classes ${className}`} {...rest}>
      {/* Component content */}
    </div>
  );
}

export default ComponentName;
```

## Migration from Old Structure

If you're migrating from the old component structure:

1. **Update imports** to use new paths
2. **Check component APIs** for any changes
3. **Update tests** to reflect new structure
4. **Remove old component files** after migration

## Performance Considerations

- **Tree-shaking**: Barrel exports enable automatic tree-shaking
- **Code splitting**: Components are automatically split by Next.js
- **Bundle size**: Only imported components are included in the bundle

## Testing

Components should be tested for:
- Rendering with different props
- User interactions
- Responsive behavior
- Accessibility compliance

For detailed architecture documentation, see [COMPONENT_ARCHITECTURE.md](../../COMPONENT_ARCHITECTURE.md).
