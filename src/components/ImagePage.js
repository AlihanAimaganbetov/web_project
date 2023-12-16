import React from 'react';
import { useParams } from 'react-router-dom';
import './ImagePage.css'; // Импорт вашего CSS файла
const ImagePage = () => {
  const { imageUrl } = useParams();

  return (
    <div className="image-page">
      <img src={decodeURIComponent(imageUrl)} alt="gallery" />  
    </div>
  );
};

export default ImagePage;
