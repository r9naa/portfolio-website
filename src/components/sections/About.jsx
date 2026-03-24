import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import skillsIcon from '../../assets/icons/skills_bulb.png'
import whycsIcon from '../../assets/icons/computer_icon.png'
import resumeIcon from '../../assets/icons/resume_icon.png'
import headshot from '../../assets/images/rena_headshot.png'
import logoHTML from '../../assets/icons/HTML5_logo_and_wordmark.svg-2.png'
import logoCSS from '../../assets/icons/CSS-Logo-2011.png'
import logoJS from '../../assets/icons/JavaScript-Logo-2.png'
import logoPython from '../../assets/icons/Python-logo-notext.svg-2.png'
import logoReact from '../../assets/icons/React-icon.svg.png'
import logoProcreate from '../../assets/icons/Procreate_icon-2.png'
import logoCapCut from '../../assets/icons/capcut-logo-on-transparent-white-background-free-vector-2.jpg'
import logoPremiere from '../../assets/icons/Adobe_Premiere_Pro_CC_icon.svg-2.png'
import logoIllustrator from '../../assets/icons/Adobe_Illustrator_CC_icon.svg-2.png'
import logoCanva from '../../assets/icons/dfb96cc174513093cd6ed61489ccb750.svg'

const About = () => {
  const [activeTab, setActiveTab] = useState(null)

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId)
  }

  return (
    <section className="section" id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div 
        className="about-card"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
      duration: 0.7, 
      delay: 0.1,
      type: "spring",
      stiffness: 80,
    damping: 15
  }}
>
        <div className="about-header">
          <div className="pfp-circle">
            <img src={headshot} alt="rena" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="about-info">
            <h2>Rena Bernardino</h2>
            <p>I'm a Sophomore at Emory University studying Economics and Computer Science, interested in roles in tech, design, and marketing.</p>
          </div>
        </div>

        <div className="about-tabs">
          <motion.div
            className={`about-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => handleTabClick('skills')}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tab-icon">
              <img src={skillsIcon} alt="skills" style={{ 
                width: '8rem', 
                height: '8rem',
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))'
}} />
            </span>
            <span className="tab-label">skills</span>
          </motion.div>
          <motion.div
            className={`about-tab ${activeTab === 'whycs' ? 'active' : ''}`}
            onClick={() => handleTabClick('whycs')}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tab-icon">
              <img src={whycsIcon} alt="why cs" style={{
                width: '8rem', 
                height: '8rem',
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))' }} />
            </span>
            <span className="tab-label">why cs?</span>
          </motion.div>
          <motion.div
            className={`about-tab ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => handleTabClick('resume')}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="tab-icon">
              <img src={resumeIcon} alt="resume" style={{
                width: '8rem', 
                height: '8rem',
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))' }} />
            </span>
            <span className="tab-label">resume</span>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              className="tab-content active"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <button className="go-back-btn" onClick={() => setActiveTab(null)}>
                close
              </button>
              <div style={{ clear: 'both' }} />
              <h3 style={{ fontWeight: 700, marginBottom: '20px', fontSize: '1.2rem' }}>skills</h3>
              <div className="skills-grid">
                <img src={logoHTML} className="skill-logo" alt="" />
                <img src={logoCSS} className="skill-logo skill-logo-css" alt="" />
                <img src={logoJS} className="skill-logo skill-logo-lg" alt="" />
                <img src={logoPython} className="skill-logo" alt="" />
                <img src={logoReact} className="skill-logo" alt="" />
                <img src={logoCanva} className="skill-logo" alt="" />
                <img src={logoProcreate} className="skill-logo" alt="" />
                <img src={logoCapCut} className="skill-logo" alt="" />
                <img src={logoPremiere} className="skill-logo" alt="" />
                <img src={logoIllustrator} className="skill-logo" alt="" />
              </div>
            </motion.div>
          )}

          {activeTab === 'whycs' && (
            <motion.div
              key="whycs"
              className="tab-content active"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <button className="go-back-btn" onClick={() => setActiveTab(null)}>
                close
              </button>
              <div style={{ clear: 'both' }} />
              <h3 style={{ fontWeight: 700, marginBottom: '20px', fontSize: '1.2rem' }}>why cs?</h3>
              <div className="tab-text">
                <p>I took my first CS class (AP CSP) my junior year of high school and really 
                  enjoyed it! I made a password generator in Python, and although I struggled a lot, I
                  liked the process making it, pushing me to take AP CSA my senior year. However, the thing 
                  that really sealed my interest in CS was participating in my first hackathon, 
                  Emory Hacks in Spring 2025, which was my introduction to learning front-end 
                  development. Programming felt familiar to other modes of creation that I was 
                  more familiar with, like video editing and graphic design, and I love how 
                  programming gives me the ability to intertwine my passion with art.</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'resume' && (
            <motion.div
              key="resume"
              className="tab-content active"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <button className="go-back-btn" onClick={() => setActiveTab(null)}>
                close
              </button>
              <div style={{ clear: 'both' }} />
              <h3 style={{ fontWeight: 700, marginBottom: '20px', fontSize: '1.2rem' }}>resume</h3>
              <div className="resume-content">
                <iframe
                  src="/resume_updated_mar26.pdf"
                  width="100%"
                  height="600px"
                  style={{ borderRadius: '12px', border: 'none', marginBottom: '15px' }}
                />
                <a
                  href="/resume_updated_mar26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  download resume!
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default About