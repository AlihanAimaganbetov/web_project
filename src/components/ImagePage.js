import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ImagePage.css'; // Импорт вашего CSS файла
import { Link } from 'react-router-dom';


const ImagePage = () => {
  const { imageUrl } = useParams();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favoriteImages')) || []
  );
  const [imageInfo, setImageInfo] = useState(null);
  useEffect(() => {

    const img = new Image();
    img.src = decodeURIComponent(imageUrl);

    img.onload = () => {

      const info = {
        width: img.width,
        height: img.height,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      };
      setImageInfo(info);
    };
  }, [imageUrl]);

  const addToFavorites = (imageUrl) => {
    alert("Сохранено")
    setFavorites((prevFavorites) => [...prevFavorites, imageUrl]);
    localStorage.setItem('favoriteImages', JSON.stringify([...favorites, imageUrl]));
  };
  console.log(typeof imageUrl);
  console.log(imageUrl);
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
      <button onClick={() => addToFavorites(imageUrl)}>add to favorites</button>
      <div className="image-page">
        <img src={decodeURIComponent(imageUrl)} alt="gallery" />
      </div>
      {imageInfo && (
        <div>
          <p>Width: {imageInfo.width}</p>
          <p>Height: {imageInfo.height}</p>
          <p>Natural Width: {imageInfo.naturalWidth}</p>
          <p>Natural Height: {imageInfo.naturalHeight}</p>
        </div>
      )}
      <footer>
        <p>&copy; 2023 Musical Instruments Store</p>
      </footer>
    </div>
  );
};

export default ImagePage;
