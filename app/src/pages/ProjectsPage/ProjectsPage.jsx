import React from 'react'
import './ProjectsPage.css'
import {assets, projects} from '../../assets/assets'
import {Link} from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <>
    <div className="projects">
      {/*-------------------------*/}
      <div className="projects-header">
        <div className="projects-header-left">
          <header>
            <h1>ALL PROJECTS</h1>
          </header>
        </div>
        <div className="projects-header-right">
          <Link to={'/beats'}> <button>SHOP NOW</button></Link>
        </div>
      </div>
      {/*-------------------------*/}
      <div className="projects-mid">
        {
          projects.map((project)=>(
            <div key={project._id} className="project">
              <div className="project-frame">
                <iframe
                    src={project.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; 
                                      autoplay;
                                      clipboard-write; 
                                      encrypted-media; 
                                      gyroscope; 
                                      picture-in-picture; 
                                      web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
              </div>
              <div className="project-title">
                <p>Track - {project.title}</p>
              </div>
              <div className="project-artist">
                <p>Artist - {project.artist}</p>
              </div>
            </div>
          ))
        }
      </div>
      {/*-------------------------*/}
      <div className="projects-bottom">
          <a href={assets.brochure} download="pricing.jpeg"> <button>Download Brochure</button> </a>
      </div>
    </div>
    </>
  )
}

export default ProjectsPage