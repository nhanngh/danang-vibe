This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Path Aliases

The `@/` alias maps to the `src/` directory:

```ts
import { Place } from "@/types";
import Navbar from "@/components/layout/Navbar";
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
