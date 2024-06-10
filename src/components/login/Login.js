import React from "react";
import googleImage from "./googleImage.png";
import githubImage from "./githubImage.png";
import facebookImage from "./facebookImage.png";
import "./Login.css";

export default function Login() {
  return (
    <div className="body-image">
      <div className="login-box">
        <div className="login-box-text mb-20">Sign in or Sign up </div>
        <a href="http://localhost:8080/api/auth/google">
          <div id="login-button">
            {" "}
            <img className="login-form-image" src={googleImage} alt="Google" />
          </div>
        </a>
      </div>
      <div className="login-text-above">
        <p>U</p>
        <span>C</span>
        <h1>TUTORS</h1>
      </div>
    </div>
  );
}
