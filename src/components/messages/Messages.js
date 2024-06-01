import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Messages.css";

const API_URL = "http://localhost:8080"; 

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString(undefined, { weekday: "long" });
  }
};

function Messages() {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState({});
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [showGroupChatModal, setShowGroupChatModal] = useState(false);
  const [groupChatMembers, setGroupChatMembers] = useState("");

  
  useEffect(() => {
    axios.get(`${API_URL}/api/chat/contacts`).then((response) => {
      setContacts(response.data);
      setSelectedContact(response.data[0]); 
    });
  }, []);

 
  useEffect(() => {
    if (selectedContact) {
      axios
        .get(`${API_URL}/api/chat/messages/${selectedContact.userId}`)
        .then((response) => {
          setMessages((prevMessages) => ({
            ...prevMessages,
            [selectedContact.userId]: response.data,
          }));
        });
    }
  }, [selectedContact]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      sender: "Me",
      receiver: selectedContact.name,
      message: newMessage,
    };

    
    axios
      .post(`${API_URL}/api/chat/messages/${selectedContact.userId}`, newMsg)
      .then((response) => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [selectedContact.userId]: [
            ...(prevMessages[selectedContact.userId] || []),
            response.data,
          ],
        }));
        setNewMessage("");
      });
  };

  const handleCreateGroupChat = () => {
    const sender = "encryptedEmailToken123"; 
    const receivers = groupChatMembers.split(',').map(email => email.trim());

    const data = {
      sender,
      receiver: receivers.join(','),
    };

    axios.post(`${API_URL}/api/chat/group`, data)
      .then(response => {
        alert(response.data.message); 
        setShowGroupChatModal(false);
        setGroupChatMembers("");
      })
      .catch(error => {
        console.error("There was an error creating the group chat!", error);
      });
  };

  return (
    <div id="messages">
      <div id="messages-form-container">
        <h1 id="form-title">&#9067; Messages</h1>
        <div id="sidebar">
          {contacts.map((contact) => (
            <div
              key={contact.userId}
              className={`contact ${
                selectedContact && selectedContact.userId === contact.userId
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleSelectContact(contact)}
            >
              <div className="contact-avatar"></div>
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-status">{contact.status}</div>
              </div>
              <div className="contact-date">
                {formatDate(contact.lastMessageDate)}
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setShowGroupChatModal(true)}>
          Create Group Chat
        </button>
      </div>
      <div id="chat-header">
        Conversation with {selectedContact && selectedContact.name}
      </div>
      <div id="chatbox-container">
        <div id="chat-window">
          <div id="chat-messages">
            {(messages[selectedContact ? selectedContact.userId : ""] || []).map(
              (message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.sender === "Me" ? "sent" : "received"
                  }`}
                >
                  {message.sender !== "Me" && (
                    <div className="message-avatar"></div>
                  )}
                  <div className="message-content">{message.message}</div>
                </div>
              )
            )}
          </div>
          <div id="chat-input">
            <input
              type="text"
              placeholder="New message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>SEND</button>
          </div>
        </div>
      </div>

      {showGroupChatModal && (
        <div id="group-chat-modal">
          <div className="modal-content">
            <h2>Create Group Chat</h2>
            <input
              type="text"
              placeholder="Enter email addresses separated by commas"
              value={groupChatMembers}
              onChange={(e) => setGroupChatMembers(e.target.value)}
            />
            <button onClick={handleCreateGroupChat}>Create</button>
            <button onClick={() => setShowGroupChatModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;