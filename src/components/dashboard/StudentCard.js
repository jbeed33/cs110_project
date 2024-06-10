import "./Dashboard.css";
import Modal from "react-modal";

import { useState, useEffect } from "react";
import e from "cors";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function StudentCard({
  userId,
  userName,
  desc,
  field,
  school,
  grade,
  createMsgGroup,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState(Array(0).fill(""));
  const [value, setValue] = useState("");
  const [trigger, setTrigger] = useState(false);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const changeTrigger = () => {
    // console.log(trigger);
    setTrigger(!trigger);
  };

  const getReviews = async () => {
    const receiverId = userId;
    try {
      const res = await fetch(
        `http://localhost:8080/api/user/reviews/${receiverId}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setReviews(data.reviews);
    //   console.log(data.reviews);
    } catch (error) {
      console.error("error has occured", error);
    }
  };

  const addReview = async () => {
    const receiverId = userId;
    try {
      const res = await fetch(
        `http://localhost:8080/api/user/reviews/${receiverId}`,
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            review: value,
          }),
        }
      );
      const data = await res.json();
    //   console.log(data);
    } catch (error) {
      console.error("error has occured", error);
    }
  };
  useEffect(() => {
    getReviews();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="student-container">
      <div className="left-student-container">
        <img src="#"></img>
        <button data-user={userId} onClick={(e) => createMsgGroup(e)}>
          Message
        </button>
      </div>
      <div className="middle-student-container">
        <h2 className="middle-student-title">{userName}</h2>
        <p>{desc}</p>
      </div>
      <div className="right-student-container">
        <ul>
          <li>
            <h4>{field}</h4>
          </li>
          <li>
            <h4>{school}</h4>
          </li>
          <li>
            <h4>{grade}</h4>
          </li>
        </ul>

        <h2 className="right-student-review" onClick={openModal}>
          Reviews
        </h2>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {!trigger ? (
            reviews.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label>No reviews found, add a review</label>
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <textarea
                    style={{
                      margin: "10px",
                      padding: "10px",
                      minWidth: "300px",
                      height: "100px",
                    }}
                    value={value}
                    onChange={onChange}
                  ></textarea>
                  <button onClick={addReview}>Submit</button>
                </form>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "flex-row",
                    alignItems: "center",
                    gap: "200px",
                  }}
                >
                  <h3 style={{ textDecoration: "underline" }}>Reviews</h3>
                  <div
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={changeTrigger}
                  >
                    Add
                  </div>
                </div>

                {reviews?.map((review, index) => (
                  <div key={index} className="review-card">
                    <h4>{review.senderName}</h4>
                    <p>{review.review}</p>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <label>Add a review</label>
                <div
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={changeTrigger}
                >
                  Return
                </div>
              </div>

              <form style={{ display: "flex", flexDirection: "column" }}>
                <textarea
                  style={{
                    margin: "10px",
                    padding: "10px",
                    minWidth: "300px",
                    height: "100px",
                  }}
                  value={value}
                  onChange={onChange}
                ></textarea>
                <button onClick={addReview}>Submit</button>
              </form>
            </div>
          )}

          {}
        </Modal>
      </div>
    </div>
  );
}
