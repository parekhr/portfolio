import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <div className="mx-auto max-w-[1080px] px-8">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
