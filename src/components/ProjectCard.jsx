import { ArrowRightIcon } from './icons'

function ProjectCard({ project, variant = 0 }) {
  const { name, description, tags, repoUrl } = project

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border-[1.5px] border-border bg-surface text-text transition-all duration-200 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_20px_40px_-20px_rgba(60,40,20,0.35)]"
    >
      <div className="relative h-40 overflow-hidden">
        <svg
          viewBox="0 0 400 160"
          width="100%"
          height="160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="400"
            height="160"
            fill="color-mix(in oklch, var(--color-accent) 16%, var(--color-bg))"
          />
          {variant % 2 === 0 ? (
            <>
              <circle
                cx="70"
                cy="120"
                r="90"
                fill="color-mix(in oklch, var(--color-accent) 35%, var(--color-bg))"
              />
              <circle
                cx="340"
                cy="20"
                r="70"
                fill="color-mix(in oklch, var(--color-accent) 55%, var(--color-bg))"
                opacity="0.6"
              />
            </>
          ) : (
            <>
              <rect
                x="230"
                y="-20"
                width="230"
                height="230"
                fill="color-mix(in oklch, var(--color-accent) 40%, var(--color-bg))"
                transform="rotate(18 340 90)"
              />
              <circle
                cx="90"
                cy="30"
                r="50"
                fill="color-mix(in oklch, var(--color-accent) 55%, var(--color-bg))"
                opacity="0.6"
              />
            </>
          )}
          <path
            d="M0,110 C90,60 140,150 230,90 C300,45 340,95 400,70 L400,160 L0,160 Z"
            fill="color-mix(in oklch, var(--color-accent) 70%, black)"
            opacity="0.14"
          />
        </svg>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-xl font-medium">{name}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-xs font-medium text-accent-dark"
              style={{
                backgroundColor:
                  'color-mix(in oklch, var(--color-accent) 14%, var(--color-bg))',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-1.5 pt-3.5 text-[13.5px] font-medium">
          View on GitHub
          <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
