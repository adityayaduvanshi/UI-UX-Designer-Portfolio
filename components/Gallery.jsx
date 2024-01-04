/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import '../components/gallery.css';

const images = [
  '/assets/img-1.png',
  '/assets/img-2.png',
  '/assets/img-3.png',
  '/assets/img-4.png',
  '/assets/img-5.png',
  '/assets/img-6.png',
  '/assets/img-7.png',
  '/assets/img-8.png',
  '/assets/img-9.png',
];

const Gallery = () => {
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const galleryRef = useRef(null);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX,
      mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

    const maxX = galleryRef.current.offsetWidth - window.innerWidth,
      maxY = galleryRef.current.offsetHeight - window.innerHeight;

    const newPanX = maxX * xDecimal * -1;
    const newPanY = maxY * yDecimal * -1;

    setPanX(newPanX);
    setPanY(newPanY);
  };
  return (
    <div className=" overflow-hidden">
      <div
        id="gallery"
        ref={galleryRef}
        style={{
          height: '140vmax',
          width: '140vmax',
          position: 'relative',
          transform: `translate(${panX}px, ${panY}px)`,
          transition: 'transform 4000ms ease',
        }}
        onMouseMove={handleMouseMove}
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="tile">
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Define your tile styles here

export default Gallery;
