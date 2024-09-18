// Slider.jsx
import React, { useState } from 'react';
import './Slider.css';

const images = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>

      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="slider-image"
      />

      <button className="slider-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
