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

function Messages({ groupId }) {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/api/chat/group`).then((response) => {
      const contactsData = response.data.userGroups.map(group => ({
        userId: group.textPartner.userId,
        name: group.textPartner.userName,
        image: group.textPartner.userImage,
        lastMessageDate: group.lastMessage.publishDate,
        lastMessageText: group.lastMessage.message
      }));
      setContacts(contactsData);
      setSelectedContact(contactsData[0]);
    });
  }, []);

  useEffect(() => {
    if (groupId) {
      axios
        .get(`${API_URL}/api/chat/messages/${groupId}`)
        .then((response) => {
          setMessages(response.data);
        });
    }
  }, [groupId]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    if (contact.userId) {
      axios
        .get(`${API_URL}/api/chat/messages/${contact.userId}`)
        .then((response) => {
          setMessages(response.data);
        });
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      sender: "encryptedEmailToken12345",
      receiver: selectedContact.userId,
      message: newMessage,
    };

    axios
      .post(`${API_URL}/api/chat/messages/${selectedContact.userId}`, newMsg)
      .then((response) => {
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage("");
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
              <div className="contact-avatar">
                {contact.image ? (
                  <img src={contact.image} alt={`${contact.name}'s avatar`} />
                ) : (
                  <div className="default-avatar">{contact.name[0]}</div>
                )}
              </div>
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
              </div>
              <div className="contact-date">
                {formatDate(contact.lastMessageDate)}
              </div>
              <div className="last-message-text">{contact.lastMessageText}</div>
            </div>
          ))}
        </div>
      </div>
      <div id="chat-header">
        Conversation with {selectedContact && selectedContact.name}
      </div>
      <div id="chatbox-container">
        <div id="chat-window">
          <div id="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === "encryptedEmailToken12345" ? "sent" : "received"
                }`}
              >
                {message.sender !== "encryptedEmailToken12345" && (
                  <div className="message-avatar"></div>
                )}
                <div className="message-content">{message.message}</div>
              </div>
            ))}
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
    </div>
  );
}

export default Messages;