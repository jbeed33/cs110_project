import React from "react";
import "./SignUp.css";

/*  
    First: Email and Password authentication
    Second: Name, Grade Field of Study
    Third: Description and isTutor().
*/

function SignUp() {
    return (
        <div id="signUpForm-container">
            <div id="signup-form">
                <form id="form-authenticaion">
                    <header id="signUp-head">Sign Up</header>
                    <label class="form-text">Name</label><br></br>
                    <input type="text" name="name"></input><br></br>
                    <label class="form-text">Email</label><br></br>
                    <input type="email" name="email"></input> <br></br>
                    <label class="form-text">Password</label><br></br>
                    <input type="password" name="password"></input><br></br>
                    <label class="form-text">Grade</label><br></br>
                    <select id="form-grade" name="grade">
                        <option>--Select your grade level--</option>
                        <option>Freshman</option>
                        <option>Sophmore</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Graduate</option>
                    </select><br></br>
                    <label class="form-text">Field of Study</label><br></br>
                    <select id="form-fieldStudy">
                        <option>--Select your field of study--</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>History</option>
                        <option>Other</option>
                    </select><br></br>
                    <label class="form-text">Are you a Tutor?</label>
                    <input class="form-isTutor" type="radio" name="isTutor" value="true"></input><label>Yes</label>
                    <input class="form-isTutor" type="radio" name="isTutor" value="false"></input><label>No</label>
                    <br></br>
                    <button class="form-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;