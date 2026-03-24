import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import handDown from '../../assets/images/hand_down.png'
import handUp from '../../assets/images/hand_up.png'
import palmLeft from '../../assets/images/palm_left.png'
import palmRight from '../../assets/images/palm_right.png'
import cloud1 from '../../assets/images/cloud1.png'
import cloud2 from '../../assets/images/cloud2.png'
import cloud3 from '../../assets/images/cloud3.png'

const Hero = () => {
  const [shouldAnimateOut, setShouldAnimateOut] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(handUp)
  const [isPopping, setIsPopping] = useState(false)
  const [clouds, setClouds] = useState([])

  const cloudImages = [cloud1, cloud2, cloud3] // Add all your cloud images here

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.25
      setShouldAnimateOut(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Penguin waving animation with motion blur
  useEffect(() => {
    const frames = [handDown, handUp]
    let frameIndex = 0

    const waveInterval = setInterval(() => {
      setIsPopping(true)
      
      setTimeout(() => {
        frameIndex = (frameIndex + 1) % 2
        setCurrentFrame(frames[frameIndex])
        setIsPopping(false)
      }, 120)
    }, 1200)

    return () => clearInterval(waveInterval)
  }, [])

useEffect(() => {
  // Generate initial clouds
  const initialClouds = Array.from({ length: 6 }, (_, i) => ({
    id: Date.now() + i,
    image: cloudImages[Math.floor(Math.random() * cloudImages.length)],
    top: Math.random() * 28 + 2, // 2% to 30% 
    left: Math.random() * 120, // Start scattered across screen
    size: Math.random() * 400 + 120, // 120px to 420px (BIGGER)
    speed: Math.random() * 60 + 60, // 60s to 120s animation (SLOWER)
    opacity: Math.random() * 0.4 + 0.4, // 0.4 to 0.8 opacity (slightly more visible)
  }))
  setClouds(initialClouds)

  // Spawn new clouds periodically
  const cloudSpawner = setInterval(() => {
    const newCloud = {
      id: Date.now(),
      image: cloudImages[Math.floor(Math.random() * cloudImages.length)],
      top: Math.random() * 28 + 2, // 2% to 30% 
      left: 110, // Start off-screen right
      size: Math.random() * 400 + 120, // 120px to 420px (BIGGER)
      speed: Math.random() * 60 + 60, // 60s to 120s (SLOWER)
      opacity: Math.random() * 0.4 + 0.4,
    }
    setClouds(prev => [...prev, newCloud])

    // Remove old clouds that have drifted off-screen
    setTimeout(() => {
      setClouds(prev => prev.filter(cloud => cloud.id !== newCloud.id))
    }, newCloud.speed * 1000)
  }, 15000) // Spawn a new cloud every 15 seconds

  return () => clearInterval(cloudSpawner)
}, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-clouds">
        {clouds.map((cloud) => (
          <div
            key={cloud.id}
            className="hero-cloud"
            style={{
              top: `${cloud.top}%`,
              left: `${cloud.left}%`,
              width: `${cloud.size}px`,
              opacity: cloud.opacity,
              animationDuration: `${cloud.speed}s`,
            }}
          >
            <img src={cloud.image} alt="" />
          </div>
        ))}
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1>rena's<br/>portfolio!</h1>
      </motion.div>

<motion.div
  animate={{
    x: shouldAnimateOut ? '120%' : '0%',
    rotate: shouldAnimateOut ? 20 : 0,
    opacity: shouldAnimateOut ? 0 : 1,
  }}
  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="palm-right"
  style={{
    animation: shouldAnimateOut ? 'none' : 'palmSwayRight 4.5s ease-in-out infinite'
  }}
>
  <img src={palmRight} alt="Palm tree" />
</motion.div>

<motion.div
  animate={{
    x: shouldAnimateOut ? '-120%' : '0%',
    rotate: shouldAnimateOut ? -20 : 0,
    opacity: shouldAnimateOut ? 0 : 1,
  }}
  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="palm-left"
  style={{
    animation: shouldAnimateOut ? 'none' : 'palmSwayLeft 4s ease-in-out infinite'
  }}
>
  <img src={palmLeft} alt="Palm tree" />
</motion.div>

      <motion.div
        animate={{
          y: shouldAnimateOut ? '150%' : '0%',
          opacity: shouldAnimateOut ? 0 : 1,
        }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="penguin-hero"
      >
        <img 
          src={currentFrame} 
          alt="Waving penguin" 
          className="penguin-wave-img"
          style={{
            transform: isPopping ? 'scale(1.02)' : 'scale(1)',
            filter: isPopping ? 'blur(0.5px)' : 'blur(0)',
            transition: 'transform 0.18s ease, filter 0.18s ease'
          }}
        />
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ opacity: shouldAnimateOut ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        jump in!
        <div style={{ marginTop: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 7L10 13L16 7" stroke="#1a2744" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero