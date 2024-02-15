import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery/Gallery';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ImagePage from './components/ImagePage/ImagePage';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';
import Pixels from './components/Pixels/pixels';
import ApiPhoto from "./components/Api_photo/ApiPhoto";
const App = () => {
    const imagesPerPage = 24;
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Gallery imagesPerPage={imagesPerPage} />} />
                    <Route path="/image-page/:imageUrl" element={<ImagePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/Api_photo" element={<ApiPhoto />} />
                    <Route path="/pexels" element={<Pixels />} />
                </Routes>
            </Router>
        </div>
    );
};
const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(App())
