import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/pages/Login';
import './styles/global.css'

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Header />} {/* Render the header only if the URL path is not "/login" */}
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {location.pathname !== '/login' && <Footer />} {/* Render the footer only if the URL path is not "/login" */}
    </>
  );
}

export default App;
