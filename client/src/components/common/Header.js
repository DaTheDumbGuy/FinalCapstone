import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Header.css';

//navigation(header) here
function Header() {
  return (
    <div>
      <nav>
        <ul className='nav'>
          <li>
            <Link to="/" className='navLink'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='navLink'>About</Link>
          </li>
          <div><h1>Life Home Center</h1> </div>
          <li>
            {/* Testing, you can remove this */}
            <Link to="/contact" className='navLink'>Contact</Link>
          </li>
          <li>
            <Link to="/login" className='navLink'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
