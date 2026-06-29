This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Cấu trúc dự án

```
my-danang-project/
├── public/                 # Chứa tài nguyên tĩnh (không qua Webpack/Turbopack)
│   ├── images/             # Ảnh tĩnh: cau-rong.jpg, mi-quang.png, logo.svg...
│   └── fonts/              # Font chữ custom (nếu có)
│
├── src/                    # Thư mục gốc chứa toàn bộ source code
│   ├── app/                # Nơi định nghĩa Routing và các Trang (Pages)
│   │   ├── destinations/   # Route: /destinations (Danh lam thắng cảnh)
│   │   │   └── page.tsx
│   │   ├── food/           # Route: /food (Ẩm thực Đà Nẵng)
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # Layout gốc (Chứa Navbar, Footer dùng chung cho mọi trang)
│   │   ├── page.tsx        # Trang chủ (Homepage)
│   │   └── globals.css     # File CSS toàn cục (chứa setup Tailwind)
│   │
│   ├── components/         # Các mảnh ghép giao diện (UI components)
│   │   ├── layout/         # Component bố cục: Navbar.tsx, Footer.tsx
│   │   ├── sections/       # Các khối nội dung lớn: HeroSection.tsx, FeaturedPlaces.tsx
│   │   └── ui/             # Component nhỏ, tái sử dụng: Button.tsx, Card.tsx
│   │
│   ├── constants/          # (Hoặc thư mục 'data/') Chứa dữ liệu tĩnh dạng mock data
│   │   └── danangData.ts   # VD: Array chứa danh sách các cây cầu, món ăn, giá vé...
│   │
│   ├── lib/                # (Hoặc thư mục 'utils/') Các hàm tiện ích dùng chung
│   │   └── formatUtils.ts  # VD: Hàm format tiền tệ (VNĐ), format ngày tháng
│   │
│   └── types/              # Định nghĩa kiểu dữ liệu (Rất quan trọng nếu dùng TypeScript)
│       └── index.ts        # VD: interface Place, interface FoodType
│
├── .env.local              # File chứa các biến môi trường (API keys, secret...)
├── next.config.ts          # File cấu hình của Next.js
├── tailwind.config.ts      # File cấu hình Tailwind CSS (màu sắc, font chữ riêng)
├── package.json            # Quản lý thư viện
└── tsconfig.json           # Cấu hình TypeScript
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

Dự án dùng `@/` làm alias cho thư mục `src/`:

```ts
import { Place } from "@/types";
import Navbar from "@/components/layout/Navbar";
```

## Learn More

To learn more about Next.js, take a look the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
