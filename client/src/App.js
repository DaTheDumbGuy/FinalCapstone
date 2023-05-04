import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import DisplayUsers from './components/pages/DisplayUsers';
import PageNotFound from './components/pages/PageNotFound';
import { checkLoginStatus } from './services/api';
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkLoginStatus()
      .then((member_id) => {
        setUser(member_id);
      })
      .catch((error) => {
        console.log('User not logged in:', error);
      });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainContent />} />
        {!user &&
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        }
        <Route path="*" element={<PageNotFound />} /> {/* Redirect to home page for unknown routes */}
        <Route path="/display" element={<DisplayUsers />} />
      </Routes>
    </Router>

  );
}

function MainContent() {

  return (
    <>
      <Header />
      <main>
        {/* Please put here the content  */}
      </main>
      <Footer />

    </>
  );
}

export default App;
