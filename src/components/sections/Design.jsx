import { motion } from 'framer-motion'

const images = import.meta.glob('../../assets/flyers/*.{jpg,png,jpeg}', { eager: true })
const imageList = Object.values(images).map(mod => mod.default)
const allImages = [...imageList, ...imageList]

const Design = () => {
  return (
    <section className="section" id="design">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        design
      </motion.h2>

      <motion.div
        className="carousel-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="carousel-track">
          {allImages.map((src, index) => (
            <motion.div
              key={index}
              className="design-card"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={src}
                alt={`design ${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block',
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Design