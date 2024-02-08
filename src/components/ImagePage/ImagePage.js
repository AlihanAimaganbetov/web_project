import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ImagePage.css'; // Импорт вашего CSS файла
import {Link} from 'react-router-dom';

const ImagePage = () => {
    const {imageUrl} = useParams();
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favoriteImages')) || []
    );
    const [images, setImages] = useState(
        JSON.parse(localStorage.getItem('savedImages'))
    );
    const handleImageDelete = (imageUrl) => {
        const updatedImages = images.filter((image) => image !== imageUrl);
        setImages(updatedImages);
        alert("удалено")
        localStorage.setItem('savedImages', JSON.stringify(updatedImages));

    };

    const [imageInfo, setImageInfo] = useState(null);
    useEffect(() => {
        const img = new Image();
        img.src = decodeURIComponent(imageUrl);

        img.onload = () => {
            const info = {
                width: img.width,
                height: img.height,
                fileSize: img.fileSize,
                fileType: img.fileType,
                dateTime: img.dateTime,
            };
            console.log(img.fileType);
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
                <h1>Gallery</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="aboutUs.html">About Us</a></li>
                        <li><Link to={'/favorites'}>Favorites</Link></li>
                        <li><Link to={'/pexels'}>API</Link></li>
                    </ul>
                </nav>
            </header>
            <Link to='/'>
                <a href="/">
                    <button class="user-profile">Back</button>
                </a>
            </Link>
            <div className='gallery-button'>
                <button onClick={() => addToFavorites(imageUrl)}>add to favorites</button>
            </div>
            <div className="image-page">
                <img src={decodeURIComponent(imageUrl)} alt="gallery"/>
                <Link to={'/'}>
                <button onClick={() => handleImageDelete(imageUrl)}>Delete</button>
                </Link>
            </div>


        </div>
    );
};

export default ImagePage;
