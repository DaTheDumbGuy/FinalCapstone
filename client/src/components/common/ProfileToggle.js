import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../styles/common/ProfileToggle.css';

function ProfileToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Implement logout functionality here
    };

    return (
        <div className='profileToggle'>
            <button onClick={handleToggle}>
                <AccountCircleIcon fontSize='large' />
            </button>
            {isOpen && (
                <div className='dropdown'>
                    <ul>
                        <li>
                            <Link to='/account'>Account</Link>
                        </li>
                        <li>
                            <Link to='/settings'>Settings</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProfileToggle;

