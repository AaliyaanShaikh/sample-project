# TONG DIGITALS - Premium Marketing Agency Website

A modern, immersive marketing agency website with smooth 3D animations, high-end interactions, and a premium design aesthetic inspired by Spline.

## Features

- 🎨 **Modern Design**: High-end, immersive interface with glass morphism effects
- 🎭 **3D Animations**: Interactive 3D elements powered by React Three Fiber
- ✨ **Smooth Animations**: Framer Motion for fluid, professional animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎯 **Interactive Elements**: Hover effects, parallax scrolling, and engaging interactions
- 🚀 **Performance Optimized**: Built with Next.js 14 for optimal performance

## Color Palette

- **Primary**: `#DB6923` (Orange)
- **Secondary**: `#EFEEEA` (Light Beige)
- **Dark**: `#202020` (Dark Gray)

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics
- **Lenis** - Smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero3D.tsx       # 3D hero section
│   ├── InteractiveCard.tsx # Interactive service cards
│   ├── AnimatedText.tsx  # Text animations
│   ├── ParallaxSection.tsx # Parallax effects
│   └── SmoothScroll.tsx  # Smooth scroll wrapper
└── public/               # Static assets
```

## Sections

1. **Hero Section**: Immersive 3D animated background with call-to-action
2. **Services**: Interactive cards showcasing agency services
3. **Portfolio**: Featured work with parallax effects
4. **About**: Agency information and statistics
5. **Contact**: Contact form with glass morphism design

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  primary: '#DB6923',
  secondary: '#EFEEEA',
  dark: '#202020',
}
```

### Content

Update content in `app/page.tsx` to customize:
- Services
- Portfolio items
- About section text
- Contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.
