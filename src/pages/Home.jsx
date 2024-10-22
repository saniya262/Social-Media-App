// src/pages/Home.jsx
import React, { useState } from 'react';
import Stories from '../components/Stories';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import Activities from '../components/Activities'; // Import the Activities component

const Home = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [stories, setStories] = useState(() => {
    const savedStories = localStorage.getItem('stories');
    return savedStories ? JSON.parse(savedStories) : [];
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const dummyProfilePic = 'https://i.pinimg.com/736x/46/44/cf/4644cf3ceb6519a304f5e5f70ad4cab4.jpg';

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setModalOpen(false);
  };

  const handleNewStory = (newStory) => {
    if (newStory) {
      const updatedStories = [...stories, newStory];
      setStories(updatedStories);
      localStorage.setItem('stories', JSON.stringify(updatedStories));
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className="row">
        <Header onOpenModal={handleOpenModal} />
      </div>
      <div className='row'>
        <div className="col-3 fixed-column d-flex justify-content-center"> {/* Fixed left column */}
          <ProfileSection 
            profilePic={profilePic}
            dummyProfilePic={dummyProfilePic}
            triggerFileInput={handleProfilePicUpload}
            postCount={posts.length}
            friendCount={10}
            userName="san sanvi"
            bio="Web Developer, Coffee Lover, and Traveler"
            showEditButton={false}
            isHomePage={true}
          />
        </div>
        <div className="col-6 scrollable-column d-flex flex-column align-items-center"> {/* Scrollable middle column */}
          <div className="mt-3">
            <Stories stories={stories} onNewStory={handleNewStory} />
          </div>

          <div className="row mt-3 w-100 justify-content-center">
            {posts.map((post, index) => (
              <div key={index} className="col-12 col-md-8 mb-4">
                <Post post={post} />
              </div>
            ))}
          </div>

          <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Post</h5>
                  <button type="button" className="close" onClick={handleCloseModal}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <PostForm onPost={handleNewPost} />
                </div>
              </div>
            </div>
          </div>

          {isModalOpen && <div className="modal-backdrop fade show"></div>}
        </div>
        <div className="col-3 fixed-column "> {/* Fixed right column */}
          <Activities /> {/* Add the Activities component here */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
