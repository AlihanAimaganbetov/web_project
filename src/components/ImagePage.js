import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import './ImagePage.css'; // Импорт вашего CSS файла
import { Link } from 'react-router-dom';


const ImagePage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favoriteImages')) || []
  );

  const { imageUrl } = useParams();
  const addToFavorites = (imageUrl) => {
    alert("Сохранено")
    setFavorites((prevFavorites) => [...prevFavorites, imageUrl]);
    localStorage.setItem('favoriteImages', JSON.stringify([...favorites, imageUrl]));
  };
  console.log(typeof imageUrl);
  console.log( imageUrl);
  return (
    <div>
      <Link to ='/'>
        <button>Back</button>
      </Link>
      {console.log("sss") }
      <button onClick={() => addToFavorites(imageUrl)}>add to favorites</button> 
      <div className="image-page">
        <img src={decodeURIComponent(imageUrl)} alt="gallery" />
      </div>
    </div>
  );
};

export default ImagePage;
