import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Header.css';
import { checkLoginStatus } from '../../services/api';
import ProfileToggle from './ProfileToggle';

function Header() {
  const [user, setUser] = useState('');

  useEffect(() => {
    checkLoginStatus()
      .then((member_id) => {
        setUser(member_id);
      })
      .catch((error) => {
        console.log('User not logged in:', error);
      });

    // Scroll to the #about section if the current URL contains it
    if (window.location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <header>
      <nav className='nav-container'>
        <ul className='nav'>
          <li>
            <Link to="/" className='navLink'>Home</Link>
          </li>
          <li>
            <a href={window.location.pathname === '/' ? '#about' : `${window.location.origin}/#about`}>About</a>
          </li>
          <div><h1>LifeHome Mindanao</h1> </div>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            {user ? <ProfileToggle /> : <Link to="/login" className='navLink'>Login</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
