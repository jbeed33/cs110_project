import React from "react";
import "./SignUp.css";

/*  
    First: Email and Password authentication
    Second: Name, Grade Field of Study
    Third: Description and isTutor().
*/

function SignUp() {
    return (
        <div id="signup-container">
            <div id="signup-form">
                <header id="signup-head">Sign Up for UC Tutors</header>
                <form id="form">
                    <div className="form-content">
                        <div className="signup-left">
                            <label class="form-text">Name</label><br></br>
                            <input type="text" name="name" className="bar-input"></input><br></br>
                            <label class="form-text">Grade</label><br></br>
                            <select id="form-grade" name="grade" required className="bar-input">
                                <option value="none" disabled selected>--Select your grade level--</option>
                                <option value="freshman">Freshman</option>
                                <option value="sophmore">Sophmore</option>
                                <option value="junior">Junior</option>
                                <option value="senior">Senior</option>
                                <option value="graduate">Graduate</option>
                                <option value="phd">PhD</option>
                            </select><br></br>
                            <label class="form-text">Field of Study</label><br></br>
                            <select id="form-field-study" name="field" required className="bar-input">
                                <option value="none" disabled selected>--Select your field of study--</option>
                                <option value="agriculture-and-natural-resources">Agricultre and Natural Resources</option>
                                <option value="architecture-and-urban-planning">Architecture and Urban Planning</option>
                                <option value="art-and-humanities">Art and Humanities</option>
                                <option value="business-and-management">Business and Management</option>
                                <option value="education">Education</option>
                                <option value="engineering-and-computer-science">Engineering and Computer Science</option>
                                <option value="environmental-studies">Environmental Studies</option>
                                <option value="health-and-medicine">Health and Medicine</option>
                                <option value="information-and-library-science">Information and Library Science</option>
                                <option value="interdisciplinary-studies">Interdisciplinary Studies</option>
                                <option value="law-and-legal-studies">Law and Legal Studies</option>
                                <option value="mathematics-and-statistics">Mathematics and Statistics</option>
                                <option value="physical-and-life-sciences">Physical and Life Sciences</option>
                                <option value="social-sciences">Social Sciences</option>
                            </select><br></br>
                            <label class="form-text">Student or Tutor? (Select all that apply)</label> <br></br>
                            <input class="form-type" type="checkbox" name="type" value="student"></input><span className="box-text">Student</span><br></br>
                            <input class="form-type" type="checkbox" name="type" value="tutor"></input><span className="box-text">Tutor</span>
                        </div>
                        <div className="signup-right">
                            <label className="form-text">Subjects Needed Help In</label><br></br>
                            <select id="form-subject-help" name="subject-help" size="6" multiple>
                                <option value="agriculture-and-natural-resources">Agricultre and Natural Resources</option>
                                <option value="architecture-and-urban-planning">Architecture and Urban Planning</option>
                                <option value="art-and-humanities">Art and Humanities</option>
                                <option value="business-and-management">Business and Management</option>
                                <option value="education">Education</option>
                                <option value="engineering-and-computer-science">Engineering and Computer Science</option>
                                <option value="environmental-studies">Environmental Studies</option>
                                <option value="health-and-medicine">Health and Medicine</option>
                                <option value="information-and-library-science">Information and Library Science</option>
                                <option value="interdisciplinary-studies">Interdisciplinary Studies</option>
                                <option value="law-and-legal-studies">Law and Legal Studies</option>
                                <option value="mathematics-and-statistics">Mathematics and Statistics</option>
                                <option value="physical-and-life-sciences">Physical and Life Sciences</option>
                                <option value="social-sciences">Social Sciences</option>
                            </select><br></br>
                            <label className="form-text">Short description of yourself</label>
                            <input type="text" name="description" className="signup-description"></input>
                        </div>
                    </div>
                    <button class="form-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;