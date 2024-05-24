import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div id="dashboard">
      <div id="dashboard-form-container">
        <h1 id="form-title">&#9067; Filter</h1>
        <form class="filter-category">
          <label class="filter-section">Mode of Instruction</label><br></br>
          <input type="checkbox" class="filter-option" name="instruction-mode" value="online"></input>
          <span class="filter-text">Online</span><br></br>
          <input type="checkbox" class="filter-option" name="instruction-mode" value="in-person"></input>
          <span class="filter-text">In-Person</span><br></br>
        </form>
        <form class="filter-category">
          <label class="filter-section">Subject</label><br></br>
          <input type="checkbox" class="filter-option" name="subject" value="math"></input>
          <span class="filter-text">Math</span><br></br>
          <input type="checkbox" class="filter-option" name="subject" value="physics"></input>
          <span class="filter-text">Physics</span><br></br>
          <input type="checkbox" class="filter-option" name="subject" value="history"></input>
          <span class="filter-text">History</span><br></br>
        </form>
        <form class="filter-category">
          <label class="filter-section">Qualifications</label><br></br>
          <input type="checkbox" class="filter-option" name="qualifications" value="high-school"></input>
          <span class="filter-text">High School Disploma</span><br></br>
          <input type="checkbox" class="filter-option" name="qualifications" value="bachelors"></input>
          <span class="filter-text">Bachelor's Degree</span><br></br>
          <input type="checkbox" class="filter-option" name="qualifications" value="masters"></input>
          <span class="filter-text">Master's Degree</span><br></br>
          <input type="checkbox" class="filter-option" name="qualifications" value="phd"></input>
          <span class="filter-text">PhD</span><br></br>
        </form>
        <form class="filter-category">
          <label class="filter-section">UC Campus</label><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="riverside"></input>
          <span class="filter-text">Riverside</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="berkely"></input>
          <span class="filter-text">Berkely</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="los-angeles"></input>
          <span class="filter-text">Los Angeles</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="san-diego"></input>
          <span class="filter-text">San Diego</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="irvine"></input>
          <span class="filter-text">Irvine</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="davis"></input>
          <span class="filter-text">Davis</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="merced"></input>
          <span class="filter-text">Merced</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="santa-barbara"></input>
          <span class="filter-text">Santa Barbara</span><br></br>
          <input type="checkbox" class="filter-option" name="campus" value="santa-cruz"></input>
          <span class="filter-text">Santa Cruz</span><br></br>
        </form>
      </div>
      <div id="dashboard-student-list-container">
        <h1>Recommended Students</h1>
        <div id="student-list">
          <div className="student-container">
            <div className="left-student-container">
              <img src="#"></img>
              <button>Message</button>
            </div>
            <div className="middle-student-container">
              <h2 className="middle-student-title">John Smith</h2>
              <p>
                Hi , I am John a dedicated tutor working for UC Tutors! I love
                to play sports and learn about new things. I am currently
                working to get my master’s degree in Computer Science at the
                University of California Riverside. I am volunteering to help
                hone my skills in teaching as well as to understanding the
                basics of Computer Science and Mathematics. If you are
                interested in my services, please let me know!
              </p>
            </div>
            <div className="right-student-container">
              <ul>
                <li>
                  <h4>Computer Science Major</h4>
                </li>
                <li>
                  <h4>UC Riverside</h4>
                </li>
                <li>
                  <h4>Freshman</h4>
                </li>
              </ul>

              <h2 className="right-student-review">Reviews</h2>
            </div>
          </div>
          <div className="student-container">
            <div className="left-student-container">
              <img src="#"></img>
              <button>Message</button>
            </div>
            <div className="middle-student-container">
              <h2 className="middle-student-title">John Smith</h2>
              <p>
                Hi , I am John a dedicated tutor working for UC Tutors! I love
                to play sports and learn about new things. I am currently
                working to get my master’s degree in Computer Science at the
                University of California Riverside. I am volunteering to help
                hone my skills in teaching as well as to understanding the
                basics of Computer Science and Mathematics. If you are
                interested in my services, please let me know!
              </p>
            </div>
            <div className="right-student-container">
              <ul>
                <li>
                  <h4>Computer Science Major</h4>
                </li>
                <li>
                  <h4>UC Riverside</h4>
                </li>
                <li>
                  <h4>Freshman</h4>
                </li>
              </ul>

              <h2 className="right-student-review">Reviews</h2>
            </div>
          </div>
          <div className="student-container">
            <div className="left-student-container">
              <img src="#"></img>
              <button>Message</button>
            </div>
            <div className="middle-student-container">
              <h2 className="middle-student-title">John Smith</h2>
              <p>
                Hi , I am John a dedicated tutor working for UC Tutors! I love
                to play sports and learn about new things. I am currently
                working to get my master’s degree in Computer Science at the
                University of California Riverside. I am volunteering to help
                hone my skills in teaching as well as to understanding the
                basics of Computer Science and Mathematics. If you are
                interested in my services, please let me know!
              </p>
            </div>
            <div className="right-student-container">
              <ul>
                <li>
                  <h4>Computer Science Major</h4>
                </li>
                <li>
                  <h4>UC Riverside</h4>
                </li>
                <li>
                  <h4>Freshman</h4>
                </li>
              </ul>

              <h2 className="right-student-review">Reviews</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
