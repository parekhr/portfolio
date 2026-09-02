# Ryan Parekh's Portfolio

My personal portfolio site, built to showcase who I am, my skills, and my projects.

**Live site:** [ryanparekh-portfolio.vercel.app](https://ryanparekh-portfolio.vercel.app/)

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Features

- Profile intro with a short bio
- Skills grouped by category (languages, frameworks, tools)
- Work experience timeline
- Project cards linking out to live demos and source code
- Resume download

## Getting Started

```bash
npm install
npm run dev
```

The site runs locally at `http://localhost:5173`.

## Project Structure

Content lives in `src/data/` (`projects.js`, `skills.js`, `experience.js`, `socialLinks.js`) so new projects, skills, or roles can be added without touching component code. Components live in `src/components/`.
