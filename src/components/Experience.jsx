import experience from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="scroll-mt-8 pb-16 md:pb-20">
      <h2 className="mb-10 font-serif text-3xl font-medium">Experience</h2>

      <div className="flex flex-col">
        {experience.map(({ title, company, dates, description }) => (
          <div
            key={`${title}-${company}`}
            className="border-t border-border py-4 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="font-medium">
                {title} <span className="text-muted">- {company}</span>
              </p>
              <p className="text-sm text-muted">{dates}</p>
            </div>
            <p className="mt-1.5 max-w-[620px] text-sm leading-relaxed text-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
