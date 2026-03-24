import { useState, useEffect } from 'react'
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        <img src="/penguin_favicon.png" alt="Penguin" className="nav-logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#design">design</a></li>
        <li><a href="#videos">videos</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation