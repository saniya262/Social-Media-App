import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Messages = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', pic: 'https://i.pravatar.cc/150?img=1', messageCount: 3, messages: [{ text: 'Hello, how are you?', sender: 'receiver' }, { text: 'I am good, thanks!', sender: 'sender' }] },
    { id: 2, name: 'Jane Smith', pic: 'https://i.pravatar.cc/150?img=2', messageCount: 5, messages: [{ text: 'Hey! Long time no see.', sender: 'receiver' }] },
    { id: 3, name: 'Alice Johnson', pic: 'https://i.pravatar.cc/150?img=3', messageCount: 2, messages: [{ text: 'Can you send me that file?', sender: 'receiver' }] },
    { id: 4, name: 'Bob Brown', pic: 'https://i.pravatar.cc/150?img=4', messageCount: 1, messages: [{ text: 'Good morning!', sender: 'receiver' }] },
    { id: 5, name: 'Emily Davis', pic: 'https://i.pravatar.cc/150?img=5', messageCount: 0, messages: [] },
    { id: 1, name: 'John Doe', pic: 'https://i.pravatar.cc/150?img=1', messageCount: 3, messages: [{ text: 'Hello, how are you?', sender: 'receiver' }, { text: 'I am good, thanks!', sender: 'sender' }] },
    { id: 2, name: 'Jane Smith', pic: 'https://i.pravatar.cc/150?img=2', messageCount: 5, messages: [{ text: 'Hey! Long time no see.', sender: 'receiver' }] },
    { id: 3, name: 'Alice Johnson', pic: 'https://i.pravatar.cc/150?img=3', messageCount: 2, messages: [{ text: 'Can you send me that file?', sender: 'receiver' }] },
    { id: 4, name: 'Bob Brown', pic: 'https://i.pravatar.cc/150?img=4', messageCount: 1, messages: [{ text: 'Good morning!', sender: 'receiver' }] },
    { id: 5, name: 'Emily Davis', pic: 'https://i.pravatar.cc/150?img=5', messageCount: 0, messages: [] },
    { id: 1, name: 'John Doe', pic: 'https://i.pravatar.cc/150?img=1', messageCount: 3, messages: [{ text: 'Hello, how are you?', sender: 'receiver' }, { text: 'I am good, thanks!', sender: 'sender' }] },
    { id: 2, name: 'Jane Smith', pic: 'https://i.pravatar.cc/150?img=2', messageCount: 5, messages: [{ text: 'Hey! Long time no see.', sender: 'receiver' }] },
    { id: 3, name: 'Alice Johnson', pic: 'https://i.pravatar.cc/150?img=3', messageCount: 2, messages: [{ text: 'Can you send me that file?', sender: 'receiver' }] },
    { id: 4, name: 'Bob Brown', pic: 'https://i.pravatar.cc/150?img=4', messageCount: 1, messages: [{ text: 'Good morning!', sender: 'receiver' }] },
    { id: 5, name: 'Emily Davis', pic: 'https://i.pravatar.cc/150?img=5', messageCount: 0, messages: [] },
    // Add more users as needed...
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessage, setNewMessage] = useState(''); // State for new message

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (selectedUser && newMessage.trim() !== '') {
      const updatedUsers = users.map((user) => {
        if (user.id === selectedUser.id) {
          return {
            ...user,
            messages: [...user.messages, { text: newMessage, sender: 'sender' }], // Add new message
            messageCount: user.messageCount + 1, // Update message count
          };
        }
        return user;
      });

      setUsers(updatedUsers); // Update state with new message
      setSelectedUser({
        ...selectedUser,
        messages: [...selectedUser.messages, { text: newMessage, sender: 'sender' }], // Update selected user
      });
      setNewMessage(''); // Clear input field
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-3">
          <Header isVertical={true} />
        </div>

        <div className="col-3 message-list">
          <h2>Your Contacts</h2>
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item d-flex align-items-center" onClick={() => handleUserClick(user)} style={{ cursor: 'pointer' }}>
                <img src={user.pic} alt={user.name} className="rounded-circle" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                <div>
                  <strong>{user.name}</strong>
                  <div className="text-muted">{user.messageCount} messages</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-6 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#333', height: '100vh', color: '#fff' }}>
          {selectedUser ? (
            <div style={{ width: '100%' }}>
              <h3 className="text-center">Chat with {selectedUser.name}</h3>
              <div className="chat-box" style={{ padding: '20px', overflowY: 'auto', height: '65vh', backgroundColor: '#444', borderRadius: '8px', marginBottom: '20px' }}>
                {selectedUser.messages.length > 0 ? (
                  selectedUser.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`d-flex ${msg.sender === 'sender' ? 'justify-content-end' : 'justify-content-start'}`} // Align sender's message to the right and receiver's to the left
                      style={{ marginBottom: '10px' }}
                    >
                      <p
                        style={{
                          padding: '10px 15px',
                          borderRadius: '15px',
                          maxWidth: '60%', // Adjust message width
                          backgroundColor: msg.sender === 'sender' ? '#0d6efd' : '#555', // Blue for sender, gray for receiver
                          color: '#fff',
                          wordWrap: 'break-word', // Handle long messages
                        }}
                      >
                        {msg.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No messages yet.</p>
                )}
              </div>
              <div className="message-input" style={{ display: 'flex', gap: '10px', padding: '10px 20px', backgroundColor: '#333' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)} // Handle input changes
                  style={{ backgroundColor: '#555', color: '#fff', border: 'none', borderRadius: '8px' }}
                />
                <button className="btn btn-primary" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <i className="bi bi-chat" style={{ fontSize: '48px' }}></i> {/* Chat icon */}
              <p style={{ fontSize: '24px' }}>Chat</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
