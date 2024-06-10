import React from "react";
import "./Settings.css";
import Navbar from "../navbar/Navbar";

export default function Settings() {

  // Need to be able to update information submitted by user in settings page

  return (
    <div>
      <Navbar />
      <div id="settings">
        <div id="settings-body">
            <header id="settings-head"> Settings</header>
            <div id="settings-container">
              <form
              id="form"
              >
              <div className="settings-update">
                <label className="form-text">Name</label>
                <br />
                <input
                  type="text"
                  name="userName"
                  className="bar-input"
                ></input>
                <br />
                <label class="form-text">Grade</label>
                <br />
                <select
                  id="form-grade"
                  name="grade"
                  required
                  className="bar-input"
                >
                  <option value="none" disabled selected>
                    --Select your grade level--
                  </option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="graduate">Graduate</option>
                  <option value="phd">PhD</option>
                </select>
                <br />
                <label class="form-text">Field of Study</label>
                <br />
                <select
                  id="form-field-study"
                  name="field"
                  required
                  className="bar-input"
                >
                  <option value="none" disabled selected>
                    --Select your field of study--
                  </option>
                  <option value="agriculture and natural resources">
                    Agricultre and Natural Resources
                  </option>
                  <option value="architecture and urban planning">
                    Architecture and Urban Planning
                  </option>
                  <option value="art and humanities">Art and Humanities</option>
                  <option value="business-and-management">
                    Business and Management
                  </option>
                  <option value="education">Education</option>
                  <option value="engineering and computer science">
                    Engineering and Computer Science
                  </option>
                  <option value="environmental studies">
                    Environmental Studies
                  </option>
                  <option value="health and medicine">
                    Health and Medicine
                  </option>
                  <option value="information and library science">
                    Information and Library Science
                  </option>
                  <option value="interdisciplinary studies">
                    Interdisciplinary Studies
                  </option>
                  <option value="law and legal studies">
                    Law and Legal Studies
                  </option>
                  <option value="mathematics and statistics">
                    Mathematics and Statistics
                  </option>
                  <option value="physical and life sciences">
                    Physical and Life Sciences
                  </option>
                  <option value="social sciences">Social Sciences</option>
                </select>
                <br />
                <label className="form-text">Tutoring Availability</label>{" "}
                <br />
                <input type="radio" name="options" value="in person"></input>
                <span className="box-text">In-Person</span>
                <br />
                <input type="radio" name="options" value="online"></input>
                <span className="box-text">Remote</span>
                <br />
                <input type="radio" name="options" value="both"></input>
                <span className="box-text">Both</span>
                <br />
                <label class="form-text">
                  Student or Tutor? (Select all that apply)
                </label>{" "}
                <br />
                <input
                  class="form-type"
                  type="radio"
                  name="type"
                  value="student"
                ></input>
                <span className="box-text">Student</span>
                <br />
                <input
                  class="form-type"
                  type="radio"
                  name="type"
                  value="tutor"
                ></input>
                <span className="box-text">Tutor</span>
                <br />
                <input
                  class="form-type"
                  type="radio"
                  name="type"
                  value="both"
                ></input>
                <span className="box-text">Both</span>
                <br />
                <label className="form-text"> UC School</label> <br />
                <select id="form-school" name="school" required>
                  <option value="UC Berkeley">UC Berkeley</option>
                  <option value="UC Davis">UC Davis</option>
                  <option value="UC Irvine">UC Irvine</option>
                  <option value="UC Los Angeles">UC Los Angeles</option>
                  <option value="UC Merced">UC Merced</option>
                  <option value="UC Riverside">UC Riverside</option>
                  <option value="UC San Diego">UC San Diego</option>
                  <option value="UC San Francisco">UC San Fransico</option>
                  <option value="UC Santa Barbara">UC Santa Barbara</option>
                  <option value="UC Santa Cruz">UC Santa Cruz</option>
                </select>{" "}
                <br />
                <label className="form-text">Subjects Needed Help In</label>
                <br />
                <select id="form-subject-help" name="subjectHelp" size="8">
                  <option value="agriculture and natural resources">
                    Agricultre and Natural Resources
                  </option>
                  <option value="architecture and urban planning">
                    Architecture and Urban Planning
                  </option>
                  <option value="art and humanities">Art and Humanities</option>
                  <option value="business and management">
                    Business and Management
                  </option>
                  <option value="education">Education</option>
                  <option value="engineering and computer science">
                    Engineering and Computer Science
                  </option>
                  <option value="environmental studies">
                    Environmental Studies
                  </option>
                  <option value="health and medicine">
                    Health and Medicine
                  </option>
                  <option value="information and library science">
                    Information and Library Science
                  </option>
                  <option value="interdisciplinary studies">
                    Interdisciplinary Studies
                  </option>
                  <option value="law and legal studies">
                    Law and Legal Studies
                  </option>
                  <option value="mathematics and statistics">
                    Mathematics and Statistics
                  </option>
                  <option value="physical and life sciences">
                    Physical and Life Sciences
                  </option>
                  <option value="social sciences">Social Sciences</option>
                </select>
                <br />
                <label className="form-text">
                  Short description of yourself
                </label>
                <input
                  type="text"
                  name="description"
                  className="signup-description"
                ></input>
                </div>
              <button class="form-btn">
                Submit
              </button>
              </form>
            </div>
        </div>
      </div>
    </div>
    )
}