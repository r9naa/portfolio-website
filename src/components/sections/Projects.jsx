import { useState } from 'react'
import { motion } from 'framer-motion'
import sustainabearThumb from '../../assets/thumbnails/sustainabear_thumbnail.png'
import igTrackerThumb from '../../assets/thumbnails/instagram_unfollowers.png'
import sunspiritThumb from '../../assets/thumbnails/sunspirit_thumb.png'
import riverRescueThumb from '../../assets/thumbnails/river_rescue.png'
import sunspiritPdf from '../../assets/pdfs/SunSpirit-compressed.pdf'
import igDemo from '../../assets/videos/ig_unf_demo.mp4'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const projects = [
    {
      id: 0,
      title: 'Sustainabear',
      thumbnail: sustainabearThumb,
      gradient: 'linear-gradient(135deg, #b8e0a0, #7ab85a)',
      description: 'Currently working with a team to develop "Sustainabear," our CS 370 project which is a game focused on sustainability awareness and education.',
    },
    {
      id: 1,
      title: 'SunSpirit Pro',
      thumbnail: sunspiritThumb,
      pdf: sunspiritPdf,
      gradient: 'linear-gradient(135deg, #f7c5a0, #e89070)',
      description: 'Designed the slide deck and developed data visualization graphs in python for this hackathon project at hackATL.',
    },
    {
      id: 2,
      title: 'IG follower tracker',
      thumbnail: igTrackerThumb,
      video: igDemo,
      gradient: 'linear-gradient(135deg, #d4b8f0, #a87ec8)',
      description: 'built a full-stack instagram follower tracker with an HTML/CSS/JS frontend and Python backend.',
    },
  ]

  return (
    <section className="section" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        projects
      </motion.h2>

      <div className="projects-container">
        {selectedProject === null ? (
          <div id="projectsOverview" className="projects-overview">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-thumb"
                onClick={() => { setSelectedProject(project.id); setSlideIndex(0) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="project-thumb-img"
                  style={project.thumbnail
                    ? { backgroundImage: `url(${project.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { background: project.gradient }
                  }
                >
                  {!project.thumbnail && project.emoji}
                </div>
                <div className="project-thumb-info">
                  <h3>{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="project-detail active"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-detail-header">
              <h3>{projects[selectedProject].title}</h3>
              <button className="go-back-btn" onClick={() => setSelectedProject(null)}>
                ✕ back
              </button>
            </div>
            {projects[selectedProject].video ? (
              <div className="project-pdf-body">
                <video
                  src={projects[selectedProject].video}
                  className="project-pdf-frame"
                  controls
                  playsInline
                />
                <p className="project-pdf-desc">{projects[selectedProject].description}</p>
              </div>
            ) : projects[selectedProject].pdf ? (
              <div className="project-pdf-body">
                <iframe
                  src={projects[selectedProject].pdf}
                  className="project-pdf-frame"
                  title={projects[selectedProject].title}
                />
                <p className="project-pdf-desc">{projects[selectedProject].description}</p>
              </div>
            ) : (
              <div className="project-detail-body">
                <div className="project-carousel-img-wrap">
                  <div
                    className="project-detail-img"
                    style={selectedProject === 0
                      ? (slideIndex === 0
                          ? { backgroundImage: `url(${projects[0].thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                          : { backgroundImage: `url(${riverRescueThumb})`, backgroundSize: 'cover', backgroundPosition: 'center' })
                      : (projects[selectedProject].thumbnail
                          ? { backgroundImage: `url(${projects[selectedProject].thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                          : { background: projects[selectedProject].gradient })
                    }
                  >
                    {!(selectedProject === 0 || projects[selectedProject].thumbnail) && projects[selectedProject].emoji}
                  </div>
                  {selectedProject === 0 && (
                    <div className="carousel-arrows">
                      <button className="carousel-arrow-btn" onClick={() => setSlideIndex(0)} disabled={slideIndex === 0}>‹</button>
                      <button className="carousel-arrow-btn" onClick={() => setSlideIndex(1)} disabled={slideIndex === 1}>›</button>
                    </div>
                  )}
                </div>
                <div className="project-detail-text">
                  {selectedProject === 0 && slideIndex === 1 ? (
                    <>
                      <p>Worked with team member to design and develop level, "River Rescue" in HTML/CSS/JS. </p>
                      <a
                        href="https://mini-game-testing-rivergame.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="carousel-link-btn"
                      >
                        play river rescue demo!
                      </a>
                    </>
                  ) : (
                    <p>{projects[selectedProject].description}</p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects