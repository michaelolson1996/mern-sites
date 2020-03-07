import { Fragment } from 'react';

const SectionTwo = () => {
  return (
    <Fragment>
      <div className="section-two-wrap">
        <div className="card">
          <h2>Security</h2>
          <i className="fas fa-user-shield"></i>
          <ul>
            <li>End-to-End Encryption</li>
            <li>Protected Networks</li>
            <li>Cloud Security</li>
          </ul>
        </div>
        <div className="card">
          <h2>Speed</h2>
          <i className="fas fa-shipping-fast"></i>
          <ul>
            <li>Containerized System</li>
            <li>Minimal Downtime</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div className="card">
          <h2>Ease of Use</h2>
          <i className="fas fa-book-reader"></i>
          <ul>
            <li>Documentation</li>
            <li>User Interface</li>
            <li>Scalable</li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`

          .section-two-wrap {
            margin-top:100px;
            height: 220vh;
            width:100vw;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            font-family: Comfortaa;
          }

          .card {
            height:380px;
            width:300px;
            letter-spacing:1px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
          }

          h2 {
            color: white;
            font-size:1.8em;
          }

          i {
            color:#00FFFF;
            font-size:8em;
            // color:white;
          }

          ul {
            margin:0;
            padding:0;
          }

          li {
            list-style: none;
            text-align:center;
            margin:4px;
            color: white;
          }
        
        `}
      </style>
    </Fragment>
  )
}

export default SectionTwo;