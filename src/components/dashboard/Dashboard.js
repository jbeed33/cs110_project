import React, {useState} from "react";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";

function Dashboard() {
  // State for filter data
  const [filterData, setFilterData] = useState( {
    instructionMode: '',
    subject: '',
    qualification: '',
    campus: '',
  });

  // Handle changes in filter inputs.
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFilterData({
      ...filterData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // able to send filterData to backend or do actions
    console.log('Form submitted:', filterData);
  };

  return (
    <>
      <Navbar />
      <div id="dashboard">
        <div id="dashboard-form-container">
          <h1 id="form-title">&#9067; Filter</h1>
          <form class="filter-category" onSubmit={handleSubmit}>
            <label class="filter-section">Mode of Instruction</label>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="instructionMode"
              value="online"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Online</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="instructionMode"
              value="in-person"
              onChange={handleChange}
            ></input>
            <span class="filter-text">In-Person</span>
            <br></br>
          </form>
          <form class="filter-category" obSunmit={handleSubmit}>
            <label class="filter-section">Subject</label>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="subject"
              value="math"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Math</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="subject"
              value="physics"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Physics</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="subject"
              value="history"
              onChange={handleChange}
            ></input>
            <span class="filter-text">History</span>
            <br></br>
          </form>
          <form class="filter-category" onSubmit={handleSubmit}>
            <label class="filter-section">Qualifications</label>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="qualification"
              value="high-school"
              onChange={handleChange}
            ></input>
            <span class="filter-text">High School Disploma</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="qualification"
              value="bachelors"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Bachelor's Degree</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="qualification"
              value="masters"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Master's Degree</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="qualification"
              value="doctors"
              onChange={handleChange}
            ></input>
            <span class="filter-text">PhD</span>
            <br></br>
          </form>
          <form class="filter-category" onSubmit={handleSubmit}>
            <label class="filter-section">UC Campus</label>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="riverside"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Riverside</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="berkely"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Berkely</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="los-angeles"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Los Angeles</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="san-diego"
              onChange={handleChange}
            ></input>
            <span class="filter-text">San Diego</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="irvine"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Irvine</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="davis"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Davis</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="merced"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Merced</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="santa-barbara"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Santa Barbara</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="campus"
              value="santa-cruz"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Santa Cruz</span>
            <br></br>
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
    </>
  );
}

export default Dashboard;
