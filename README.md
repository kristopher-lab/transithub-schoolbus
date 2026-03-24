# Cloudflare Workers React Starter Template

[![Deploy to Cloudflare]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/kristopher-lab/transithub-school-bus-transportation-portal))](https://deploy.workers.cloudflare.com)

A production-ready full-stack starter template powered by Cloudflare Workers, featuring a React frontend with shadcn/ui, TanStack Query, and a robust backend with Hono, Durable Objects for entities (Users, Chats), and indexed listing/pagination.

This template demonstrates a real-world chat application with CRUD operations for users and chat boards, including message persistence. It's optimized for edge deployment with TypeScript end-to-end type safety.

## 🚀 Features

- **Full-Stack TypeScript**: Shared types between frontend and Workers backend.
- **Durable Objects**: Per-entity storage (one DO per User/Chat) with automatic indexing for listing/pagination.
- **React 18 + Vite**: Fast HMR, optimized builds.
- **shadcn/ui**: Beautiful, customizable UI components with Tailwind CSS.
- **TanStack Query**: Data fetching, caching, mutations with optimistic updates.
- **Hono Router**: Lightweight, fast API routing with CORS support.
- **Cloudflare Observability**: Built-in logging and metrics.
- **Dark Mode**: Automatic system preference with persistence.
- **Error Boundaries**: Client-side error reporting to backend.
- **Mock Data Seeding**: Automatic population of sample users/chats/messages.
- **Responsive Design**: Mobile-friendly sidebar layout.

## 🛠 Tech Stack

| Frontend | Backend | Tools |
|----------|---------|-------|
| React 18 | Cloudflare Workers | Vite 6 |
| TypeScript 5.8 | Hono 4.x | Bun |
| shadcn/ui | Durable Objects | Tailwind CSS 3.4 |
| TanStack Query 5 | GlobalDurableObject | wrangler |
| React Router 6 | IndexedEntity pattern | Cloudflare Pages |

## ⚡ Quick Start

1. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd transithub-schoolbus-unnwksluujdfjihvkh0xu
   bun install
   ```

2. **Development**:
   ```bash
   bun run dev
   ```
   Opens at `http://localhost:3000` (frontend) with hot reload. Backend API at `/api/*`.

3. **Type Generation** (Workers):
   ```bash
   bun run cf-typegen
   ```

## 📋 Installation

This project uses **Bun** for faster installs and builds.

```bash
# Install dependencies
bun install

# Generate Worker types (one-time)
bun run cf-typegen
```

No additional setup required – mock data seeds automatically on first API call.

## 🔧 Development

### Run Locally
```bash
# Development server (frontend + Workers proxy)
bun run dev

# Preview production build
bun run preview
```

### Scripts
| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run lint` | Run ESLint |
| `bun run cf-typegen` | Generate Worker types |
| `bun run deploy` | Build + deploy to Cloudflare |

### Project Structure
```
├── src/              # React app
├── worker/           # Cloudflare Workers backend
├── shared/           # Shared types/mock data
├── tailwind.config.js # UI theming
└── wrangler.jsonc    # Workers config
```

### Key Files to Customize
- `src/pages/HomePage.tsx`: Replace with your app UI.
- `worker/user-routes.ts`: Add your API routes.
- `worker/entities.ts`: Extend `IndexedEntity` for new models.
- `src/components/layout/AppLayout.tsx`: Sidebar layout (optional).

## 🌐 API Endpoints

All endpoints under `/api/*`. Returns `{ success: boolean, data?: T, error?: string }`.

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users?cursor=&limit=` | Paginated list |
| `POST` | `/api/users` | Create `{ name: string }` |
| `DELETE` | `/api/users/:id` | Delete user |
| `POST` | `/api/users/deleteMany` | Bulk delete `{ ids: string[] }` |

### Chats
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/chats?cursor=&limit=` | Paginated list |
| `POST` | `/api/chats` | Create `{ title: string }` |
| `GET` | `/api/chats/:chatId/messages` | List messages |
| `POST` | `/api/chats/:chatId/messages` | Send `{ userId: string, text: string }` |
| `DELETE` | `/api/chats/:id` | Delete chat |
| `POST` | `/api/chats/deleteMany` | Bulk delete |

**API Client**: Use `src/lib/api-client.ts` for type-safe fetches.

```ts
import { api } from '@/lib/api-client';
const users = await api<User[]>('/api/users');
```

## ☁️ Deployment

1. **Connect to Cloudflare**:
   ```bash
   bun install -g wrangler
   wrangler login
   wrangler whoami
   ```

2. **Deploy**:
   ```bash
   bun run deploy
   ```
   Deploys Worker + static assets to Cloudflare Pages/Workers Sites.

3. **One-Click Deploy**:
   [![Deploy to Cloudflare]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/kristopher-lab/transithub-school-bus-transportation-portal))](https://deploy.workers.cloudflare.com)

### Production Config
- Edit `wrangler.jsonc` for custom domains/bindings.
- Set `wrangler.toml` for advanced Durable Object migrations.
- Assets served as SPA with Worker handling `/api/*`.

## 🤝 Contributing

1. Fork & clone.
2. Install: `bun install`.
3. Create feature branch: `git checkout -b feature/xyz`.
4. Commit: `git commit -m "feat: description"`.
5. Push & PR.

Lint with `bun run lint`. Follow TypeScript strict mode.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙌 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Hono](https://hono.dev/)

Built with ❤️ for Cloudflare Workers.