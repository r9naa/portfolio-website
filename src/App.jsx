
import BeachBackground from './components/layout/BeachBackground'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Design from './components/sections/Design'
import Videos from './components/sections/Videos'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import './styles/index.css'

function App() {
  return (
    <div className="app">
      <BeachBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Design />
        <Videos />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App