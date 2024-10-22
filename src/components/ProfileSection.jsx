// src/components/ProfileSection.jsx
import React from 'react';

const ProfileSection = ({ 
  profilePic, 
  dummyProfilePic, 
  triggerFileInput, 
  postCount, 
  friendCount, 
  userName, 
  bio,
  showEditButton,
  isHomePage // New prop to determine if it's displayed on the home page
}) => {
  return (
    <div className={`text-center mt-4 ${isHomePage ? 'profile-background' : ''}`}>
      <h2>Your Profile</h2>

      {/* Profile Picture Section */}
      <div className="profile-pic-section mt-4 mb-3">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={profilePic ? profilePic : dummyProfilePic}
            alt="Profile"
            className="profile-pic"
            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={triggerFileInput}
          />
        </div>
      </div>

      <div className="mb-1">
        <h3>{userName}</h3>
      </div>

      <div className="counts-section d-flex justify-content-center mb-1">
        <div className="me-4">
          <strong>Posts:</strong> {postCount}
        </div>
        <div>
          <strong>Friends:</strong> {friendCount}
        </div>
      </div>
      <p>{bio}</p>

      {showEditButton && (
        <button
          className="btn btn-outline-secondary"
          onClick={triggerFileInput}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileSection;
