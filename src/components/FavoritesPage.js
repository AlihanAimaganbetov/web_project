import React, { useState, useEffect } from 'react';
import './FavoritesPage.css'; // Импорт вашего CSS файла
import { Link } from 'react-router-dom';
const ImagePage = () => {
  const [storedFavoriteImages, setStoredFavoriteImages] = useState([]);

  // Получение избранных изображений из localStorage
  useEffect(() => {
    if (localStorage.getItem('favoriteImages')) {
      const parsedImages = JSON.parse(localStorage.getItem('favoriteImages'));
      setStoredFavoriteImages(parsedImages);
    }
  }, []); // Пустой массив зависимостей, чтобы useEffect запустился только один раз при монтировании компонента

  // Удаление изображения из избранных
  const handleImageDelete = (imageUrl) => {
    const updatedImages = storedFavoriteImages.filter((image) => image !== imageUrl);
    setStoredFavoriteImages(updatedImages);
    localStorage.setItem('favoriteImages', JSON.stringify(updatedImages));
  };

  return (
    <div>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <div className="image-page">
        {storedFavoriteImages.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={` ${index}`} />
            <button onClick={() => handleImageDelete(image)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePage;
