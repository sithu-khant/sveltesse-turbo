# sveltesse-turbo

## Stack Overview

### 🌐 Web (Frontend)

- SvelteKit — fast, modern, and flexible
- Hono RPC — end-to-end type safety from API
- Tailwind CSS — styling
- shadcn-svelte — accessible UI components
- Lucide — icons

features:

- ✅ SEO-ready
- ✅ error handling
- ✅ Strict TypeScript enforcement
- ✅ Environment-based config
- ✅ Cloudflare Workers ready

### ⚡ API (Backend)

- Hono — lightweight, fast, edge-ready
- OpenAPI — standardized API schema
- Scalar — beautiful API docs
- Stoker — utilities for Hono + Zod OpenAPI

you get:

- 🔐 Type-safe routes
- 📄 Auto-generated API docs
- 🔄 Shared types with frontend
- ⚡ Edge-compatible by default

### 🛠️ Monorepo & Tooling

- Turborepo — fast monorepo builds
- 📦 Shared packages (e.g. API types)
- 🔐 Shared TypeScript config
- 🧹 ESLint pre-configured
- 📁 Clean folder structure for scaling

## 📁 Project Structure (Simplified)

```md
apps/
  web/                   → SvelteKit frontend
  api/                   → Hono backend

packages/
  api-type/              → shared api type between web & api
  eslint-config/         → shared linting config
  typescript-config/     → shared typescript config

```

---

**🙏 Credits**

- Inspired by [Anthony Fu'vitesse-nuxt](https://github.com/antfu/vitesse-nuxt)
