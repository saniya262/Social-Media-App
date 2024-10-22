import React, { useState } from 'react';

const CommentSection = ({ onComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input 
        type="text" 
        className="form-control me-2" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Add a comment..." 
        required 
      />
      <button type="submit" className="btn btn-outline-dark">Post</button>
    </form>
  );
};

export default CommentSection; // Ensure this is here
