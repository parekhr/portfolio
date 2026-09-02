import budgetTrackerDashboard from '../assets/projects/budget-tracker-dashboard.png'
import alturaMarketShop from '../assets/projects/altura-market-shop.png'

const projects = [
  {
    name: 'Altura Market',
    description:
      'A Pokémart-inspired, Pokémon-themed app to browse randomly generated Pokémon items, buy and sell those items, and catch limited-time sales, backed by a persistent PostgreSQL database. Keep track of your transactions.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    repoUrl: 'https://github.com/parekhr/altura-market',
    liveUrl: 'https://altura-market.vercel.app',
    image: alturaMarketShop,
  },
  {
    name: 'Budget Tracker',
    description:
      'A full-stack personal budgeting app. Track spending by category, set monthly budgets, and catch overspending early. Talks to a Django REST API.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Django REST Framework'],
    repoUrl: 'https://github.com/parekhr/budget-tracker-frontend',
    liveUrl: 'https://budget-tracker-frontend-kohl.vercel.app',
    image: budgetTrackerDashboard,
  },
]

export default projects
