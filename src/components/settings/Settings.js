import React, { useEffect } from "react";
import "./Settings.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";

export default function Settings() {
  //only used for initializing form with user data
  const [userInfo, setUserInfo] = useState({
    userName: "",
    field: "",
    grade: "",
    options: "",
    type: "",
    school: "",
    subjectHelp: "",
    description: "",
  });

  async function updateUserInfo(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const formEl = document.getElementById("form");

    const formData = new FormData(formEl);

    const dataToBeSubmitted = {
      userName: formData.get("userName"),
      grade: formData.get("grade"),
      field: formData.get("field"),
      options: formData.get("options"),
      type: formData.get("type"),
      school: formData.get("school"),
      subjectHelp: formData.get("subjectHelp"),
      description: formData.get("description"),
      type: formData.get("type"),
    };

    console.log(dataToBeSubmitted);

    //console.log(formData);
    fetch("http://localhost:8080/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include credentials in the request
      body: JSON.stringify({
        ...dataToBeSubmitted,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User could not be created.");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/user", {
        credentials: "include",
      });
      const temp = await res.json();
      console.log("user data: ", temp);
      setUserInfo(temp);
    };
    fetchData().catch(console.error);
  }, []);

  const options = [
    {
      label: "Agriculture and Natural Resources",
      value: "agriculture and natural resources",
    },
    {
      label: "Architecture and Urban Planning",
      value: "architecture and urban planning",
    },
    { label: "Art and Humanities", value: "art and humanities" },
    { label: "Business and Management", value: "business and management" },
    { label: "Education", value: "education" },
    {
      label: "Engineering and Computer Science",
      value: "engineering and computer science",
    },
    { label: "Environmental Studies", value: "environmental studies" },
    { label: "Health and Medicine", value: "health and medicine" },
    {
      label: "Information and Library Science",
      value: "information and library science",
    },
    { label: "Interdisciplinary Studies", value: "interdisciplinary studies" },
    { label: "Law and Legal Studies", value: "law and legal studies" },
    {
      label: "Mathematics and Statistics",
      value: "mathematics and statistics",
    },
    {
      label: "Physical and Life Sciences",
      value: "physical and life sciences",
    },
    { label: "Social Sciences", value: "social sciences" },
  ];

  return (
    <div>
      <Navbar />
      <div id="settings">
        <div id="settings-body">
          <header id="settings-head"> Settings</header>
          <div id="settings-container">
            <form id="form">
              <div className="settings-update">
                <label className="form-text">Name</label>
                <br />
                <input
                  type="text"
                  name="userName"
                  className="bar-input"
                  value={userInfo.userName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, userName: e.target.value })
                  }
                ></input>
                <br />
                <label class="form-text">Grade</label>
                <br />
                <select
                  id="form-grade"
                  name="grade"
                  required
                  className="bar-input"
                  value={userInfo.grade || ""}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, grade: e.target.value })
                  }
                >
                  <option value="none" disabled>
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
                  value={userInfo.field}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, field: e.target.value })
                  }
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <br />
                <label className="form-text">Tutoring Availability</label>{" "}
                <br />
                <input
                  type="radio"
                  name="options"
                  value="in person"
                  checked={userInfo.options === "in person"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, options: e.target.value })
                  }
                ></input>
                <span className="box-text">In-Person</span>
                <br />
                <input
                  type="radio"
                  name="options"
                  value="online"
                  checked={userInfo.options === "online"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, options: e.target.value })
                  }
                ></input>
                <span className="box-text">Online</span>
                <br />
                <input
                  type="radio"
                  name="options"
                  value="both"
                  checked={userInfo.options === "both"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, options: e.target.value })
                  }
                ></input>
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
                  checked={userInfo.type === "student"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, type: e.target.value })
                  }
                ></input>
                <span className="box-text">Student</span>
                <br />
                <input
                  class="form-type"
                  type="radio"
                  name="type"
                  value="tutor"
                  checked={userInfo.type === "tutor"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, type: e.target.value })
                  }
                ></input>
                <span className="box-text">Tutor</span>
                <br />
                <input
                  class="form-type"
                  type="radio"
                  name="type"
                  value="both"
                  checked={userInfo.type === "both"}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, type: e.target.value })
                  }
                ></input>
                <span className="box-text">Both</span>
                <br />
                <label className="form-text"> UC School</label> <br />
                <select
                  id="form-school"
                  name="school"
                  required
                  value={userInfo.school}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, school: e.target.value })
                  }
                >
                  <option value="UC Berkeley">UC Berkeley</option>
                  <option value="UC Davis">UC Davis</option>
                  <option value="UC Irvine">UC Irvine</option>
                  <option value="UC Los Angeles">UC Los Angeles</option>
                  <option value="UC Merced">UC Merced</option>
                  <option value="UC Riverside">UC Riverside</option>
                  <option value="UC San Diego">UC San Diego</option>
                  <option value="UC San Francisco">UC San Francisco</option>
                  <option value="UC Santa Barbara">UC Santa Barbara</option>
                  <option value="UC Santa Cruz">UC Santa Cruz</option>
                </select>{" "}
                <br />
                <label className="form-text">Subjects Needed Help In</label>
                <br />
                <select
                  id="form-subject-help"
                  name="subjectHelp"
                  size="8"
                  value={userInfo.subjectHelp}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, subjectHelp: e.target.value })
                  }
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <br />
                <label className="form-text">
                  Short description of yourself
                </label>
                <input
                  type="text"
                  name="description"
                  className="signup-description"
                  value={userInfo.description || ""}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, description: e.target.value })
                  }
                ></input>
              </div>
              <button class="form-btn" onClick={updateUserInfo}>
                Update Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
