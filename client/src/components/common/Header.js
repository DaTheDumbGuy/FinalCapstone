import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common/Header.css';

//navigation(header) here
function Header() {
  return (
    <div>
      <nav>
        <h2>Logo</h2>
        <ul className='navLinks'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Testing */}
            <Link to="/users">DisplayUsers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
