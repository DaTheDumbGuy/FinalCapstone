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
            <Link to="/home" className='navLink'>Home</Link>
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
            <Link to="/login" className='navLink'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
