import React, { useState } from 'react';
import './ChatIcon.css';

const ChatIcon = ({ toggleChat }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    toggleChat();
  };

  return (
    <div className={`chat-icon ${isRotated ? 'rotated' : ''}`} onClick={handleClick}>
      <img onClick={handleClick} src="https://png.pngtree.com/png-clipart/20230122/original/pngtree-chatbot-customer-service-clipart-element-png-image_8925859.png" alt="Chat Icon" />
    </div>
  );
};

export default ChatIcon;
