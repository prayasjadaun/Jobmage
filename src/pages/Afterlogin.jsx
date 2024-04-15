import React, { useState } from 'react';
import './afterlogin.css';
import Sidebar from '../component/sidebar/Sidebar';
import Jobs from './Jobs/Jobs';

import Feeds from './feeds/Feeds';
import Resources from './resources/Resources';
import Messages from './Messages/Messages';
import Settings from './Setttings/Settings';
import ChatBot from './ChatBot/ChatBot';

function Afterlogin() {
  const [selectedPage, setSelectedPage] = useState('jobs'); 

  const renderPage = () => {
    switch (selectedPage) {
      case 'jobs':
        return <Jobs />;
      case 'resources':
        return <Resources />;
      case 'feeds':
        return <Feeds />;
      case 'messages':
        return <Messages />;
      case 'chatbot':
        return <ChatBot />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className='afterlogin'>
      <Sidebar setSelectedPage={setSelectedPage} />
      <div className='page-content'>
        {renderPage()}
      </div>
    </div>
  );
}

export default Afterlogin;
