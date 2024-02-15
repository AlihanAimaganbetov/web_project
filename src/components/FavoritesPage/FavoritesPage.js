import React, { useState, useEffect } from 'react';
import './FavoritesPage.css';
import {Link} from 'react-router-dom';
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
    <div className='content'>
      <header>
        <h1>Gallery</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="aboutUs.html">About Us</a></li>
            <li><Link to={'/favorites'}>Favorites</Link> </li>
            <li><Link to={'/pexels'}>API</Link> </li>
          </ul>
        </nav>
      </header>
      <Link to='/'>
        <a href="/"><button class="user-profile">Back</button></a>
      </Link>
      <div className="favorites-gallery">
        {storedFavoriteImages.map((image, index) => (
          <div key={index} className="favorites">
            <img src={image} alt={` ${index}`} />
            <button onClick={() => handleImageDelete(image)}>Удалить</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ImagePage;
