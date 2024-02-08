import React from 'react';

const Image = ({ imageUrl }) => {
  console.log(imageUrl)
  return (
    <div className="image">
      <img src={imageUrl} alt="gallery" />
    </div>
  );
};

export default Image;
