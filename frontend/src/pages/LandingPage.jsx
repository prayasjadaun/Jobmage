import React, { useState } from 'react';
import Navbar from '../component/navbar/Navbar';
import Home from '../component/home/Home';
import Services from '../component/home/Services';
import Contact from '../component/Contact/Contact';
import Footer from '../component/footer/Footer';
import ChatBot from './ChatBot/ChatBot'; 
import ChatIcon from './ChatBot/ChatIcon'; 

function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
      <ChatIcon toggleChat={toggleChat} />
      <ChatBot isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );
}

export default LandingPage;
