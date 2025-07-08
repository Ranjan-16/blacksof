# Responsive Design System

This project implements a comprehensive responsive design system that adapts to different screen sizes with custom breakpoints and utilities.

## Breakpoints

The responsive design uses the following breakpoints:

| Device Type | Screen Size | Tailwind Prefix | Custom Class |
|-------------|-------------|-----------------|--------------|
| Mobile | < 768px | (default) | `mobile:` |
| Tablet | 768px - 1024px | `md:` | `tablet:` |
| Laptop | 1024px - 1440px | `lg:`, `xl:` | `laptop:` |
| Desktop | > 1440px | `2xl:` | `desktop:` |

## Header Specifications

The header implements responsive width adjustments:

- **Mobile** (< 768px): 100% width (full width)
- **Tablet** (768px - 1023px): 95% width
- **Laptop** (1024px - 1440px): 90% width  
- **Desktop** (> 1440px): **83% width** (as specified)

## Components

### ResponsiveContainer
A flexible container component with predefined sizes and responsive padding.

```jsx
import { ResponsiveContainer } from './components/ResponsiveContainer';

<ResponsiveContainer size="lg" className="custom-class">
  {children}
</ResponsiveContainer>
```

**Available sizes:**
- `sm`: max-w-2xl
- `default`: max-w-6xl
- `lg`: max-w-7xl
- `xl`: max-w-8xl
- `full`: max-w-none w-full
- `header`: Custom header sizing with 83% desktop width

### ResponsiveSection
Provides consistent vertical spacing across breakpoints.

```jsx
<ResponsiveSection spacing="lg">
  {children}
</ResponsiveSection>
```

### ResponsiveGrid
Creates responsive grid layouts.

```jsx
<ResponsiveGrid 
  cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 4 }}
  gap="default"
>
  {children}
</ResponsiveGrid>
```

### ResponsiveFlex
Flexible responsive flex layouts.

```jsx
<ResponsiveFlex 
  direction={{ mobile: 'col', tablet: 'row' }}
  align="center"
  justify="between"
>
  {children}
</ResponsiveFlex>
```

## Typography Classes

### Responsive Text Sizes
- `.text-responsive-xs` - Extra small responsive text
- `.text-responsive-sm` - Small responsive text  
- `.text-responsive-base` - Base responsive text
- `.text-responsive-lg` - Large responsive text
- `.text-responsive-xl` - Extra large responsive text

### Responsive Headings
- `.heading-h1` through `.heading-h6` - Responsive heading styles

## Spacing Utilities

### Responsive Spacing
- `.space-responsive-xs` - Extra small responsive spacing
- `.space-responsive-sm` - Small responsive spacing
- `.space-responsive-md` - Medium responsive spacing
- `.space-responsive-lg` - Large responsive spacing
- `.space-responsive-xl` - Extra large responsive spacing

### Responsive Margins
- `.margin-responsive-xs` through `.margin-responsive-xl`

### Responsive Padding
- `.padding-responsive-xs` through `.padding-responsive-xl`

## Usage Examples

### Basic Responsive Layout
```jsx
<ResponsiveSection spacing="lg">
  <ResponsiveContainer size="lg">
    <h1 className="heading-h1">Responsive Title</h1>
    <p className="text-responsive-base">Responsive paragraph text.</p>
  </ResponsiveContainer>
</ResponsiveSection>
```

### Responsive Grid
```jsx
<ResponsiveGrid cols={{ mobile: 1, tablet: 2, laptop: 3, desktop: 4 }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</ResponsiveGrid>
```

### Custom Responsive Styling
```jsx
<div className="
  w-full sm:w-full md:w-95 lg:w-90 xl:w-90 2xl:w-83
  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
  py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 2xl:py-8
">
  Content with custom responsive styling
</div>
```

## Testing

The responsive design can be tested using the `ResponsiveTestPage` component which demonstrates:

1. Header width behavior across breakpoints
2. Typography scaling
3. Grid responsiveness
4. Flex layout adaptations
5. Spacing and padding adjustments

To view the test page, navigate to the home page and resize your browser window to see the responsive behavior in action.

## Configuration

The responsive system is configured in:

- `tailwind.config.js` - Custom breakpoints and utilities
- `src/app/globals.css` - Responsive utility classes
- `src/app/components/ResponsiveContainer.jsx` - Layout components

## Browser Support

This responsive design system supports all modern browsers and follows progressive enhancement principles to ensure graceful degradation on older browsers.
