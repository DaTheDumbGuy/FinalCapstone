import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../styles/common/ProfileToggle.css';
import { logout } from '../../services/api';

function ProfileToggle() {
    const handleLogout = () => {
        logout()
            .then(response => {
                console.log(response.data); // should print 'Session ended'
                window.location.href = '/';
            })
            .catch(error => {
                console.log('Error ending session:', error);
            });
    };
    const accountRedirect = () => {
        window.location.href = '/account';
    }

    return (
        <>
            < div className="btn-group" >
                <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    <AccountCircleIcon fontSize='large' />
                </button>
                <ul className="dropdown-menu dropdown-menu-center text-end">
                    <li><button className="dropdown-item" type="button" onClick={accountRedirect}>My Profile</button></li>
                    <li><button className="dropdown-item" type="button">Donation</button></li>
                    <li><button className="dropdown-item" type="button" onClick={handleLogout}>Log Out</button></li>
                </ul>
            </div >
        </>
    );
}

export default ProfileToggle;

