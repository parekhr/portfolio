function Hero() {
  return (
    <section className="py-24 md:py-28">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
        <div className="min-w-0 flex-1">
          <p className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-accent uppercase">
            Software Engineer
          </p>

          <h1 className="mb-5 font-serif text-4xl leading-[1.08] font-medium text-balance md:text-5xl">
            [Your Name]
          </h1>

          <p className="mb-9 max-w-[480px] text-lg leading-relaxed text-muted">
            A one or two sentence line about the kind of work you do and who
            you do it for — plainly stated, no jargon.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Say hello
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-border px-6 py-3.5 text-[15px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="relative h-[240px] w-[240px] flex-none">
          <div
            className="absolute -inset-[22px] rounded-full blur-[2px]"
            style={{
              background:
                'radial-gradient(circle at 32% 28%, color-mix(in oklch, var(--color-accent) 30%, transparent), transparent 70%)',
            }}
          />
          <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-border shadow-[0_24px_48px_-24px_rgba(60,40,20,0.4)]">
            <svg
              viewBox="0 0 240 240"
              width="240"
              height="240"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="avatarBg" x1="0" y1="0" x2="1" y2="1">
                  <stop
                    offset="0%"
                    stopColor="color-mix(in oklch, var(--color-accent) 55%, white)"
                  />
                  <stop
                    offset="100%"
                    stopColor="color-mix(in oklch, var(--color-accent) 85%, black)"
                  />
                </linearGradient>
              </defs>
              <rect width="240" height="240" fill="url(#avatarBg)" />
              <circle cx="60" cy="200" r="70" fill="white" opacity="0.08" />
              <circle cx="200" cy="30" r="46" fill="white" opacity="0.1" />
              <text
                x="120"
                y="132"
                textAnchor="middle"
                fontFamily="Newsreader, Georgia, serif"
                fontSize="64"
                fill="white"
                opacity="0.95"
              >
                YN
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
