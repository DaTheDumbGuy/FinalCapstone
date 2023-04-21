import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Header.css';

//navigation(header) here
function Header() {
  return (
    <header>
      <nav>
        <ul className='nav'>
          <li>
            <a href='#' className='navLink'>Home</a>
          </li>
          <li>
            <a href='#' className='navLink'>About</a>
          </li>
          <div><a href='#'>Life Home Center</a> </div>
          <li>
            <a href='#' className='navLink'>Contact</a>
          </li>
          <li>
            <Link to="/login" className='navLink'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
