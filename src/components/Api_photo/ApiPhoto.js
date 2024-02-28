import React, {useState} from 'react';
import {createClient} from 'pexels';
import {Link} from 'react-router-dom';
import './ApiPhoto.css'; // Импорт вашего CSS файла

const ApiPhoto = () => {
    const [photoInfoList, setPhotoInfoList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            const client = createClient('tDB8Jc72XOj4vl7sKaWDeXLF1n1Bni73UqIgxbTP8tICQeUv18B7X6S4');

            client.photos.search({query: searchQuery, per_page: 12})
                .then(response => {
                    setPhotoInfoList(response.photos);
                })
                .catch(error => {
                    console.error('Error fetching photo data:', error);
                });
        }
    };
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favoriteImages')) || []
    );

    const addToFavorites = (imageUrl) => {
        alert("Сохранено")
        setFavorites((prevFavorites) => {
            const newFavorites = [...prevFavorites, imageUrl];
            localStorage.setItem('favoriteImages', JSON.stringify(newFavorites));
            return newFavorites;
        });
    };
    return (
        <div>
            <header>
                <h1>Gallery</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutUs.html">About Us</a></li>
                        <li><Link to={'/favorites'}>Favorites</Link></li>
                        <li><Link to={'/pexels'}>API</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <div className='text'>
                    <label>
                        Search Query:
                        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    </label>
                    <button onClick={handleSearch} className="custom-button">Search</button>
                </div>
                <div className="gallery">
                    {photoInfoList.map((photoInfo, index) => (<div>
                            <div key={index} className="gallery-image">
                                <h5>{photoInfo.alt}</h5>
                                <img src={photoInfo.src.original} alt={photoInfo.alt}/>
                            </div>
                            <button onClick={() => addToFavorites(photoInfo.src.original)}>Добавить в избранное</button>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    );
};

export default ApiPhoto;
