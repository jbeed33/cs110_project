import React, { useState } from "react";
import "./Messages.css";

const mockContacts = [
    { userId: "1", name: "John Smith", status: "Hey, I am available...", lastMessageDate: "2024-05-28T12:00:00Z" },
    { userId: "2", name: "Albert H.", status: "Hey, I am available...", lastMessageDate: "2024-05-25T14:00:00Z" },
];

const mockMessages = {
    "1": [
        {
            messageId: "uuid1",
            sender: "John Smith",
            receiver: "Me",
            timestamp: "2023-05-27T12:00:00Z",
            message: "Hey, I am available at 2pm tomorrow. Does that work for you?",
        },
        {
            messageId: "uuid2",
            sender: "Me",
            receiver: "John Smith",
            timestamp: "2023-05-27T12:05:00Z",
            message: "Yes, that works!",
        },
        {
            messageId: "uuid3",
            sender: "John Smith",
            receiver: "Me",
            timestamp: "2023-05-27T12:10:00Z",
            message: "Great, see you then.",
        },
    ],
    "2": [
        {
            messageId: "uuid4",
            sender: "Albert H.",
            receiver: "Me",
            timestamp: "2023-05-26T14:00:00Z",
            message: "Hey, I am available at 3pm tomorrow. Does that work for you?",
        },
    ],
};

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
        return date.toLocaleDateString(undefined, { weekday: 'long' });
    }
};

function Messages() {
    const [contacts] = useState(mockContacts);
    const [messages, setMessages] = useState(mockMessages);
    const [selectedContact, setSelectedContact] = useState(mockContacts[0]);
    const [newMessage, setNewMessage] = useState("");

    const handleSelectContact = (contact) => {
        setSelectedContact(contact);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return;
        const newMsg = {
            messageId: `uuid${new Date().getTime()}`, // Generating a mock UUID
            sender: "Me",
            receiver: selectedContact.name,
            timestamp: new Date().toISOString(),
            message: newMessage,
        };
        setMessages({
            ...messages,
            [selectedContact.userId]: [...(messages[selectedContact.userId] || []), newMsg],
        });
        setNewMessage("");
    };

    return (
        <div id="messages">
            <div id="messages-form-container">
                <h1 id="form-title">&#9067; Messages</h1>
                <div id="sidebar">
                    {contacts.map(contact => (
                        <div
                            key={contact.userId}
                            className={`contact ${selectedContact.userId === contact.userId ? "selected" : ""}`}
                            onClick={() => handleSelectContact(contact)}
                        >
                            <div className="contact-avatar"></div>
                            <div className="contact-info">
                                <div className="contact-name">{contact.name}</div>
                                <div className="contact-status">{contact.status}</div>
                            </div>
                            <div className="contact-date">{formatDate(contact.lastMessageDate)}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="chat-header">Conversation with {selectedContact.name}</div>
            <div id="chatbox-container">
                <div id="chat-window">
                    <div id="chat-messages">
                        {(messages[selectedContact.userId] || []).map((message, index) => (
                            <div key={index} className={`message ${message.sender === "Me" ? "sent" : "received"}`}>
                                {message.sender !== "Me" && <div className="message-avatar"></div>}
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