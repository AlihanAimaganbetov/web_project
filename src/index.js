import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery';

function App() {
    console.log("ss");
    return (
        <div className="App">
        <h1>Фотогалерея</h1>
        <Gallery imagesPerPage={24}/>
        </div>
    );
  
}
console.log("ww");

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(App())
