import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ranasocial</h3>
          <span className="loginDesc">
            Connect With Friends and the World arround you on Ranasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterButton">
              Create a new acoount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
