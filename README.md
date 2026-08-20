# Interactive Employee Dashboard

A professional, production-quality React dashboard for managing and viewing employee data. This application retrieves real-time data from a REST API and provides an interactive interface with advanced filtering and detailed insights.

## 🚀 Features

- **Real-Time Search**: Instant, case-insensitive filtering by employee name.
- **Dynamic Metrics**: Live dashboard statistics for total employees, companies, and websites.
- **Detailed Insights**: Professional modal view for comprehensive employee profiles, including contact details and business information.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Skeleton Loading**: High-fidelity loading states for a smooth perceived performance.
- **Error Handling**: Graceful error recovery with a dedicated retry mechanism.
- **Animations**: Fluid transitions powered by `motion/react`.

## 🛠️ Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **API**: [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── DashboardStats   # Summary metrics cards
│   ├── EmptyState       # No results search view
│   ├── EmployeeCard     # Individual employee overview
│   ├── EmployeeModal    # Detailed profile view
│   ├── ErrorState       # API failure view
│   ├── LoadingSkeleton  # Pulse loading states
│   ├── Navbar           # Application header
│   └── SearchBar        # Real-time search input
├── services/            # API integration logic
│   └── api.ts           # Fetch handling
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main dashboard orchestration
└── main.tsx             # Application entry point
```

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd employee-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

## 🌐 Deployment

The project is ready for deployment to **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.

## 🔮 Future Improvements

- [ ] Implementation of a dark mode toggle.
- [ ] Sorting functionality (alphabetical/ID).
- [ ] Company filter dropdown.
- [ ] Multi-select for bulk actions.
- [ ] Integration with a persistent backend (e.g., Firebase).

---
© 2026 Master Dev Studios. Built with Passion.
