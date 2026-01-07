# FeatureGrid Component

A responsive 2x2 grid of modern feature cards with a dark aesthetic, perfect for showcasing key features, services, or values.

## Features

- **Responsive Design**: Adapts from single column on mobile to 2x2 grid on desktop
- **Dark Aesthetic**: Background images with 60% black overlay for optimal text readability
- **Smooth Animations**: Framer Motion powered hover effects and entrance animations
- **Customizable**: Flexible props for different use cases
- **Modern Typography**: Clean sans-serif fonts with proper spacing and hierarchy

## Visual Elements

Each card includes:
- Background image with dark overlay
- Bold white title in top-left corner
- Diagonal arrow icon (ArrowUpRight) in top-right corner
- Two lines of white secondary text at the bottom
- Subtle brightness hover effect
- Smooth scale and movement animations

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Our Features" | Header title text |
| `subtitle` | string | "Discover what makes us unique" | Header subtitle text |
| `showHeader` | boolean | true | Show/hide the header section |
| `customFeatures` | array | null | Custom feature objects array |

## Feature Object Structure

```javascript
{
  id: number,           // Unique identifier
  title: string,        // Card title (top-left)
  backgroundImage: string, // Image path or URL
  description: string,  // First line of bottom text
  subtitle: string      // Second line of bottom text
}
```

## Usage Examples

### Basic Usage
```jsx
import FeatureGrid from './components/FeatureGrid'

// Default grid with built-in content
<FeatureGrid />
```

### Custom Title and Subtitle
```jsx
<FeatureGrid 
  title="Our Services" 
  subtitle="What we offer to our community"
/>
```

### Without Header
```jsx
<FeatureGrid showHeader={false} />
```

### Custom Features
```jsx
const myFeatures = [
  {
    id: 1,
    title: "Education",
    backgroundImage: "/path/to/image.jpg",
    description: "Quality education for all students",
    subtitle: "Building tomorrow's leaders today"
  },
  // ... more features
]

<FeatureGrid 
  title="HOPE3 Pillars"
  customFeatures={myFeatures}
/>
```

## Styling

The component uses Tailwind CSS classes and is designed to work on dark backgrounds. Key styling features:

- Cards: `h-80` height, `rounded-lg` corners
- Typography: Bold titles, clean sans-serif font
- Animations: Smooth hover effects with scale and brightness changes
- Responsive: `grid-cols-1 md:grid-cols-2` for mobile-first design

## Dependencies

- React
- Framer Motion
- Lucide React (for ArrowUpRight icon)
- Tailwind CSS

## Integration

To use in your project:

1. Import the component: `import FeatureGrid from './components/FeatureGrid'`
2. Add to your page/component JSX
3. Customize with props as needed
4. Ensure parent container has dark background for optimal appearance

## Demo

Visit `/feature-grid` route to see the component in action with various configurations.