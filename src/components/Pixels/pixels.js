import React, { useState } from 'react';
import { createClient } from 'pexels';
import './pixels.css'; // Импорт вашего CSS файла
import { Link } from 'react-router-dom';
const Pixels = () => {
  const [photoInfo, setPhotoInfo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const client = createClient('tDB8Jc72XOj4vl7sKaWDeXLF1n1Bni73UqIgxbTP8tICQeUv18B7X6S4');

      client.photos.search({ query: searchQuery, per_page: 1 }).then(response => {
        setPhotoInfo(response.photos[0]);
      }).catch(error => {
        console.error('Error fetching photo data:', error);
      });
    }
  };

  return (
    <div>
      <header>
        <h1>Gallery</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutUs.html">About Us</a></li>
            <li><Link to={'/favorites'}>Favorites</Link> </li>
            <li><Link to={'/pexels'}>API</Link> </li>
          </ul>
        </nav>
      </header>
      <div>
        <div className='text'>
          <label>
            Search Query:
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </label>
          <button onClick={handleSearch}>Search</button>
        </div>
        {photoInfo && (
          <div>
            <h1>{photoInfo.alt}</h1>
            <img src={photoInfo.src.original} alt={photoInfo.alt} style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
            />
            <p>Photographer: <a href={photoInfo.photographer_url}>{photoInfo.photographer}</a></p>
            <p>Dimensions: {photoInfo.width}x{photoInfo.height}</p>
          </div>

        )}
      </div>
    </div>
  );
};

export default Pixels;