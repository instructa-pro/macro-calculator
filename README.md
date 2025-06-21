<div align="center">
  <h1>Macro Calculator</h1>
  <p><strong>A Macro Calculator app built as a background agent example for instructa.ai courses. It uses Tanstack Starter, React, shadcn/ui, and Tailwind CSS.</strong></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## ✨ Features

- **[TanStack Start](https://tanstack.com/start)** - Modern full-stack React framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Modern utility-first CSS framework
- **[TypeScript](https://typescriptlang.org/)** - Full type safety
- **[TanStack Router](https://tanstack.com/router)** - Type-safe file-based routing

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **pnpm** (recommended package manager)

### Download

```bash
# Clone the starter template (replace with your repo)
npx gitpick git@github.com:instructa-pro/macro-calculator.git my-app
cd my-app
```

> **Recommended:** This starter uses [gitpick](https://github.com/nrjdalal/gitpick) for easy cloning without `.git` directory, making it perfect for creating new projects from this template.

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm biome:check  # Check code formatting and linting
pnpm biome:fix:unsafe # Fix code issues (unsafe)
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── ui/             # shadcn/ui components
│   ├── landing/        # Components for the landing page
│   └── macro/          # Components for macro calculator
├── lib/                # Libraries and utilities
├── routes/             # File-based routing
│   ├── __root.tsx      # Root layout
│   └── (marketing)/    # Marketing pages route group
│       └── index.tsx   # Home page
└── styles/             # Global styles
```

## 🎯 Core Technologies

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **TanStack Start** | Full-stack framework | [Docs](https://tanstack.com/start) |
| **shadcn/ui** | Component library | [Docs](https://ui.shadcn.com/) |
| **Tailwind CSS v4** | Styling framework | [Docs](https://tailwindcss.com/) |
| **TypeScript** | Type safety | [Docs](https://typescriptlang.org/) |

## 🔧 Configuration

### Adding shadcn/ui Components
```bash
# Add new components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Tailwind CSS
- Uses Tailwind CSS v4 with modern CSS-first configuration
- Configured in `app.config.ts`
- Global styles in `src/styles/`

### TypeScript
- **Path aliases**: `~` resolves to the `src/` directory
- **Route files**: Must use `.tsx` extension

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using modern React tools</p>
</div>


