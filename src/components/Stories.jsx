import React from 'react';

// Array of dummy images for stories
const dummyStoryImages = [
  'https://i.pinimg.com/736x/46/44/cf/4644cf3ceb6519a304f5e5f70ad4cab4.jpg',
  'https://i.pinimg.com/564x/b0/29/65/b029651b658ab5f8417a9b1c0d143677.jpg',
  'https://i.pinimg.com/564x/bb/fd/ba/bbfdbae3385d99e69e33f5cabea5587b.jpg', 
  'https://i.pinimg.com/enabled/564x/6a/e0/fc/6ae0fc00118ee56a09c0bbbc15765d86.jpg'
];

const Stories = ({ onNewStory }) => {
  return (
    <div className="stories-container mb-3">
      <div className="stories-wrapper d-flex overflow-auto">
        {/* Map through dummy story images to display multiple dummy stories */}
        {dummyStoryImages.map((image, index) => (
          <div key={index} className="story">
            <img
              src={image}
              alt={`Dummy Story ${index + 1}`}
              className="story-media"
              style={{ borderRadius: '10px', width: '100%', height: '100%' }}
            />
          </div>
        ))}

        {/* Add story button */}
        <div className="story add-story">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => onNewStory(e.target.files[0])}
            style={{ display: 'none' }}
            id="addStoryInput"
          />
          <label htmlFor="addStoryInput" className="add-story-label">
            +
          </label>
          <div className="add-story-text">Add Story</div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
