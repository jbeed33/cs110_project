import "./UserCard.css";
import Modal from "react-modal";

import { useState } from "react";

export default function UserCard({
  userId,
  userName,
  grade,
  type,
  school,
  options,
  field,
  description,
  signal,
  setSignal,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:8080/api/admin/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return res;
  };

  const editUser = async (id, formData) => {
    const res = await fetch(`http://localhost:8080/api/admin/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: formData["userId"],
        userName: formData["userName"],
        grade: formData["grade"],
        type: formData["type"],
        school: formData["school"],
        options: formData["options"],
        field: formData["field"],
        description: formData["description"],
      }),
    });
    return res;
  };

  return (
    <div className="usercard-container">
      <div className="usercard-details">
        <div>{`userId: ${userId}`}</div>
        <div>{`userName: ${userName}`}</div>
        <div>{`grade: ${grade}`}</div>
        <div>{`type: ${type}`}</div>
        <div>{`school: ${school}`}</div>
        <div>{`options: ${options}`}</div>
        <div>{`field: ${field}`}</div>
        <div>{`description: ${description}`}</div>
      </div>
      <div className="modal-button">
        <button id="open-modal" onClick={openModal}>
          Edit user
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-interior">
            <h2>Edit user</h2>
            <div>
              <form
                className="form-container"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = document.querySelector("form");
                  const data = Object.fromEntries(new FormData(form).entries());
                  const res = await editUser(userId, data);
                  if (res.status === 200) {
                    closeModal();
                    setSignal(signal + 1);
                  }
                }}
              >
                <label>User ID</label>
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  defaultValue={userId}
                ></input>

                <label>Username</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  defaultValue={userName}
                ></input>

                <label>Grade</label>
                <input
                  type="text"
                  name="grade"
                  id="grade"
                  defaultValue={grade}
                ></input>

                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  defaultValue={type}
                ></input>

                <label>School</label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  defaultValue={school}
                ></input>

                <label>Options</label>
                <input
                  type="text"
                  name="options"
                  id="options"
                  defaultValue={options}
                ></input>

                <label>Field</label>
                <input
                  type="text"
                  name="field"
                  id="field"
                  defaultValue={field}
                ></input>

                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  defaultValue={description}
                ></input>
                <div className="button-container">
                  <button type="submit" id="submit">
                    Submit
                  </button>
                  <button
                    id="delete"
                    onClick={async () => {
                      await deleteUser(userId);
                      setSignal(signal + 1);
                      closeModal();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
