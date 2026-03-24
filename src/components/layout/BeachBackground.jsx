import { useEffect, useState } from 'react'

const BeachBackground = () => {
  const [stars, setStars] = useState([])
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Generate stars once
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setStars(generatedStars)

    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      setScrollProgress(window.scrollY / totalHeight)
    }

    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth fade between layers
  const getSkyOpacity = (start, peak, end) => {
    if (scrollProgress < start || scrollProgress > end) return 0
    if (scrollProgress >= start && scrollProgress < peak) {
      // Fade in
      return (scrollProgress - start) / (peak - start)
    } else {
      // Fade out
      return (end - scrollProgress) / (end - peak)
    }
  }

  return (
    <div className="beach-bg">
      {/* Base blue sky - fades out as you scroll */}
      <div 
        className="sky-layer sky-default" 
        style={{ opacity: scrollProgress < 0.1 ? 1 : Math.max(0, 1 - ((scrollProgress - 0.1) / 0.15)) }} 
      />
      
      {/* Sunset 1 - orange */}
      <div 
        className="sky-layer sky-sunset1" 
        style={{ opacity: getSkyOpacity(0.15, 0.3, 0.45) }} 
      />
      
      {/* Sunset 2 - pink */}
      <div 
        className="sky-layer sky-sunset2" 
        style={{ opacity: getSkyOpacity(0.35, 0.5, 0.65) }} 
      />
      
      {/* Sunset 3 - purple */}
      <div 
        className="sky-layer sky-sunset3" 
        style={{ opacity: getSkyOpacity(0.55, 0.7, 0.85) }} 
      />
      
      {/* Night - dark blue, fades in at the end */}
      <div 
        className="sky-layer sky-night" 
        style={{ opacity: scrollProgress > 0.75 ? Math.min((scrollProgress - 0.75) / 0.15, 1) : 0 }} 
      />

      <div className="stars" style={{ opacity: scrollProgress > 0.7 ? Math.min((scrollProgress - 0.7) / 0.2, 1) : 0 }}>
        {stars.map((star) => (
          <div key={star.id} className="star" style={{ 
            left: `${star.left}%`, 
            top: `${star.top}%`, 
            width: `${star.size}px`, 
            height: `${star.size}px`,
            animationDelay: `${star.delay}s` 
          }} />
        ))}
      </div>

      <div className="ocean-container">
        <svg className="wave wave-back" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,80 C320,130 420,40 720,80 C1020,120 1200,50 1440,90 L1440,200 L0,200 Z"/>
        </svg>
        <svg className="wave wave-mid" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,100 C280,60 480,140 720,100 C960,60 1160,130 1440,80 L1440,200 L0,200 Z"/>
        </svg>
        <svg className="wave wave-front" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,90 C360,140 540,50 720,100 C900,150 1100,60 1440,100 L1440,200 L0,200 Z"/>
        </svg>
      </div>

      <svg className="foam" viewBox="0 0 2880 40" preserveAspectRatio="none">
        <path d="M0,20 Q60,5 120,20 Q180,35 240,20 Q300,5 360,20 Q420,35 480,20 Q540,5 600,20 Q660,35 720,20 Q780,5 840,20 Q900,35 960,20 Q1020,5 1080,20 Q1140,35 1200,20 Q1260,5 1320,20 Q1380,35 1440,20 Q1500,5 1560,20 Q1620,35 1680,20 Q1740,5 1800,20 Q1860,35 1920,20 Q1980,5 2040,20 Q2100,35 2160,20 Q2220,5 2280,20 Q2340,35 2400,20 Q2460,5 2520,20 Q2580,35 2640,20 Q2700,5 2760,20 Q2820,35 2880,20" 
          fill="none" 
          stroke="rgba(255,255,255,0.6)" 
          strokeWidth="3"
        />
      </svg>

      <div className="sand-area">
        <div className="sand-texture" />
      </div>

    
    </div>
  )
}

export default BeachBackground