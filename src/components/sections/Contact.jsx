import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import linkedinBird from '../../assets/images/linkedin_bird.png'
import githubBird from  '../../assets/images/github_bird.png'
 
const StarBackground = () => {
  const canvasRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        setVisible(rect.top <= window.innerHeight)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))

    const shootingStars = []

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * window.innerWidth * 0.7,
        y: Math.random() * window.innerHeight * 0.4,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 4,
        opacity: 1,
        angle: Math.PI / 5,
      })
    }

    let lastSpawn = Date.now()
    let nextSpawnDelay = Math.random() * 3000 + 3000

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.opacity += star.speed * star.direction
        if (star.opacity >= 1 || star.opacity <= 0.1) star.direction *= -1

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      const now = Date.now()
      if (now - lastSpawn > nextSpawnDelay) {
        spawnShootingStar()
        lastSpawn = now
        nextSpawnDelay = Math.random() * 3000 + 3000
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i]
        const tailX = s.x - Math.cos(s.angle) * s.length
        const tailY = s.y - Math.sin(s.angle) * s.length

        const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y)
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()

        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.opacity -= 0.015

        if (s.opacity <= 0) shootingStars.splice(i, 1)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -2,
      }}
    />
  )
}
 
const Contact = () => {
  return (
    <section className="section" id="contact">
      <StarBackground />
      <motion.div
        className="contact-area"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1>let's stay in touch!</h1>
 
        <div className="contact-penguins">
          <motion.a
            className="contact-penguin"
            href='https://www.linkedin.com/in/rena-bernardino-6847a5298/'
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={linkedinBird} alt="linkedin" width="120" height="160" style={{ objectFit: 'contain' }} />
            <span className="contact-label">linkedin</span>
          </motion.a>
 
          <motion.a
            className="contact-penguin"
            href="https://github.com/r9naa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={githubBird} alt="github" width="120" height="160" style={{ objectFit: 'contain' }} />
            <span className="contact-label">github</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
 
export default Contact