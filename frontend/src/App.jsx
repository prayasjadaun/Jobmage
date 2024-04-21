import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './component/login/SignUp';
import Login from './component/login/Login';
import Sidebar from './component/sidebar/Sidebar';
import Afterlogin from './pages/Afterlogin';
import JobDetails from './pages/Jobs/jobs components/JobDetails';

function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
