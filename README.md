# Arocean Nexus LLC - Next.js 16 Migration

A modern, high-performance website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 16**: Latest React framework with App Router and Server Components
- **TypeScript**: Full type safety for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Smooth animations and micro-interactions
- **Performance Optimized**: Next.js Image, Font optimization, and Core Web Vitals
- **SEO Ready**: Comprehensive metadata, sitemap, and structured data
- **Responsive Design**: Mobile-first approach with modern layouts
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Homepage
├── globals.css             # Global styles
├── services/               # Services page
├── portfolio/              # Portfolio page
├── about/                  # About page
├── contact/                # Contact page
├── privacy/                # Privacy policy
├── terms/                  # Terms of service
└── api/                    # API routes

components/
├── layout/                 # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   └── ScrollProgress.tsx
├── sections/               # Page sections
│   ├── Hero.tsx
│   ├── ServicesPreview.tsx
│   ├── Stats.tsx
│   ├── FeaturedProjects.tsx
│   ├── WhyChooseUs.tsx
│   └── CTA.tsx
├── services/               # Service components
├── portfolio/              # Portfolio components
├── contact/                # Contact components
└── ui/                     # UI components

lib/
├── constants.ts            # Site constants and data
├── types.ts                # TypeScript type definitions
├── utils.ts                # Utility functions
└── validations.ts          # Form validation schemas

hooks/
├── useIntersection.ts      # Intersection observer hook
├── useScrollProgress.ts    # Scroll progress hook
└── useForm.ts              # Form handling hook

public/
├── images/                 # Static images
├── favicon.ico
└── robots.txt
```

## 🛠 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arocean-nexus-llc
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- **Home** (`/`) - Hero section, services preview, stats, featured projects
- **Services** (`/services`) - Detailed service descriptions and process
- **Portfolio** (`/portfolio`) - Project showcase with filtering
- **About** (`/about`) - Company story, values, and testimonials
- **Contact** (`/contact`) - Contact form, FAQ, and support options
- **Privacy Policy** (`/privacy`) - Comprehensive privacy policy
- **Terms of Service** (`/terms`) - Legal terms and conditions

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#a855f7)
- **Accent**: Pink (#ec4899)
- **Gray**: Comprehensive gray scale from 50 to 900

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body**: Regular weights (400-500)

### Components
- **Button**: Primary, secondary, outline, and ghost variants
- **Cards**: Consistent styling with hover effects
- **Forms**: Validated inputs with error states
- **Navigation**: Responsive header with mobile menu

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

### Next.js Config
The project uses Next.js 16 with:
- App Router
- TypeScript
- Static Export (`output: 'export'`)
- Image optimization (disabled for static export)
- Custom headers for security

## 🚀 Deployment

### Static Export
The project is configured for static export:

```bash
npm run build
# Creates 'out' directory with static files
```

### Vercel Deployment
1. Connect your repository to Vercel
2. Configure build settings
3. Deploy with automatic CI/CD

### Other Platforms
The static export can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📊 Performance

### Core Web Vitals
- **LCP**: Optimized with Next.js Image and proper loading
- **FID**: Minimal JavaScript and efficient event handling
- **CLS**: Stable layouts with proper dimensions

### Optimizations
- **Images**: Automatic optimization and lazy loading
- **Fonts**: Optimized loading with next/font
- **Code Splitting**: Automatic by Next.js
- **Caching**: Proper cache headers for static assets

## 🔍 SEO

### Meta Tags
- Dynamic meta tags for each page
- Open Graph data for social sharing
- Twitter Card support
- Structured data for rich snippets

### Sitemap
- Automatic sitemap generation
- Proper URL structure
- Canonical URLs

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🧪 Testing

Run the following commands for testing:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format

# Build test
npm run build
```

## 📝 Content Management

The project uses static content defined in `/lib/constants.ts`. To update content:

1. Edit the relevant constant arrays
2. Update images in `/public/images/`
3. Rebuild the project

For dynamic content, consider integrating a headless CMS like:
- Contentful
- Sanity
- Strapi
- WordPress (with REST API)

## 🔒 Security

- Content Security Policy headers
- XSS protection
- No external dependencies for sensitive operations
- Form validation and sanitization
- Secure API route handling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and owned by Arocean Nexus LLC. All rights reserved.

## 📞 Support

For questions or support, please contact:
- Email: info@aroceannexus.com
- Phone: (213) 784-1841
- Address: 21423 Baldovin Way, Tomball, TX 77375-1928

---

Built with ❤️ by Arocean Nexus LLC - Digital Excellence Since 2023