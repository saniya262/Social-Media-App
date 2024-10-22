// src/pages/Profile.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import FriendsList from '../components/FriendsList';
import MyPosts from '../components/MyPost'; // Import the MyPosts component

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const dummyProfilePic = 'https://i.pinimg.com/736x/46/44/cf/4644cf3ceb6519a304f5e5f70ad4cab4.jpg';

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    document.getElementById('profilePicInput').click();
  };

  const userName = "san sanvi";
  const bio = "Web Developer, Coffee Lover, and Traveler";
  const postCount = 5;
  const friendCount = 10;

  const friends = [
    { id: 1, name: 'Alice Smith', profilePic: 'https://i.pinimg.com/enabled/564x/75/b1/e9/75b1e91f65d9a5b7ffbdf2883486212f.jpg' },
    { id: 2, name: 'Bob Johnson', profilePic: 'https://i.pinimg.com/736x/31/77/51/317751cb1845605b0de7c01413fe7b61.jpg' },
    { id: 3, name: 'Charlie Brown', profilePic: 'https://i.pinimg.com/enabled/564x/88/01/43/880143bec2b7d2c341a04cfb0e4e01df.jpg' },
    { id: 4, name: 'David Wilson', profilePic: 'https://i.pinimg.com/736x/ea/77/4b/ea774bb2f91157987fc3ad7a91b6bc1f.jpg' },
  ];

  return (
    <Layout>
      <div className="row">
        <div className="col-2">
          <Header isVertical={true} />
        </div>
        <div className="col-7 overflow-scroll ms-4" style={{ maxHeight: 'calc(100vh - 20px)', overflowY: 'auto' }}>
          {/* Profile Section */}
          <div className="row">
            <div className="col-6">
              <ProfileSection 
                profilePic={profilePic}
                dummyProfilePic={dummyProfilePic}
                triggerFileInput={triggerFileInput}
                postCount={postCount}
                friendCount={friendCount}
                userName={userName}
                bio={bio}
                showEditButton={true} // Show edit button on profile page
              />
            </div>
          </div>

          {/* My Posts Component */}
          <MyPosts />

          <p className='text-center'>@LOOPSTER.com</p>
        </div>
        <div className="col-2 mt-4 ms-5">
          {/* Friends List */}
          <FriendsList friends={friends} />
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleProfilePicUpload}
        style={{ display: 'none' }}
        id="profilePicInput"
      />
    </Layout>
  );
};

export default Profile;
