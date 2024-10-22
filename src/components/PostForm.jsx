// src/components/PostForm.jsx
import React, { useState } from 'react';

const PostForm = ({ onPost }) => {
  const [text, setText] = useState('');
  const [media, setMedia] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (media && media.size > 1024 * 1024 * 60) {
      alert("Video must be 60 seconds or shorter.");
      return;
    }

    const newPost = { id: Date.now(), text, media };
    onPost(newPost);
    
    setText('');
    setMedia(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files[0])}
        />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default PostForm;
