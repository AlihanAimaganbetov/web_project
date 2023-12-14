// ImagePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ImagePage = () => {
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get('imageUrl');
  const description = new URLSearchParams(location.search).get('description');

  return (
    <div className="image-page">
      <img src={imageUrl} alt="gallery" />
      <p>{description}</p>
    </div>
  );
};

export default ImagePage;
