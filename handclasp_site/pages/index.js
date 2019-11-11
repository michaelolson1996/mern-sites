import { Component } from 'react';
import Router from 'next/router'

class Home extends Component {
    render() {
        return (
          <div className = "home-page-flex">
          <h3 className = "home-content-text">HandClasp is a non profit Christian organization dedicated to helping children living in rural Northern Thailand, aiding in the prevention of sex trafficking by providing shelter, education, and a future for the children.</h3>
          <div className = "background-container">
              <div className = "background background-push">
                  <div className = "home-content-container">
                      {/* <div className = "home-content"> */}
                      {/* </div> */}
                  </div>
              </div>
          </div>
          <div className = "home-section-2-container">
              <h2 className = "home-section-2-title">School of Promise Project</h2>
              <p className = "home-section-2-p">Handclasp is committed to giving a child a chance to develop their skills through your sponsorship donations by sending them to school.  Handclasp has a partnership with Hill Tribes Resources and Development Center that also trains children in Christian education.  Our partnership has allowed many students to advance to a higher education and has been successful in many students graduating from universities with a variety of degrees.  Handclasp thanks all of our sponsors that have helped accomplish these opportunities through prayer and support.
              </p>
              <div className = "button-link" to = '/projects'>
                  <svg className = "handclasp-button-svg">
                      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                  </svg>
                  Project Details
              </div>
          </div>
          <div className = "home-section-3-container">
              <div className = "home-section-3-image">
                  <div className = "home-section-3-content-container">
                      <div className = "home-section-3-content">
                          <p className = "home-section-3-quote">"We make a living by what we get, But we make a life by what we give."</p>
                      </div>
                      <div className = "home-section-3-icons-container">
                          <div onClick = { () => Router.push('/contact').then(() => window.scrollTo(0,0)) } className = "home-section-3-boxes home-box-1">
                              <i id = "icon-home-1" className = "fas fa-hand-holding-heart home-section-3-icons"></i>
                              <h3 className = "home-section-3-text" id = "home-section-3-text-1">Get Involved</h3>
                          </div>
                          <div onClick = { () => Router.push('/donate').then(() => window.scrollTo(0,0)) } className = "home-section-3-boxes home-box-1">
                              <i id = "icon-home-2" className = "fas fa-hand-holding-usd home-section-3-icons"></i>
                              <h3 className = "home-section-3-text" id = "home-section-3-text-2">Donate</h3>
                          </div>
                          <div onClick = { () => Router.push('/about').then(() => window.scrollTo(0,0)) } className = "home-section-3-boxes home-box-1">
                              <i id = "icon-home-3" className = "fas fa-church home-section-3-icons"></i>
                              <h3 className = "home-section-3-text" id = "home-section-3-text-3">Our Mission</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <div className = "white-line-break"></div> */}
          <div className = "home-section-4-container">
          <div className = "home-section-4-overlay"></div>
              <div className = "home-section-4-bg"></div>
          </div>
          {/* <div className = "white-line-break"></div> */}
          {/* <Footer /> */}
      </div>
        )
    }
}

export default Home