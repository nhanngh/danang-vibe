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
│   └── types/              # TypeScript type definitions
│       └── index.ts        # Interfaces: Place, FoodItem, etc.
│
├── .env.local              # Environment variables (API keys, secrets — never commit)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration (custom colors, fonts)
├── package.json            # Dependency manifest
└── tsconfig.json           # TypeScript configuration
```
