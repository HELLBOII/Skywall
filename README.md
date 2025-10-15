# Winner Holistic Consultants - Modern React Website

A modern, responsive website built with React, Vite.js, TypeScript, and Tailwind CSS for Winner Holistic Consultants L.L.C., a leading engineering consultancy firm in the UAE.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite.js for lightning-fast development and builds
- **TypeScript**: Type-safe development with excellent developer experience
- **Modern Animations**: Smooth transitions and interactions using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd winner-holistic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── ServicesSection.tsx
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── ...
├── data/               # Static data and content
│   ├── services.ts
│   ├── projects.ts
│   ├── team.ts
│   └── ...
├── types/              # TypeScript type definitions
│   └── index.ts
├── lib/                # Utility functions
│   └── utils.ts
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Primary**: #15338A (Deep Blue)
- **Secondary**: #EF7300 (Orange)
- **Dark**: #1A2544 (Dark Blue)
- **Gray**: #646464 (Medium Gray)

### Typography
- **Headings**: Ivy Mode (Custom Font)
- **Body**: Oxygen (Google Font)

### Components
- Modern card-based layouts
- Smooth hover effects and transitions
- Consistent spacing and typography
- Mobile-first responsive design

## 📱 Pages

1. **Home**: Hero slider, services overview, clients showcase
2. **About**: Company story, mission & vision, team members
3. **Services**: Detailed service offerings with interactive modals
4. **Projects**: Project portfolio with filtering and detailed views
5. **Clients**: Client showcase with statistics
6. **Career**: Job openings with application forms
7. **Contact**: Contact form and company information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure your server to serve `index.html` for all routes

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Content
- Update data files in `src/data/`
- Modify components in `src/components/`
- Update types in `src/types/`

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for global styles
- Use Tailwind classes for component styling

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite.js
- **Images**: Optimized and lazy-loaded
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- TypeScript for type safety
- Input validation on forms
- XSS protection
- CSRF protection ready

## 📞 Support

For technical support or questions about this website, please contact:
- Email: info@winnerhc.com
- Phone: +971 25 75 7573

## 📄 License

© 2025 Winner Holistic Consultants L.L.C. All rights reserved.

---

Built with ❤️ using React, Vite.js, and modern web technologies.
