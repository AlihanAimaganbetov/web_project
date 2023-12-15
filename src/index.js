import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImagePage from './components/ImagePage'; // ваш компонент ImagePage

const App = () => {
  
    const imagesPerPage = 25; // количество изображений на странице
    return (
        <Router>
            <Routes>
                {/* Маршрут для компоненты Gallery */}
                <Route
                    exact
                    path="/"
                    element={<Gallery imagesPerPage={imagesPerPage} />}
                />



                {/* Маршрут для компоненты ImagePage */}
                <Route path="/image-page/:imageUrl" element={<ImagePage />} />


                {/* Другие маршруты, если есть */}
            </Routes>
        </Router>
    );
};
console.log("ww");

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(App())
