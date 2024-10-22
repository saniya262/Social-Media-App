// src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import PostForm from './PostForm';

const Layout = ({ children, isVertical }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [media, setMedia] = useState(null); // State to hold the selected media file

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setMedia(null); // Reset the media when the modal is closed
  };

  const handleMediaChange = (file) => {
    setMedia(file); // Set the media file to display
  };

  return (
    <div>
     

      <div className=" mt-0"> {/* Add margin-top to avoid overlap with header */}
        {children}
      </div>

      {/* Modal for Adding Post */}
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
              <PostForm onMediaChange={handleMediaChange} onClose={handleCloseModal} />
              {media && (
                <div className="mt-3">
                  <h6>Selected Media:</h6>
                  {media.type.startsWith('video') ? (
                    <video src={URL.createObjectURL(media)} controls style={{ width: '100%' }} />
                  ) : (
                    <img src={URL.createObjectURL(media)} alt="Selected" style={{ width: '100%' }} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay for modal */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Layout;
