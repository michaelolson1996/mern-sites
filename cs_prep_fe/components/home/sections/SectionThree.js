import { Fragment } from 'react';

const SectionThree = () => {
  return (
    <Fragment>
        <div className="section-three-wrap">
          <div className="section-three-orbit-border">
            <div className="orbit-circle-container">
              <div className="orbit-circle-inner-container">
                <div className="gear-circle-1 circle"></div>
                <div className="gear-circle-2 circle"></div>
                <div className="gear-circle-3 circle"></div>
              </div>
              <div className="orbit-circle-inner-container">
                <div className="gear-circle-1 circle"></div>
                <div className="gear-circle-2 circle"></div>
                <div className="gear-circle-3 circle"></div>
              </div>
              <div className="orbit-circle-inner-container">
                <div className="gear-circle-1 circle"></div>
                <div className="gear-circle-2 circle"></div>
                <div className="gear-circle-3 circle"></div>
              </div>
              <div className="orbit-circle-inner-container">
                <div className="gear-circle-1 circle"></div>
                <div className="gear-circle-2 circle"></div>
                <div className="gear-circle-3 circle"></div>
              </div>
            </div>
          </div>
          <div className="text-container">
            <p>Set up your account today and build your project the way you want to. Implement CI/CD and store the environment to the cloud. Etnata is here to make setup as easy as possible.</p>
            <p>Sign Up</p>
          </div>
        </div>
        <style jsx>
          {`

            .section-three-wrap {
              height:100vh;
              width:100vw;
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
            }

            .section-three-orbit-border {
              height:276px;
              width:276px;
              background-color:rgb(191,0,254);
              display:flex;
              justify-content:center;
              align-items:center;
            }

            .orbit-circle-container {
              height:270px;
              width:270px;
              display:flex;
              flex-wrap:wrap;
            }

            .orbit-circle-inner-container {
              height:50%;
              width:50%;
              animation: rotateClockwise 4s infinite;
              background-color:rgb(0,0,0,0);
            }

            .gear-circle-1 {
              top:20px;
              left:60px;
            }

            .gear-circle-2 {
              top:70px;
              left:20px;
            }

            .gear-circle-3 {
              top:55px;
              left:100px;
            }

            .circle {
              height:15px;
              width:15px;
              background-color:#00FFFF;
              position:relative;
            }

            .text-container {
              width:88%;
              text-align:center;
            }

            p {
              margin-top:30px;
              font-family: Comfortaa;
              letter-spacing:1px;
              line-height:1.9em;
              color:white;
            }

            @keyframes rotateClockwise {
              from {
                transform: rotate(0deg);
              } to {
                transform: rotate(360deg);
              }
            }

          `}
        </style>
    </Fragment>
  )
}

export default SectionThree;