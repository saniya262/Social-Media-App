// src/components/Activities.jsx
import React from 'react';

const Activities = () => {
  // Sample data for friend suggestions and notifications with images
  const friendSuggestions = [
    { id: 1, name: 'John Doe', image: 'https://i.pinimg.com/enabled/564x/95/fa/a4/95faa433e726a3e7e221a31e25a08bd1.jpg' },
    { id: 2, name: 'Jane Smith', image: 'https://i.pinimg.com/736x/21/ec/7b/21ec7bab556921b27f93f2a4de73530d.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://i.pinimg.com/564x/5d/16/01/5d160171852bea0edb6907c1208fffa9.jpg' },
  ];

  const notifications = [
    { id: 1, message: 'You have a new friend request from John Doe', image: 'https://i.pinimg.com/736x/98/2a/d0/982ad0eb0fe8faee513b9a54ed24fc09.jpg' },
    { id: 2, message: 'Jane Smith liked your post', image: 'https://i.pinimg.com/enabled/564x/d0/a7/f8/d0a7f822c53ccb561445f2081782a60b.jpg' },
    { id: 3, message: 'Alice Johnson commented on your photo', image: 'https://i.pinimg.com/enabled/564x/8f/d0/39/8fd0398dd8b5bd385ac5ebfa082ff553.jpg' },
  ];

  return (
    <div className="activities-section " style={{width:"90%"}}>
      <h5>Friend Suggestions</h5>
      <ul className="list-group mb-3">
        {friendSuggestions.map((friend) => (
          <li key={friend.id} className="list-group-item d-flex align-items-center">
            <img src={friend.image} alt={friend.name} className="rounded-circle" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            {friend.name}
            <button className="btn btn-primary btn-sm ms-2">Add Friend</button>
          </li>
        ))}
      </ul>

      <h5>Notifications</h5>
      <ul className="list-group">
        {notifications.map((notification) => (
          <li key={notification.id} className="list-group-item d-flex align-items-center">
            <img src={notification.image} alt="Notification" className="rounded-circle" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
