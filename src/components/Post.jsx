import React, { useState } from 'react';
import CommentSection from './CommentSection';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [isCommentBoxVisible, setCommentBoxVisible] = useState(false);

  const handleLike = () => setLikes(likes + 1);
  const handleComment = (comment) => setComments([...comments, comment]);
  const handleShare = () => alert('Post shared!'); // Placeholder for share functionality
  const toggleCommentBox = () => setCommentBoxVisible(!isCommentBoxVisible); // Toggle comment box

  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        {/* Display media based on post type */}
        <img
          src="https://i.pinimg.com/736x/bf/05/ad/bf05ad37992805d21c1b142af0edf8c0.jpg"
          alt="Post"
          className="img-fluid"
        />

        {/* Display the description */}
        {post.description && <p className="mt-2">{post.description}</p>}

        {/* Buttons: Like, Comment, and Share with Icons */}
        <div className="d-flex justify-content-start mt-2">
          <button className="btn btn-primary" onClick={handleLike}>
            <i className="bi bi-hand-thumbs-up"></i> {/* Like icon */}
            <span className="ms-1">{likes}</span> {/* Display the number of likes */}
          </button>
          
          <button className="btn btn-primary ms-2" onClick={toggleCommentBox}>
            <i className="bi bi-chat"></i> {/* Comment icon */}
          </button>

          <button className="btn btn-primary ms-2" onClick={handleShare}>
            <i className="bi bi-share"></i> {/* Share icon */}
          </button>
        </div>

        {/* Show Comment input box when Post Comment is clicked */}
        {isCommentBoxVisible && (
          <div className="mt-3">
            <CommentSection onComment={handleComment} />
          </div>
        )}

        {/* Display comments */}
        <div className="mt-3">
          {comments.map((comment, idx) => (
            <p key={idx} className="border-bottom pb-2">{comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
