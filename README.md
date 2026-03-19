# Sports Leagues Explorer

A modern, responsive React application for browsing and searching sports leagues from around the world. Built with React, TypeScript, and Vite, this application provides a clean and intuitive interface for exploring various sports leagues with real-time search and filtering capabilities.

## ✨ Features

- 🔍 **Real-time Search**: Instant search functionality with debounced input for optimal performance
- 🏀 **Sport Filtering**: Filter leagues by sport type using an intuitive dropdown
- 📱 **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast hot module replacement and optimized builds
- 🎨 **Modern UI**: Clean and modern interface with Tailwind CSS styling
- 🔄 **Lazy Loading**: Optimized component loading for better performance
- 💾 **Custom Hooks**: Reusable hooks for data fetching, filtering, and debouncing
- 🛡️ **TypeScript Support**: Type-safe development with TypeScript interfaces and types

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sport-leagues-explorer
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

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── api/              # API integration and data fetching
├── assets/           # Static assets (images, icons, etc.)
├── client/           # API client configuration
├── components/       # React components
│   ├── Dropdown/     # Reusable dropdown component
│   ├── EmptyState/   # Empty state display
│   ├── ErrorState/   # Error handling UI
│   ├── Header/       # Application header
│   ├── LeagueCard/   # Individual league card display
│   ├── LeagueGrid/   # Grid layout for leagues
│   ├── LeaguesList/  # Main leagues list component
│   ├── LoadingSkeleton/  # Loading state skeleton
│   └── SearchBar/    # Search input component
├── hooks/            # Custom React hooks
│   ├── useDebounce.ts    # Debounce hook for search optimization
│   ├── useFetchData.ts   # Data fetching hook
│   └── useFilterData.ts  # Data filtering logic
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ESLint** - Code quality and consistency

## 🎯 Key Features Explained

### Search Functionality
The application provides a simple and responsive search experience, allowing users to quickly find leagues as they type.

### Sport Filtering
Users can filter leagues by sport type using a dropdown menu. The available sports are dynamically generated from the fetched data.

### Custom Hooks
- **useDebounce**: Delays the execution of a function until after a specified time has passed since the last call
- **useFetchData**: Manages API data fetching with loading and error states
- **useFilterData**: Handles the filtering logic for search and sport selection

### Responsive Design
The application uses Tailwind CSS to ensure a responsive layout that adapts to different screen sizes, providing an optimal viewing experience across all devices.

## 🤖 AI-Assisted Development

During development, Claude Sonnet was used as a supporting tool for:
- refining certain TypeScript types
- getting quick suggestions for UI improvements and structure

All core logic, architecture, and implementation decisions were designed and implemented manually.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Sports data provided by TheSportsDB API
- Icons by Lucide React
- Built with React and Vite

---

Made with ❤️ using React and TypeScript
