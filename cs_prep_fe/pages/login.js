import { Fragment } from 'react';
import Link from 'next/link';

const Login = () => {

  return (
    <Fragment>
      <div className="login-wrap">
        <div className="login-container">
          <h2>Log In</h2>
          <div className="login-input-container">
            <input placeholder="User Name"></input>
            <input placeholder="Password" type="password"></input>
          </div>
          <div className="login-submit-container">
            <Link href="/account/dashboard" as="dashboard">
              <a>
                <button type="submit">Submit</button>
              </a>
            </Link>
          </div>
          <div className="button-container">
            <a className="forgot-pw-button" type="button">Forgot your password?</a>
            <a className="forgot-pw-button" type="button">Already have an account?</a>
          </div>
        </div>
      </div>
      <style jsx>
        {`

          .login-wrap {
            position:absolute;
            top:100px;
            height:540px;
            width:100vw;
            display:flex;
            justify-content:center;
            align-items: center;
            color:white;
            font-family: Comfortaa;
            letter-spacing:1px;
          }

          .login-container {
            height:380px;
            width: 300px;
            // background-color:white;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
          }

          .login-input-container {
            height:130px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
          }

          input {
            height: 40px;
            width: 280px;
            border: 1px solid #00FFFF;
            border-radius:20px;
            color:white;
            padding-left:15px;
            font-size:1.1em;
          }

          input:focus {
            border: 1px solid rgb(0,0,0,0);
          }

          button {
            color:white;
            border: 1px solid rgb(191,0,254);
            height:40px;
            width:140px;
            border-radius:20px;
            font-size:1.2em;
            letter-spacing:1px;
          }

          .button-container {
            display:flex;
            flex-direction: column;
            justify-content:space-around;
            align-items:center;
            text-align:center;
            height:60px;
          }

          .forgot-pw-button {
            margin-top:0px;
            font-size: .8em;
            width:200px;
            border:none;
          }

        `}
      </style>
    </Fragment>
  )
}

export default Login;