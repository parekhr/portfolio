import profilePhoto from '../assets/profile-photo.jpg'
import { DownloadIcon } from './icons'

function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="flex flex-col-reverse items-center gap-14 md:flex-row md:gap-20">
        <div className="min-w-0 flex-1">
          <h1 className="mb-6 font-serif text-4xl leading-[1.08] font-medium text-balance md:text-5xl">
            Ryan Parekh
          </h1>

          <p className="max-w-[520px] text-lg leading-relaxed text-muted">
            Hello! I am a video game nerd from Quincy, Massachusetts.
            I am an aspiring software engineer looking to start working in the software industry. 
            I have always loved thinking about 'why' technology works and 'how' I would go about creating technology to solve problems at home.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="mailto:ryan.parekh101@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Email Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-border px-6 py-3.5 text-[15px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Projects
            </a>
            <a
              href="/resume.pdf"
              download="Ryan-Parekh-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-border px-6 py-3.5 text-[15px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
              <DownloadIcon className="h-4 w-4" />
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
            <img
              src={profilePhoto}
              alt="Ryan Parekh"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
