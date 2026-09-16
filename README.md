# VASUNITI — Enterprise Software Platform

> **Software Built for the Way the World Works.**  
> VasuNiti is a next-generation software product company engineering intelligent, scalable enterprise platforms that simplify complexity, automate operations, and scale with absolute reliability.

---

## 🚀 Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS (custom dark/light design system tokens)
- **3D Experiences**: Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Animations & Physics**: Framer Motion (`framer-motion`)
- **UI Components**: Aceternity UI-inspired Spotlight, Background Beams, Bento Grid, Card Hover Effects, Infinite Moving Cards, Lamp Effect
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **Celebrations & Feedback**: Canvas Confetti

### Backend
- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM (includes an automatic in-memory fallback mode for offline/standalone zero-friction development)
- **Middleware**: CORS, Morgan HTTP logger, JSON body parser
- **Security**: Strict input sanitation and environment variables

---

## 🌟 Key Features

1. **Light & Dark Theme Engine**: Complete bespoke theme system with smooth animated sun/moon toggle, localStorage persistence, and system preference detection.
2. **Interactive 3D Digital Core**: Abstract 3D geometric network with rotating rings, floating nodes, particle field, and mouse parallax cursor tracking in the hero section.
3. **Orbital Software Ecosystem**: Interactive radial visualization demonstrating interconnected product telemetry across Data, Automation, Cloud, AI, and CyberCore.
4. **Data-Driven Product Catalog**: Full product listing with category filters, live search, and comprehensive specification pages (`/products/:slug`).
5. **Interactive Product Cockpit Simulation**: Live simulated browser cockpit showing real-time event throughput, sub-15ms edge latency, and DORA metrics.
6. **Aceternity UI-Inspired Design**:
   - Dynamic SVG Spotlight
   - Canvas-rendered drifting Background Beams
   - Hover-highlight Bento Grids
   - Infinite moving tech stack and client testimonial tickers
   - Glowing Lamp container
7. **Production API & MongoDB Integration**: Validated `/api/contact` and `/api/products` endpoints with seed script and mock fallback.
8. **SEO & Accessibility**: Dynamic meta tags, semantic HTML5, Open Graph tags, robots.txt, and `prefers-reduced-motion` compliance.

---

## 📁 Directory Structure

```
vasuniti/
├── client/                      # React + Vite + TypeScript Frontend
│   ├── public/                  # Favicon & robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/              # HeroEcosystem3D Three.js scene
│   │   │   ├── aceternity/      # Spotlight, Beams, Bento, HoverCard, Lamp
│   │   │   ├── common/          # Navbar, Footer, ThemeToggle, Button, Badge
│   │   │   └── home/            # Hero, TrustMetrics, ProductShowcase, etc.
│   │   ├── context/             # ThemeContext (Dark/Light mode)
│   │   ├── data/                # Products, Solutions, Company, FAQs data
│   │   ├── pages/               # Home, Products, Detail, Solutions, About, Contact
│   │   ├── services/            # API client service layer
│   │   ├── types/               # TypeScript definitions
│   │   ├── App.tsx              # Application routing & layout
│   │   ├── index.css            # Tailwind directives & theme styles
│   │   └── main.tsx             # React entrypoint
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── server/                      # Node.js + Express Backend
│   ├── src/
│   │   ├── config/              # MongoDB connection & fallback
│   │   ├── controllers/         # Product & Contact controllers
│   │   ├── data/                # Catalog seed dataset
│   │   ├── models/              # Mongoose schemas (Product, Contact)
│   │   ├── routes/              # API routes (/api/products, /api/contact)
│   │   └── index.js             # Express app entrypoint
│   ├── .env.example
│   ├── .env
│   └── package.json
│
├── package.json                 # Monorepo root scripts
└── README.md
```

---

## 🛠️ Getting Started

### 1. Installation

From the project root:

```bash
# Install server dependencies
npm --prefix server install

# Install client dependencies
npm --prefix client install
```

### 2. Environment Variables

Create `.env` in `server/` (pre-configured default values provided):

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/vasuniti_db
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Seed Product Catalog (Optional for MongoDB)

```bash
npm run seed
```
*(Note: If MongoDB is not running locally, the server automatically operates in standalone mode with full API functionality!)*

### 4. Running the Development Servers

**Run Server (Port 5000):**
```bash
npm run server
```

**Run Client (Port 5173):**
```bash
npm run client
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API Endpoints

- `GET /api/health` — Check server and database connection status
- `GET /api/products` — Retrieve all active products (supports `?category=` and `?search=`)
- `GET /api/products/:slug` — Retrieve single product details by slug
- `POST /api/contact` — Submit an enterprise contact / demo request
- `GET /api/contact` — Retrieve contact submissions log

---

## 🛡️ License

Copyright © 2026 VasuNiti Technologies Inc. All rights reserved.
