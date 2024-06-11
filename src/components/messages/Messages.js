import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Messages.css";
import Navbar from "../navbar/Navbar";

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

function Messages({ currentUserId }) {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentChat, setCurrentChat] = useState("");
  const [currentGroup, setCurrentGroup] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/chat/group`, { withCredentials: true })
      .then((response) => {
        const contactsData = response.data.userGroups.map((group) => {
          return {
            userId: group.chatPartner.userId,
            name: group.chatPartner.userName,
            image: group.chatPartner.userImage,
            lastMessageDate: group.lastMessage?.publishDate || "",
            lastMessageText: group.lastMessage?.message || "",
            chatId: group.chatId,
          };
        });
        setContacts(contactsData);
        setSelectedContact(contactsData[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentGroup) {
        axios
          .get(`${API_URL}/api/chat/messages/${currentGroup}`, {
            withCredentials: true,
          })
          .then((response) => {
            console.log("Messages fetched: ", response.data);
            setMessages(response.data);
          });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentGroup]);

  const handleSelectContact = (e) => {
    const receiver = e.target.dataset.chatid || null;
    const contact = contacts.find((contact) => contact.chatId === receiver);
    console.log("Selected contact:", contact);
    setCurrentChat(receiver);
    setSelectedContact(contact);

    if (receiver) {
      axios
        .get(`${API_URL}/api/chat/messages/${receiver}`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log("Messages for selected contact: ", response.data);
          setCurrentGroup(receiver);
          setMessages(response.data);
        });
    }
  };

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return;
    const newMsg = {
      receiver: selectedContact.userId,
      message: newMessage,
    };
    axios
      .post(`${API_URL}/api/chat/messages/${currentChat}`, newMsg, {
        withCredentials: true,
      })
      .then((response) => {
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div id="messages">
        <div id="messages-form-container">
          <h1 id="form-title">&#9067; Messages</h1>
          <div id="sidebar">
            {contacts.map((contact) => (
              <div
                key={contact.userId}
                data-chatid={contact.chatId}
                onClick={(e) => handleSelectContact(e)}
                className={`contact ${
                  selectedContact && selectedContact.userId === contact.userId
                    ? "selected"
                    : ""
                }`}
              >
                <div className="contact-avatar-container ">
                  {contact.image !== null ? (
                    <img src={contact.image} alt={`${contact.name}'s avatar`} />
                  ) : (
                    <div className="placeholder">{contact.name[0]}</div>
                  )}
                </div>
                <div className="contact-info">
                  <div className="contact-name">{contact.name}</div>
                </div>
                <div className="last-message-text">
                  {contact.lastMessageText}
                </div>
                <div className="contact-date">
                  {formatDate(contact.lastMessageDate)}
                </div>
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
              {messages.map((message, index) => {
                console.log("Message sender:", message.sender);
                console.log("Current User ID:", currentUserId);
                console.log("Selected contact ID:", selectedContact?.userId);
                return (
                  <div
                    key={index}
                    className={`message ${
                      selectedContact.userId === message.sender
                        ? "received"
                        : "sent"
                    }`}
                  >
                    {selectedContact.userId === message.sender && (
                      <div className="message-contact-container ">
                        {selectedContact.image !== null ? (
                          <img
                            src={selectedContact.image}
                            alt={`${selectedContact.name}'s avatar`}
                          />
                        ) : (
                          <div className="placeholder">
                            {selectedContact.name[0]}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="message-content">{message.message}</div>
                  </div>
                );
              })}
            </div>
            <div id="chat-input">
              <input
                type="text"
                placeholder="New message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={() => handleSendMessage(newMessage)}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
