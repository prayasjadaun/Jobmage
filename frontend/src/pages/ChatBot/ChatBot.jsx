import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css'; // Make sure to create this CSS file

const ChatBot = ({ isOpen, toggleChat }) => {
  const [messages, setMessages] = useState([
    { text: 'Welcome! How can I help you today?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    setMessages([
      ...messages,
      { text: inputValue, isBot: false },
      { text: 'Sure, let me get that information for you.', isBot: true } // Simulated bot response
    ]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="chatbot-header">
        <h2>ChatBot</h2>
        <button onClick={toggleChat}>X</button>
      </div>
      <div className="chatbot-body">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
