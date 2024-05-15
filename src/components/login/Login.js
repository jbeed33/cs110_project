import React from 'react';
import googleImage from './googleImage.png';
import githubImage from './githubImage.png';
import facebookImage from './facebookImage.png';
import './Login.css';

export default function Login() {
    return (
        <div className="body-image">
            <div className="login-box">
                <div className="login-box-text">Sign in</div>
                <div className="login-form">
                    <form action="#">
                        <input type="email" id="email" name="email" placeholder="Email" required /><br />
                        <input type="password" id="password" name="password" placeholder="Password" required /><br />
                        <button>Login</button>
                        <p>Or use</p>
                        <div className="login-form-image-container">
                            <img className="login-form-image" src={googleImage} alt="Google" />
                            <img className="login-form-image" src={githubImage} alt="Github" />
                            <img className="login-form-image" src={facebookImage} alt="Facebook" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-text-above">
                <p>U</p>
                <span>C</span>
                <h1>TUTORS</h1>
            </div>
        </div>
    );
}
