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
  const [messages, setMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentChat, setCurrentChat] = useState("");
  const [currentGroup, setCurrentGroup] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/chat/group`, { withCredentials: true })
      .then(response => {
        console.log(response.data.userGroups);
        const contactsData = response.data.userGroups.map(group => {
          // Check if group.lastMessage exists and has publishDate
          if (group.lastMessage && group.lastMessage.publishDate) {
            return {
              userId: group.chatPartner.userId,
              name: group.chatPartner.userName,
              image: group.chatPartner.userImage,
              lastMessageDate: group.lastMessage.publishDate,
              lastMessageText: group.lastMessage.message,
              chatId: group.chatId
            };
          } else {
            // Handle the case where lastMessage or publishDate is missing
            // You can set default values or handle it as you need
            return {
              userId: group.chatPartner.userId,
              name: group.chatPartner.userName,
              image: group.chatPartner.userImage,
              lastMessageDate: "", // Set default value for lastMessageDate
              lastMessageText: "", // Set default value for lastMessageText
              chatId: group.chatId
            };
          }
        });
        console.log("contactsData", contactsData);
        setContacts(contactsData);
        setSelectedContact(contactsData[0]);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("getMessage useEffect");
      if (currentGroup) {
        axios.get(`${API_URL}/api/chat/messages/${currentGroup}`, { withCredentials: true })
          .then((response) => {
            console.log("getting messages", response.data);
            setMessages(response.data);
          });
      }
    }, 3000);
  
    
    return () => clearInterval(intervalId);
  }, [currentGroup]);
 
  const handleSelectContact = (e) => {
    const receiver = e.target.dataset.chatid || null;
    console.log("receiver", receiver);
    setCurrentChat(receiver);
    // setSelectedContact(contact);
    if (receiver) {
      axios
        .get(`${API_URL}/api/chat/messages/${receiver}`, { withCredentials: true })
        .then((response) => {
          setCurrentGroup(receiver);
          console.log(response.data);
          setMessages(response.data);
        });
    }
  };

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return;
    console.log("qweo", selectedContact);
    const newMsg = {
      receiver: selectedContact.userId,
      message: newMessage,
    };
    console.log(currentChat);
  
    // Include credentials in the request headers
    axios
      .post(`${API_URL}/api/chat/messages/${currentChat}`, newMsg, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
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
              data-chatid = {contact.chatId}
              onClick = {e => handleSelectContact(e)}
              className={`contact ${
                selectedContact && selectedContact.userId === contact.userId
                  ? "selected"
                  : ""
              }`}
              // onClick={() => handleSelectContact(contact)}
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
            <button onClick={() => handleSendMessage(newMessage)}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;