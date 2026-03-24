import { motion } from 'framer-motion'
import econSAB from '../../assets/thumbnails/Econ_SAB.jpg'
import essNight from '../../assets/thumbnails/ESS_Night.jpeg'
import philFinancial from '../../assets/thumbnails/Phil_Financial_Thumbnail.jpg'

const Videos = () => {
  const videos = [
    {
      thumbnail: econSAB,
      igLink: 'https://www.instagram.com/p/DRK49b7EbUu/',
      gradient: 'linear-gradient(180deg, rgba(184,223,240,0.3), rgba(74,155,190,0.2))',
      bubbles: [
        { size: 20, top: '10%', left: '15%', delay: 0 },
        { size: 14, top: '70%', right: '10%', delay: 1 },
      ],
      delay: 0.1,
    },
    {
      thumbnail: essNight,
      igLink: 'https://www.instagram.com/p/DV_phvaEQX-/',
      gradient: 'linear-gradient(180deg, rgba(240,200,160,0.3), rgba(200,160,120,0.2))',
      bubbles: [
        { size: 16, top: '20%', right: '20%', delay: 0.5 },
        { size: 22, bottom: '15%', left: '12%', delay: 1.5 },
      ],
      delay: 0.3,
    },
    {
      thumbnail: philFinancial,
      igLink: 'https://www.instagram.com/p/DUlg-vZkdGl/',
      gradient: 'linear-gradient(180deg, rgba(200,180,240,0.3), rgba(160,140,200,0.2))',
      bubbles: [
        { size: 18, bottom: '20%', right: '15%', delay: 0.8 },
        { size: 12, top: '15%', left: '20%', delay: 2 },
      ],
      delay: 0.5,
    },
  ]

  return (
    <section className="section" id="videos">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        videos
      </motion.h2>

      <div className="videos-grid">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.igLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <motion.div
              className="video-card"
              style={{
                background: video.gradient,
                backgroundImage: `url(${video.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: video.delay }}
              whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(0,0,0,0.12)', transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            >
              {video.bubbles.map((bubble, bubbleIndex) => (
                <div
                  key={bubbleIndex}
                  className="bubble"
                  style={{
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    top: bubble.top,
                    bottom: bubble.bottom,
                    left: bubble.left,
                    right: bubble.right,
                    animationDelay: `${bubble.delay}s`,
                  }}
                />
              ))}
              <div className="video-play">
                <svg viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      <motion.p 
        style={{ 
          marginTop: '20px', 
          opacity: 0.6, 
          fontSize: '0.85rem', 
          fontWeight: 500, 
          textAlign: 'center' 
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        links take you directly to instagram.com
      </motion.p>
    </section>
  )
}

export default Videos