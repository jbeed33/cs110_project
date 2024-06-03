import React from "react";
import "./SignUp.css";


function SignUp() {
    return (
        <div id="signup-container">
            <div id="signup-form">
                <header id="signup-head">Sign Up for UC Tutors</header>
                <form id="form" action="/" method="post">
                    <div className="form-content">
                        <div className="signup-left">
                            <label class="form-text">Name</label><br/>
                            <input type="text" name="userName" className="bar-input"></input><br/>
                            <label class="form-text">Grade</label><br/>
                            <select id="form-grade" name="grade" required className="bar-input">
                                <option value="none" disabled selected>--Select your grade level--</option>
                                <option value="freshman">Freshman</option>
                                <option value="sophmore">Sophmore</option>
                                <option value="junior">Junior</option>
                                <option value="senior">Senior</option>
                                <option value="graduate">Graduate</option>
                                <option value="phd">PhD</option>
                            </select><br/>
                            <label class="form-text">Field of Study</label><br/>
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
                            </select><br/>
                            <label className="form-text">Tutoring Availability</label> <br/>
                            <input type="radio" name="option" value="in-person"></input><span className="box-text">In-Person</span><br/>
                            <input type="radio" name="option" value="remote"></input><span className="box-text">Remote</span><br/>
                            <input type="radio" name="option" value="both"></input><span className="box-text">Both</span><br/>

                            <label class="form-text">Student or Tutor? (Select all that apply)</label> <br/>
                            <input class="form-type" type="radio" name="type" value="student"></input><span className="box-text">Student</span><br/>
                            <input class="form-type" type="radio" name="type" value="tutor"></input><span className="box-text">Tutor</span><br/>
                            <input class="form-type" type="radio" name="type" value="both"></input><span className="box-text">Both</span><br/>
                        </div>
                        <div className="signup-right">
                            <label className="form-text"> UC School</label>
                            <select id="form-school" name="school" required>
                                <option value="uc-berkeley">UC Berkeley</option>
                                <option value="uc-david">UC Davis</option>
                                <option value="uc-irvine">UC Irvine</option>
                                <option value="uc-los-angales">UC Los Angeles</option>
                                <option value="uc-merced">UC Merced</option>
                                <option value="uc-riverside">UC Riverside</option>
                                <option value="uc-san-diego">UC San Diego</option>
                                <option value="uc-san-fransico">UC San Fransico</option>
                                <option value="uc-santa-barbara">UC Santa Barbara</option>
                                <option value="uc-santa-cruz">UC Santa Cruz</option>
                            </select> <br/>
                            <label className="form-text">Subjects Needed Help In</label><br/>
                            <select id="form-subject-help" name="subjectHelp" size="6">
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
                            </select><br/>
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