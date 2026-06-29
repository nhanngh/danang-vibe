@AGENTS.md

# Project Structure

```
my-danang-project/
├── public/                 # Static assets served directly (not processed by Webpack/Turbopack)
│   ├── images/             # Static images: cau-rong.jpg, mi-quang.png, logo.svg...
│   └── fonts/              # Custom web fonts (if any)
│
├── src/                    # Root directory for all source code
│   ├── app/                # Routing and page definitions (Next.js App Router)
│   │   ├── destinations/   # Route: /destinations (Landmarks & attractions)
│   │   │   └── page.tsx
│   │   ├── food/           # Route: /food (Da Nang cuisine)
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # Root layout (shared Navbar & Footer for all pages)
│   │   ├── page.tsx        # Homepage (/)
│   │   └── globals.css     # Global stylesheet (Tailwind setup)
│   │
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components: Navbar.tsx, Footer.tsx
│   │   ├── sections/       # Page sections: HeroSection.tsx, FeaturedPlaces.tsx
│   │   └── ui/             # Small reusable primitives: Button.tsx, Card.tsx
│   │
│   ├── constants/          # Static mock data (also referred to as 'data/')
│   │   └── danangData.ts   # Arrays of bridges, foods, ticket prices, etc.
│   │
│   ├── lib/                # Shared utility functions (also referred to as 'utils/')
│   │   └── formatUtils.ts  # Currency (VND) and date formatters
│   │
│   ├── store/              # Zustand global state stores
│   │   └── useExampleStore.ts  # Example: useFilterStore, useCartStore, etc.
│   │
│   └── types/              # TypeScript type definitions
│       └── index.ts        # Interfaces: Place, FoodItem, etc.
│
├── .env.local              # Environment variables (API keys, secrets — never commit)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration (custom colors, fonts)
├── package.json            # Dependency manifest
└── tsconfig.json           # TypeScript configuration
```

## State Management

This project uses [Zustand](https://zustand-demo.pmnd.rs/) for global client-side state.

- All stores live in `src/store/`, one file per domain (e.g. `useFilterStore.ts`, `useCartStore.ts`)
- Name each file after the hook it exports: `useXStore.ts`
- Keep stores small and focused — one concern per store
- Prefer local `useState` for UI-only state; only promote to Zustand when state needs to be shared across components

## Design System

All design tokens are defined in `src/app/globals.css`. Never use arbitrary Tailwind values — only use tokens from the system below.

### Typography

- **Body font**: Inter → `font-sans` class (default on `<body>`)
- **Heading font**: Playfair Display → `font-heading` class
- **Type scale** — only these sizes:

| Class       | Size  |
|-------------|-------|
| `text-xs`   | 12px  |
| `text-sm`   | 14px  |
| `text-base` | 16px  |
| `text-lg`   | 20px  |
| `text-xl`   | 24px  |
| `text-2xl`  | 32px  |
| `text-3xl`  | 48px  |

- **Line height**: `leading-normal` (1.5) for body text, `leading-tight` (1.2) for headings
- **Font weight**: `font-normal` (400) · `font-medium` (500) · `font-semibold` (600) · `font-bold` (700)

### Spacing

- Base unit: **4px** — Tailwind's default scale (`p-1 = 4px, p-2 = 8px, p-4 = 16px, p-8 = 32px`)
- All padding, margin, and gap must be multiples of 4px — no arbitrary values like `p-[13px]`
- Common steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px → `p-1` through `p-16`

### Responsive Design (mobile-first)

Travel sites are heavily mobile — design for mobile first, then scale up with breakpoint prefixes.

| Prefix | Breakpoint | Target         |
|--------|------------|----------------|
| (base) | 0px        | Mobile         |
| `sm:`  | 640px      | Large mobile   |
| `md:`  | 768px      | Tablet         |
| `lg:`  | 1024px     | Desktop        |
| `xl:`  | 1280px     | Large desktop  |

- Page container pattern: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Never target mobile with `max-md:` overrides — write mobile styles first
