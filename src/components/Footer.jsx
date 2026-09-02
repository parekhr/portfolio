import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import socialLinks from '../data/socialLinks'

const iconByLabel = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
}

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-8 border-t-[1.5px] border-border bg-[oklch(93%_0.022_75)]"
    >
      <div className="mx-auto max-w-[1080px] px-8 py-8 md:py-10">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-1.5">
            
            <p className="text-[13px] text-muted">
              © 2026 Ryan Parekh
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
              href="mailto:ryan.parekh101@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-border text-text transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <MailIcon />
            </a>
            <a
              href="/resume.pdf"
              download="Ryan-Parekh-Resume.pdf"
              aria-label="Download resume"
              className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-border text-text transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
