# DirectBiz - Local Business Discovery Platform 🏪

> **UI Prototype** designed and developed using [Lovable.dev](https://lovable.dev)

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://jxlee007.github.io/DirectBiz/)
[![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-purple)](https://lovable.dev)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)

## 🎯 About This Prototype

DirectBiz is a **mobile-first UI prototype** for a local business discovery platform. This project was rapidly prototyped using **Lovable**, an AI-powered platform that transforms ideas into production-ready React applications.

**🔗 Live Preview:** [https://jxlee007.github.io/DirectBiz/](https://jxlee007.github.io/DirectBiz/)

---

## ✨ What is Lovable?

[Lovable](https://lovable.dev) is an AI-powered development platform that helps you build full-stack web applications through conversational prompts. It generates clean, production-ready code with:

- **React + TypeScript** for type-safe component development
- **shadcn/ui** component library for beautiful, accessible UI
- **Tailwind CSS** for rapid styling
- **Vite** for lightning-fast development
- **React Router** for seamless navigation

### Why Lovable for UI Prototyping?

✅ **Rapid Iteration** - Go from idea to interactive prototype in minutes  
✅ **Production-Ready Code** - Export clean, maintainable React code  
✅ **Component-First** - Built with reusable, accessible components  
✅ **Responsive by Default** - Mobile-first design approach  
✅ **Easy Customization** - Standard React patterns make it easy to extend

---

## 📱 Prototype Features

This UI prototype showcases a complete local business discovery experience:

### Core Pages

- **🏠 Home** - Featured businesses with search and filtering
- **📂 Categories** - Browse businesses by category
- **🗺️ Map View** - Location-based business discovery
- **👤 Profile** - User profile and preferences
- **💬 Community** - Reviews and discussions
- **🔍 Business Detail** - Detailed business information
- **⚙️ More** - Additional settings and options

### Design Highlights

- **Modern, Clean Interface** - Minimalist design with focus on usability
- **Mobile-First Responsive** - Optimized for all screen sizes
- **Smooth Animations** - Polished interactions and transitions
- **Accessible Components** - Built with Radix UI primitives
- **Dark Mode Support** - Theme switching with next-themes

---

## 🛠️ Tech Stack

This prototype leverages modern web technologies:

| Technology | Purpose |
|------------|---------|
| **React 18.3** | UI framework with latest features |
| **TypeScript 5.5** | Type-safe development |
| **Vite 5.4** | Fast build tool and dev server |
| **Tailwind CSS 3.4** | Utility-first styling |
| **shadcn/ui** | High-quality component library |
| **Radix UI** | Accessible component primitives |
| **React Router 6** | Client-side routing |
| **Lucide React** | Beautiful icon library |
| **React Query** | Data fetching and state management |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```
# Clone the repository
git clone https://github.com/jxlee007/DirectBiz.git

# Navigate to project directory
cd DirectBiz

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
DirectBiz/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Home, Categories, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and helpers
│   ├── types/          # TypeScript type definitions
│   └── data/           # Mock data for prototype
├── public/             # Static assets
└── package.json        # Project dependencies
```

---

## 🎨 Design System

The prototype uses a consistent design system powered by:

- **Color Palette** - Carefully selected for accessibility
- **Typography** - System font stack for optimal readability
- **Spacing** - 8px base unit for consistent layouts
- **Components** - shadcn/ui for consistent, accessible UI

---

## 🔄 From Prototype to Production

This Lovable-generated prototype provides an excellent foundation for production development:

### Next Steps

1. **Backend Integration** - Connect to real APIs and databases
2. **Authentication** - Add user login and registration
3. **State Management** - Implement Redux/Zustand for complex state
4. **Testing** - Add unit and integration tests
5. **Performance** - Optimize with code splitting and lazy loading
6. **Analytics** - Integrate tracking and monitoring

---

## 📝 Development Notes

### Using Lovable Tagger

This project includes `lovable-tagger` for enhanced development experience:

```
// Automatically tags components in development mode
import { componentTagger } from "lovable-tagger";

plugins: [
  react(),
  mode === 'development' && componentTagger(),
].filter(Boolean)
```

### Customization Tips

- **Styling** - Modify `tailwind.config.js` for theme customization
- **Components** - Add new shadcn/ui components with `npx shadcn-ui add [component]`
- **Routes** - Update `App.tsx` to add new pages
- **API Mock Data** - Located in `src/data/` directory

---

## 🌐 Deployment

This prototype is deployed on GitHub Pages. To deploy your own:

```
# Build the project
npm run build

# Deploy to GitHub Pages
# (Requires gh-pages package and proper configuration)
npm run deploy
```

---

## 📄 License

This project is a UI prototype for demonstration purposes.

---

## 🙏 Acknowledgments

- **Lovable.dev** - For enabling rapid UI prototyping with AI
- **shadcn/ui** - For the beautiful component library
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For utility-first styling approach

---

## 📧 Contact

**Developer:** Jagmohan Singh Malhi  
**GitHub:** [@jxlee007](https://github.com/jxlee007)  
**LinkedIn:** [Jagmohan Singh Malhi](https://www.linkedin.com/in/jagmohan-singh-malhi-a67805243/)

---

<div align="center">

**Built with ❤️ using [Lovable](https://lovable.dev)**

*Transform your ideas into interactive prototypes in minutes*

</div>
