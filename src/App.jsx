import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './component/login/SignUp'
import Login from './component/login/Login'
import Sidebar from './component/sidebar/Sidebar'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
