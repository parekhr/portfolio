import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 pb-24">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-serif text-3xl font-medium">Projects</h2>
        <p className="text-sm text-muted">
          Selected work - more added over time
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} variant={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
