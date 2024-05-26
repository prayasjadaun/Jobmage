import React from 'react';
import './ChatBot.css'; // Make sure to create this CSS file

const ChatBot = ({ isOpen, toggleChat }) => {
  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="chatbot-header">
        <h2>ChatBot</h2>
        <button onClick={toggleChat}>X</button>
      </div>
      <div className="chatbot-body">
        <p>Welcome! How can I help you today?</p>
      </div>
    </div>
  );
};

export default ChatBot;
