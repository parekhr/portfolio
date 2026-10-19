import budgetTrackerDashboard from '../assets/projects/budget-tracker-dashboard.png'
import alturaMarketShop from '../assets/projects/altura-market-shop.png'

const projects = [
  {
    name: 'Altura Market',
    description:
      'A Poké Mart-inspired shop with dynamic pricing, limited-time sales, a shopping cart, and a checkout flow powered by Next.js server actions. Pulls its catalog from the PokéAPI and stores sessions and transaction history in PostgreSQL via Prisma.',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    repoUrl: 'https://github.com/parekhr/altura-market',
    liveUrl: 'https://altura-market.vercel.app',
    image: alturaMarketShop,
  },
  {
    name: 'Budget Tracker',
    description:
      'A full-stack budgeting app with JWT-authenticated accounts and full CRUD for transactions, categories, and budgets. A Django REST API handles all financial aggregation server-side, feeding a dark-themed Recharts dashboard. Automated API tests cover validation and per-user data isolation.',
    tags: ['React', 'TypeScript', 'Django REST Framework', 'PostgreSQL', 'Recharts'],
    repoUrl: 'https://github.com/parekhr/budget-tracker-frontend',
    liveUrl: 'https://budget-tracker-frontend-kohl.vercel.app',
    image: budgetTrackerDashboard,
  },
  {
    name: 'Family Dashboard',
    description:
      'A family dashboard tablet with a monthly calendar (event CRUD and holiday markers), a home-maintenance log, and a weather panel with National Weather Service forecasts and severe-weather alerts. Backed by Supabase PostgreSQL with sign-in and row-level security isolating each household’s data.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  },
]

export default projects
