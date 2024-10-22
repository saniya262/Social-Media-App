import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Layout from '../components/Layout';
import Header from '../components/Header';

const Settings = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [activeSetting, setActiveSetting] = useState(null);

  const settingsOptions = [
    { id: 'profile', name: 'Profile Settings' },
    { id: 'notification', name: 'Notification Settings' },
    { id: 'privacy', name: 'Privacy Settings' },
    { id: 'account', name: 'Account Settings' },
    { id: 'language', name: 'Language Settings' },
    { id: 'security', name: 'Security Settings' },
    { id: 'app', name: 'App Settings' },
    { id: 'logout', name: 'Logout' },
    { id: 'delete', name: 'Delete Account' },
  ];

  const handleSettingClick = (settingId) => {
    setActiveSetting(settingId);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove user token or data
    navigate('/login'); // Redirect to login page
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('User account deleted');
      // Here, add the logic to delete the user account from your backend.
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-3">
          <Header isVertical={true} />
        </div>

        <div className="col-3 mt-4">
          <h2>Settings</h2>
          <ul className="list-group">
            {settingsOptions.map((option) => (
              <li
                key={option.id}
                className={`list-group-item ${activeSetting === option.id ? 'active' : ''}`}
                onClick={() => handleSettingClick(option.id)}
                style={{ cursor: 'pointer' }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-6 d-flex flex-column mt-5" style={{ height: '100vh' }}>
          {activeSetting === 'profile' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>Profile Settings</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter your username" style={{ width: '50%' }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ width: '50%' }}  />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeSetting === 'notification' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>Notification Settings</h3>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="emailNotifications" />
                <label className="form-check-label" htmlFor="emailNotifications">
                  Email Notifications
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="smsNotifications" />
                <label className="form-check-label" htmlFor="smsNotifications">
                  SMS Notifications
                </label>
              </div>
              <button className="btn btn-primary">Save Settings</button>
            </div>
          )}

          {activeSetting === 'privacy' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>Privacy Settings</h3>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="profileVisibility" />
                <label className="form-check-label" htmlFor="profileVisibility">
                  Make my profile public
                </label>
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          )}

          {activeSetting === 'account' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>Account Settings</h3>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" style={{ width: '50%' }}  />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newPassword" placeholder="Enter new password"style={{ width: '50%' }}  />
              </div>
              <button className="btn btn-primary">Change Password</button>
            </div>
          )}

       
         {activeSetting === 'language' && (
  <div style={{ width: '100%', padding: '20px' }}>
    <h3>Language Settings</h3>
    <div className="mb-3">
      <label htmlFor="language" className="form-label">Select Language</label>
      <select className="form-select select-language" id="language" style={{ width: '40%' }} >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
    <button className="btn btn-primary">Save Language</button>
  </div>
)}
          {activeSetting === 'app' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>App Settings</h3>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="darkMode" />
                <label className="form-check-label" htmlFor="darkMode">
                  Enable Dark Mode
                </label>
              </div>
              <button className="btn btn-primary">Save App Settings</button>
            </div>
          )}

          {activeSetting === 'logout' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>Logout</h3>
              <p>Are you sure you want to logout?</p>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          )}

          {activeSetting === 'delete' && (
            <div style={{ width: '100%', padding: '20px' }}>
              <h3>Delete Account</h3>
              <p>Are you sure you want to delete your account? This action cannot be undone.</p>
              <button className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
