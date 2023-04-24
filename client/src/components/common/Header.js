import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Header.css';
import { checkLoginStatus } from '../../services/api';
import ProfileToggle from './ProfileToggle';

//navigation(header) here
function Header() {
  const [user, setUser] = useState('');
  useEffect(() => {
    checkLoginStatus()
      .then((member_id) => {
        // history.push(`/profile/${member_id}`);
        setUser(member_id);
      })
      .catch((error) => {
        console.log('User not logged in:', error);
      });
  }, []);

  return (
    <header>
      <nav>
        <ul className='nav'>
          <li>
            <Link to="/" className='navLink'>Home</Link>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <div><h1>LifeHome Mindanao</h1> </div>
          <li>
            {/* Testing, you can remove this */}
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
