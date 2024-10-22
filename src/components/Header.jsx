import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';


const Header = ({ onOpenModal, isVertical }) => {
  const location = useLocation();
  const [loggedOut, setLoggedOut] = useState(false); // State to handle redirection after logout

  // Function to handle logout action
  const handleLogout = () => {
    // Show confirmation dialog before logging out
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      // Clear tokens or perform necessary logout logic
      localStorage.removeItem('authToken'); // Example: remove auth token
      console.log('User logged out');
      
      // Trigger the redirection to the login page
      setLoggedOut(true);
    }
  };

  // Redirect the user to login page if logged out
  if (loggedOut) {
    return <Navigate to="/" replace />;
  }

  return (
    <header className={`header p-3 ${isVertical ? 'vh-100' : 'mx-4'}`} style={{ width: '95%' }}>
      <div className={`d-flex ${isVertical ? 'flex-column align-items-start' : 'flex-row align-items-center justify-content-between'}`}>


      <img src={logo} alt="Loopster Logo" className="mb-4" style={{ width: '250px' }} />


        <input type="text" className="form-control my-2" placeholder="Search..." style={{ width: "250px" }} />
        <nav className={`nav ${isVertical ? 'flex-column' : 'flex-row'}`}>
          <Link to="/home" className="btn my-1 d-flex align-items-center" style={{ color: "white" }} title="Home">
            <i className="fas fa-home icon-black"></i> {/* Home icon */}
            {isVertical && <span className="ms-2">Home</span>}
          </Link>
          <Link to="/messages" className="btn my-1 d-flex align-items-center" style={{ color: "white" }} title="Messages">
            <i className="fas fa-envelope icon-black"></i> {/* Envelope icon */}
            {isVertical && <span className="ms-2">Messages</span>}
          </Link>
          <button className="btn my-1 d-flex align-items-center" style={{ color: "white" }} onClick={onOpenModal} title="Add Post">
            <i className="fas fa-plus icon-black"></i> {/* Plus icon */}
            {isVertical && <span className="ms-2">Add Post</span>}
          </button>
          <Link to="/profile" className="btn my-1 d-flex align-items-center" style={{ color: "white" }} title="Profile">
            <i className="fas fa-user icon-black"></i> {/* User icon */}
            {isVertical && <span className="ms-2">Profile</span>}
          </Link>

          {location.pathname === '/profile' && (
            <Link to="/settings" className="btn my-1 d-flex align-items-center" style={{ color: "white" }} title="Settings">
              <i className="fas fa-cog icon-black"></i> {/* Settings icon */}
              {isVertical && <span className="ms-2">Settings</span>}
            </Link>
          )}

          <button className="btn my-1 d-flex align-items-center" style={{ color: "white" }} onClick={handleLogout} title="Logout">
            <i className="fas fa-sign-out-alt icon-black"></i> {/* Logout icon */}
            {isVertical && <span className="ms-2">Logout</span>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
