import skillGroups from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 pb-16 md:pb-20">
      <h2 className="mb-10 font-serif text-3xl font-medium">Skills</h2>

      <div className="flex flex-col gap-8">
        {skillGroups.map(({ category, color, items }) => (
          <div key={category}>
            <h3 className="mb-3 text-[13px] font-semibold tracking-[0.1em] text-muted uppercase">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                  style={{
                    backgroundColor: `color-mix(in oklch, ${color} 46%, var(--color-bg))`,
                    color: `color-mix(in oklch, ${color} 50%, black)`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
