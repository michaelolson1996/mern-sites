import { Fragment } from 'react';
import Dropdown from './header/components/Dropdown'

const Nav = () => {

  const ddController = () => {
    if (typeof window !== 'undefined' && document.getElementById('nav-toggle').checked) {
      document.getElementById('nav-container').style.right="22px";
    } else {
      document.getElementById('nav-container').style.right="-100px";
    }
  }
  
  return (
    <Fragment>
      <header>
        <h1>Etnata</h1>
        <input type="checkbox" id="nav-toggle" onClick={ddController} />
        <label htmlFor="nav-toggle">
          <nav>
            <div className="dropdown-icon-container">
              <div className="dropdown-outer-circle-ring">
                <div className="dropdown-icon-ring">
                  <div className="dropdown-icon-inner-circle"></div>
                </div>
                <div className="dropdown-icon-outer-circle"></div>
              </div>
            </div>
          </nav>
        </label> 
      </header>
      <Dropdown />
      <style jsx>
        {`

          header {
            width: 100vw;
            height: 120px;
            display:flex;
            justify-content:space-between;
            position:fixed;
            z-index:1000;
          }

          h1 {
            font-family: 'Comfortaa';
            font-size: 1.7em;
            letter-spacing: 2px;
            color: white;
            padding: 1.5em 0em 0em 1.2em;
          }

          label {
            width:100px;
            display:flex;
            align-items:center;
            justify-content:center;
            padding: 0em 1.2em 0em 0em;
          }

          input[type=checkbox] {
            display: none;
          }

          input[type=checkbox]:checked ~ label .dropdown-icon-container {
            transform: rotate(-180deg);
          }

          .dropdown-icon-container {
            height: 60px;
            width: 60px;
            transition: transform 1s ease-in-out;
          }

          .dropdown-icon-ring {
            height:50px;
            width:50px;
            border-radius:50px;
            border: .2em solid #00FFFF;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .dropdown-icon-inner-circle {
            height:25px;
            width:25px;
            background-color: #7b62c2;
            border-radius: 50%;
          }

          .dropdown-icon-outer-circle {
            height: 15px;
            width: 15px;
            border-radius:50%;
            background-color: rgb(191,0,254);
          }
        `}
      </style>
    </Fragment>
  )
}

export default Nav;