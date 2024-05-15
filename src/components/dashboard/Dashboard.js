import React from "react";
import "./Dashboard.css";
import Filter from "../filter/Filter";

function Dashboard() {
  return (
    <div id="dashboard">
      <div id="dashboard-form-container">
        <Filter />
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
