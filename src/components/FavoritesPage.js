import React, { useState, useEffect } from 'react';
import './FavoritesPage.css';
import { Link } from 'react-router-dom';
const ImagePage = () => {
  const [storedFavoriteImages, setStoredFavoriteImages] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favoriteImages')) {
      const parsedImages = JSON.parse(localStorage.getItem('favoriteImages'));
      setStoredFavoriteImages(parsedImages);
    }
  }, []); 

 
  const handleImageDelete = (imageUrl) => {
    const updatedImages = storedFavoriteImages.filter((image) => image !== imageUrl);
    setStoredFavoriteImages(updatedImages);
    localStorage.setItem('favoriteImages', JSON.stringify(updatedImages));
  };

  return (
    <div>
      <header>
        <h1>Musical Instruments Store</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="aboutUs.html">About Us</a></li>
            </ul>
        </nav>
    </header>
      <Link to='/'>
      <a href="/"><button class="user-profile">Back</button></a>
      </Link>
      <div className="image-page">
        {storedFavoriteImages.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={` ${index}`} />
            <button onClick={() => handleImageDelete(image)}>Удалить</button>
          </div>
        ))}
      </div>
      <footer>
        <p>&copy; 2023 Gallery</p>
    </footer>
    </div>
  );
};

export default ImagePage;
