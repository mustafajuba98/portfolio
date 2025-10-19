# Mustafa Muhammed - Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Python Developer.

## 🚀 Technologies Used

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React

## 📋 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean and professional interface
- **Interactive Sections**: Hero, About, Skills, Experience, Projects, Contact
- **Project Showcase**: Filterable project gallery with different categories
- **Contact Form**: Functional contact form with validation
- **CV Download**: Direct download link for resume

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── assets/             # Static assets
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.ts`:
- Primary: Blue tones
- Accent: Purple tones
- Secondary: Gray tones

### Content
Update the following files to customize content:
- `src/components/HeroSection.tsx` - Hero section content
- `src/components/AboutSection.tsx` - About section and personal details
- `src/components/ExperienceSection.tsx` - Work experience and education
- `src/components/SkillsSection.tsx` - Technical skills
- `src/components/ProjectsSection.tsx` - Project portfolio
- `src/components/ContactSection.tsx` - Contact information

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: MustafaMuhammedAM@gmail.com
- **Phone**: (+20) 01018805134
- **Location**: Cairo City, Egypt
- **Portfolio**: https://portfolio-nine-swart-92.vercel.app