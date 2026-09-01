import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <div className="mx-auto max-w-[1080px] px-8">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
