import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './component/login/SignUp';
import Login from './component/login/Login';
import Sidebar from './component/sidebar/Sidebar';
import Afterlogin from './pages/Afterlogin';
import JobDetails from './pages/Jobs/jobs components/JobDetails'; 
import PostJobForm from './pages/adminPanel/PostJob';
import UserList from './pages/adminPanel/user/userList';
import JobManagement from './pages/adminPanel/jobs/JobManagement';
import AdminPanel from './pages/adminPanel/AdminPanel';
import ChatBot from './pages/ChatBot/ChatBot';
import ChatIcon from './pages/ChatBot/ChatIcon'; 

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
          <Route exact path="/after" element={<Afterlogin />} />
          <Route exact path="/job/:id" element={<JobDetails />} /> 
          <Route exact path="/ad" element={<AdminPanel />} /> 
          <Route exact path="/postJob" element={<PostJobForm />} /> 
          <Route exact path="/userList" element={<UserList />} /> 
          <Route exact path="/jobManage" element={<JobManagement />} /> 
        </Routes>
        {isChatOpen && <ChatBot isOpen={isChatOpen} toggleChat={toggleChat} />}
        <ChatIcon toggleChat={toggleChat} />
      </div>
    </Router>
  );
}

export default App;
