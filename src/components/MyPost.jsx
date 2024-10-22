// src/components/MyPosts.jsx
import React from 'react';

// Sample posts data (replace this with actual data)
const posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1', image: 'https://i.pinimg.com/564x/ec/ea/a8/eceaa84e3e78b081fc908591c8b416d1.jpg' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2', image: 'https://i.pinimg.com/736x/d4/b2/47/d4b247bf0fa32a746b0e284531b61f03.jpg' },
  { id: 3, title: 'Post 3', content: 'Content of Post 3', image: 'https://i.pinimg.com/enabled/564x/e2/b5/13/e2b5138297464a06f7ab8193f8754368.jpg' },
  { id: 4, title: 'Post 4', content: 'Content of Post 4', image: 'https://i.pinimg.com/736x/3c/d8/e1/3cd8e1954e26a88bcced2fe2bc7f1c3f.jpg' },
  { id: 5, title: 'Post 5', content: 'Content of Post 5', image: 'https://i.pinimg.com/736x/5d/76/b0/5d76b0a531ae76793c10e6b51525046b.jpg' },
  { id: 6, title: 'Post 6', content: 'Content of Post 6', image: 'https://i.pinimg.com/736x/65/fe/c6/65fec68ea4d89e193d441dee103c5712.jpg' },
];

const MyPosts = () => {
  return (
    <div className="mt-4">
      <h3>My Posts</h3>
      <div className="row">
        {posts.map(post => (
          <div className="col-4 mb-4" key={post.id}>
            <div className="card">
              <img src={post.image} className="card-img-top fixed-height" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                
                {/* Button Section with Icons Only */}
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-link p-0" title="Like">
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <button className="btn btn-link p-0" title="Comment">
                    <i className="fas fa-comment"></i>
                  </button>
                  <button className="btn btn-link p-0" title="Share">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
