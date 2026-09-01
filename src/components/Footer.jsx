import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import socialLinks from '../data/socialLinks'

const iconByLabel = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
}

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-8 border-t-[1.5px] border-border">
      <div className="mx-auto max-w-[1080px] px-8 py-10">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-1.5">
            <a
              href="mailto:you@example.com"
              className="text-[15px] font-medium transition-colors hover:text-accent"
            >
              you@example.com
            </a>
            <p className="text-[13px] text-muted">
              © 2026 [Your Name]. Built with React, Vite &amp; Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ label, href }) => {
              const Icon = iconByLabel[label]
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-border text-text transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon />
                </a>
              )
            })}
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-border text-text transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
