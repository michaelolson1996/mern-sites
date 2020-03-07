import { Fragment } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  return (
    <Fragment>
      <div id="nav-container">
        <ul>
          <Link href="/">
            <li id="home-li"><a>Home</a></li>
          </Link>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
          <Link href="/login">
            <li><a>Log In</a></li>
          </Link>
          
        </ul>
      </div>
      <style jsx>
        {`

          div {
            color:white;
            position:fixed;
            top:120px;
            right: -100px;
            transition: right 1s ease;
            background-color: rgb(0,0,0,0);
            z-index: 1000;
          }

          ul{
            background-color: rgb(0,0,0,0);
          }

          #home-li {
            color: #00FFFF;
          }

          li {
            height:2em;
            list-style:none;
            font-family: 'Comfortaa';
            letter-spacing:1px;
            background-color: rgb(0,0,0,0);
          }

          a {
            background-color: rgb(0,0,0,0);
          }
          
        `}
      </style>
    </Fragment>
  )
}

export default Dropdown; 