import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Messages.css";
import Navbar from "../navbar/Navbar";

const API_URL = "http://localhost:8080";

const formatDate = (dateString) => {
  if (!dateString) return "";

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

  const chatMessagesRef = useRef(null); 

  useEffect(() => {
    axios
      .get(`${API_URL}/api/chat/group`, { withCredentials: true })
      .then((response) => {
        const contactsData = response.data.userGroups.map((group) => {
          const lastMessageDate = group.lastMessage?.publishDate || ""; 
          return {
            userId: group.chatPartner.userId,
            name: group.chatPartner.userName,
            image: group.chatPartner.userImage,
            lastMessageDate: lastMessageDate ? new Date(lastMessageDate) : null,
            lastMessageText: group.lastMessage?.message || "",
            chatId: group.chatId,
          };
        });

        contactsData.sort((a, b) => {
          if (!a.lastMessageDate && !b.lastMessageDate) return 0; 
          if (!a.lastMessageDate) return 1;
          if (!b.lastMessageDate) return -1; 

          return b.lastMessageDate - a.lastMessageDate;
        });

        setContacts(contactsData);
        if (contactsData.length > 0) {
          setSelectedContact(contactsData[0]);
          setCurrentGroup(contactsData[0].chatId);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

   
    const intervalId = setInterval(() => {
      refreshLastMessage();
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchMessages = () => {
      if (currentGroup) {
        axios
          .get(`${API_URL}/api/chat/messages/${currentGroup}`, {
            withCredentials: true,
          })
          .then((response) => {
            console.log("Messages fetched: ", response.data);
            setMessages(response.data);
          })
          .catch((error) => {
            console.error("Error fetching messages:", error);
          });
      }
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 3000);

    return () => clearInterval(intervalId);
  }, [currentGroup]);


  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSelectContact = (e) => {
    const receiver = e.currentTarget.dataset.chatid || null;
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
        console.log("Sent message:", response.data);
        console.log("Selected Contact ID:", selectedContact.userId);
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const refreshLastMessage = () => {
    contacts.forEach((contact) => {
      axios
        .get(`${API_URL}/api/chat/messages/${contact.chatId}`, {
          withCredentials: true,
        })
        .then((response) => {
          const lastMessage = response.data[response.data.length - 1];
          setContacts((prevContacts) =>
            prevContacts.map((prevContact) =>
              prevContact.userId === contact.userId
                ? { ...prevContact, lastMessageText: lastMessage?.message || "" }
                : prevContact
            )
          );
        })
        .catch((error) => {
          console.error("Error fetching last message:", error);
        });
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
                onClick={handleSelectContact}
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
          Conversation with {selectedContact ? selectedContact.name : "..."}
        </div>
        <div id="chatbox-container">
          <div id="chat-window">
            <div id="chat-messages" ref={chatMessagesRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.sender === null ? "received" : "sent"
                  }`}
                >
                  {message.sender === null && (
                    <div className="message-avatar">
                      <div className="message-avatar-text">
                        {selectedContact && selectedContact.name[0]}
                      </div>
                    </div>
                  )}
                        <div className="message-content">{message.message}</div>
                  {console.log("Message sender:", message.sender)}
                  {console.log("Message receiver:", message.receiver)}
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
    </>
  );
}

export default Messages;