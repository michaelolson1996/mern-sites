import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        
      <div className = "portfolio-content-wrap">
      <div className = "fixed-background-picture"></div>
        <div className = "icon-container-main">
          <i class="fab fa-github-alt" onClick = {() => window.open("https://github.com/michaelolson1996", "_blank")}>
            <span className = "tooltips"><p>GitHub</p></span>
          </i>
          
          <i class="fab fa-linkedin" onClick = {() => window.open("https://linkedin.com/in/michael-olson-81b37715b", "_none")}>
            <span className = "tooltips"><p>Linkedin</p></span>
          </i>
            <i onClick = { () => window.open(require('./MichaelOlson_Resume.pdf'), '_blank')} class="fas fa-clipboard-list">
              <span className = "tooltips"><p>Resume</p></span>
            </i>
        </div>
        <div className = "stats-main-container">
          <div className = "stats-containers">
            <p className = "stats-titles">Axios</p>
            <div className = "axios-container-main main-containers">
              <div className = "stats-bars pct-60">
                <div className = "inner-bar">60%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">CSS</p>
            <div className = "css-container-main main-containers">
              <div className = "stats-bars pct-90">
                <div className = "inner-bar">90%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">Express</p>
            <div className = "express-container-main main-containers">
              <div className = "stats-bars pct-60">
                <div className = "inner-bar">60%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">Git</p>
            <div className = "git-container-main main-containers">
              <div className = "stats-bars pct-50">
                <div className = "inner-bar">50%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">Html</p>
            <div className = "html-container-main main-containers">
              <div className = "stats-bars pct-90">
                <div className = "inner-bar">90%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">JavaScript</p>
            <div className = "javascript-container-main main-containers">
              <div className = "stats-bars pct-85">
                <div className = "inner-bar">85%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">MongoDB</p>
            <div className = "mongo-container-main main-containers">
              <div className = "stats-bars pct-60">
                <div className = "inner-bar">60%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">Mongoose</p>
            <div className = "mongoose-container-main main-containers">
              <div className = "stats-bars pct-60">
                <div className = "inner-bar">60%</div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">Node.js</p>
            <div className = "node-container-main main-containers">
              <div className = "stats-bars pct-70">
                <div className = "inner-bar">70%</div>
              </div>
          </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">React</p>
            <div className = "react-container-main main-containers">
              <div className = "stats-bars pct-90">
                <div className = "inner-bar"><p>90%</p></div>
              </div>
            </div>
          </div>
          <div className = "stats-containers">
            <p className = "stats-titles">Redux</p>
            <div className = "redux-container-main main-containers">
              <div className = "stats-bars pct-85">
                <div className = "inner-bar">85%</div>
              </div>
            </div>
          </div>
        </div>

        <div className = "page1">
          <div className = "main-title-container">
            <h1 className = "main-title">Michael Olson</h1>
            <p className = "main-full-stack-title">Full Stack Web Developer</p>
          </div>
          <div className = "michael-image-container">
            <div className = "michael-image"></div>
          </div>
          <div className = "main-buttons-outer-container">
            <div className = "main-buttons-inner-container">
              <div className = "main-buttons-inner-container-column-1 main-columns">
                <Link to = "/projects" className = "links portfolio-link">My Projects</Link>
              </div>
              <div className = "main-buttons-inner-container-column-2 main-columns">
                <Link to = "/about" className = "links about-link" >About Me</Link>
              </div>
              <div className = "main-buttons-inner-container-column-3 main-columns">
                <Link to = "/contact" className = "links contact-link">Contact</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Home