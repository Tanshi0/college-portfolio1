import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Slider from './components/scrolling/scrolling.jsx'
import './style/index.css';
import './style/typography.css';
import Works from './components/works/works.jsx';
import Footer from './components/footer/footer.jsx'

// import stylesTyp from "./styles/typography.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Works/>

    <Slider />
    <Footer />
  </React.StrictMode>
);
