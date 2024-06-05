import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";

function Dashboard() {
  // State for filter data

  const [filterData, setFilterData] = useState([]);
  const [tutors, setTutors] = useState(Array(0).fill(""));
  const [searchUrl, setSearchurl] = useState(
    "http://localhost:8080/api/filter"
  );
  const baseUrl = "http://localhost:8080/api/filter?";
  const [signal, setSignal] = useState(0);

  const getUsers = async () => {
    if (
      searchUrl === "http://localhost:8080/api/filter?" ||
      searchUrl === "http://localhost:8080/api/filter"
    ) {
      return;
    }
    const res = await fetch(searchUrl, {
      credentials: "include",
    });
    const data = await res.json();
    setTutors(data);
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, [searchUrl]);

  useEffect(() => {
    let newSearch = baseUrl;
    for (let query in filterData) {
      newSearch += "&" + filterData[query];
    }
    setSearchurl(newSearch);
  }, [filterData, signal]);

  // Handle changes in filter inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    const filterString = `${name}=${value}`;
    // console.log(e.target.checked);
    // console.log(filterString);
    if (e.target.checked === true) {
      setFilterData((prev) => {
        prev.push(filterString);
        return prev;
      });
    } else {
      setFilterData((prev) => {
        // console.log("prev:", prev);
        const index = prev.findIndex((el) => el === filterString);
        // console.log("Index", index);
        prev.splice(index, 1);
        return prev;
      });
    }

    setSignal(signal + 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // able to send filterData to backend or do actions
    console.log("Form submitted:", filterData);
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
              name="options"
              value="online"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Online</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="options"
              value="in person"
              onChange={handleChange}
            ></input>
            <span class="filter-text">In-Person</span>
            <br></br>
          </form>
          <form class="filter-category">
            <label class="filter-section">Subject</label>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="agricultre and natural resources"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Agricultre and Natural Resouces</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="architecture and urban-planning"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Architecture and Urban Planning</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="art and humanities"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Art and Humanities</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="business and management"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Business and Management</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="education"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Education</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="engineering and computer science"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Engineering and Computer Science</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="environmental studies"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Environmental Studies</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="health and medicine"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Health and Medicine</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="information and library science"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Information and Library Science</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="interdisciplinary studies"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Interdisciplinary Studies</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="mathematics and statistics"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Mathematics and Statistics</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="physical and life sciences"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Physical and Life Sciences</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="field"
              value="social sciences"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Social Sciences</span>
            <br />
          </form>
          <form class="filter-category" onSubmit={handleSubmit}>
            <label class="filter-section">Qualifications</label>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="grade"
              value="freshman"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Freshman</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="grade"
              value="sophomore"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Sophomore</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="grade"
              value="junior"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Junior</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="grade"
              value="senior"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Senior</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="grade"
              value="graduate"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Graduate</span>
            <br />
            <input
              type="checkbox"
              class="filter-option"
              name="grade"
              value="phd"
              onChange={handleChange}
            ></input>
            <span class="filter-text">PhD</span>
            <br />
          </form>
          <form class="filter-category" onSubmit={handleSubmit}>
            <label class="filter-section">UC Campus</label>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Riverside"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Riverside</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Berkley"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Berkely</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Los Angeles"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Los Angeles</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC San Diego"
              onChange={handleChange}
            ></input>
            <span class="filter-text">San Diego</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Irvine"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Irvine</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Davis"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Davis</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Merced"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Merced</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Santa Barbara"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Santa Barbara</span>
            <br></br>
            <input
              type="checkbox"
              class="filter-option"
              name="school"
              value="UC Santa Cruz"
              onChange={handleChange}
            ></input>
            <span class="filter-text">Santa Cruz</span>
            <br></br>
          </form>
        </div>

        <div id="dashboard-student-list-container">
          <h1>Recommended Students</h1>
          <div id="student-list">
            {tutors?.map((tutor, index) => (
              <div className="student-container" key={index}>
                <div className="left-student-container">
                  <img src="#"></img>
                  <button>Message</button>
                </div>
                <div className="middle-student-container">
                  <h2 className="middle-student-title">{tutor.userName}</h2>
                  <p>{tutor.description}</p>
                </div>
                <div className="right-student-container">
                  <ul>
                    <li>
                      <h4>{tutor.field}</h4>
                    </li>
                    <li>
                      <h4>{tutor.school}</h4>
                    </li>
                    <li>
                      <h4>{tutor.grade}</h4>
                    </li>
                  </ul>

                  <h2 className="right-student-review">Reviews</h2>
                </div>
              </div>
            ))}

            {tutors?.length === 0 ? <div>No Students Found</div> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
