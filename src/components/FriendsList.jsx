// src/components/FriendsList.jsx
import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <div>
      <h3>Friends List</h3>
      <ul className="list-unstyled">
        {friends.map((friend) => (
          <li key={friend.id} className="d-flex align-items-center mb-2">
            <img
              src={friend.profilePic}
              alt={friend.name}
              style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }} // Styling for the image
            />
            <span>{friend.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
