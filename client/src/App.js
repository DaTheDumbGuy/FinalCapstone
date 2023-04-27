import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import DisplayUsers from './components/pages/DisplayUsers';

import './styles/global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/display" element={<DisplayUsers />} />
      </Routes>
    </Router>

  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>{/* Testing route for Server side*/}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Header />} {/* Render the header only if the URL path is not "/login" and /register */}
      <main>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/display" element={<DisplayUsers />} />
        </Routes> */}
      </main>
      {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />} {/* Render the footer only if the URL path is not "/login" and /register */}
    </>
  );
}

export default App;
