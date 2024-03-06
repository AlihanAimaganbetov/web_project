import React, { useState, useEffect } from 'react';
import './FavoritesPage.css';
import { Link } from 'react-router-dom';

const ImagePage = () => {
    const [storedFavoriteImages, setStoredFavoriteImages] = useState([]);

    useEffect(() => {
        const openRequest = indexedDB.open('favoritesDB', 1);

        openRequest.onerror = function(event) {
            console.error("IndexedDB error:", event.target.error);
        };

        openRequest.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(['favoritesStore'], 'readonly');
            const objectStore = transaction.objectStore('favoritesStore');

            const getAllFavorites = objectStore.getAll();

            getAllFavorites.onsuccess = function() {
                setStoredFavoriteImages(getAllFavorites.result.map(item => item.url));
            };

            transaction.oncomplete = function() {
                db.close();
            };
        };
    }, []);

    const handleImageDelete = (imageUrl) => {
        const updatedImages = storedFavoriteImages.filter((image) => image !== imageUrl);

        const request = indexedDB.open('favoritesDB', 1);

        request.onerror = function(event) {
            console.error("IndexedDB error:", event.target.error);
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(['favoritesStore'], 'readwrite');
            const objectStore = transaction.objectStore('favoritesStore');

            const deleteRequest = objectStore.delete(imageUrl);

            deleteRequest.onsuccess = function() {
                console.log("Image deleted from favoritesStore.");
                setStoredFavoriteImages(updatedImages); // Обновляем состояние после удаления
            };

            deleteRequest.onerror = function() {
                console.error("Error deleting image from favoritesStore:", deleteRequest.error);
            };

            transaction.oncomplete = function() {
                db.close();
            };
        };
    };


    return (
        <div className='content'>
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
                    <button className="user-profile">Back</button>
                </a>
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
