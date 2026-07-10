"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import random1 from '../assets/images/Careeres-img/random-imgs/random-1.jpg';
import random2 from '../assets/images/Careeres-img/random-imgs/random-2.jpg';
import random3 from '../assets/images/Careeres-img/random-imgs/random-3.jpg';
import random5 from '../assets/images/Careeres-img/random-imgs/random-5.jpg';
import random6 from '../assets/images/Careeres-img/random-imgs/random-6.jpg';
import random7 from '../assets/images/Careeres-img/random-imgs/random-7.jpg';
import random8 from '../assets/images/Careeres-img/random-imgs/random-8.jpg';
import random9 from '../assets/images/Careeres-img/random-imgs/random-9.jpg';
import random10 from '../assets/images/Careeres-img/random-imgs/random-10.jpg';


const CareersGallerySection = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const initialImages = [
      { src: random1, alt: 'Random Image 1' },
      { src: random2, alt: 'Random Image 2' },
      { src: random3, alt: 'Random Image 3' },
      { src: random5, alt: 'Random Image 5' },
      { src: random6, alt: 'Random Image 6' },
      { src: random7, alt: 'Random Image 7' },
      { src: random8, alt: 'Random Image 8' },
      { src: random9, alt: 'Random Image 9' },
      { src: random10, alt: 'Random Image 10' },
    ];
    setShuffledImages(shuffleArray(initialImages));
  }, []);

  if (shuffledImages.length === 0) return null;

  return (
    <section className="careers-gallery-section">
      <div className="careers-gallery-grid">
        {/* Top row: 4 smaller images */}
        <Image src={shuffledImages[0]?.src} alt={shuffledImages[0]?.alt} className="gallery-img top-row" loading="lazy" />
        <Image src={shuffledImages[1]?.src} alt={shuffledImages[1]?.alt} className="gallery-img top-row" loading="lazy" />
        <Image src={shuffledImages[2]?.src} alt={shuffledImages[2]?.alt} className="gallery-img top-row" loading="lazy" />
        <Image src={shuffledImages[3]?.src} alt={shuffledImages[3]?.alt} className="gallery-img top-row" loading="lazy" />
        {/* Middle row: 3 larger images, rightmost wider */}
        <Image src={shuffledImages[4]?.src} alt={shuffledImages[4]?.alt} className="gallery-img middle-row left" loading="lazy" />
        <Image src={shuffledImages[5]?.src} alt={shuffledImages[5]?.alt} className="gallery-img middle-row center" loading="lazy" />
        <Image src={shuffledImages[6]?.src} alt={shuffledImages[6]?.alt} className="gallery-img middle-row right" loading="lazy" />
        {/* Bottom row: 2 larger images */}
        <Image src={shuffledImages[7]?.src} alt={shuffledImages[7]?.alt} className="gallery-img bottom-row left" loading="lazy" />
        <Image src={shuffledImages[8]?.src} alt={shuffledImages[8]?.alt} className="gallery-img bottom-row right" loading="lazy" />
      </div>
    </section>
  );
};

export default CareersGallerySection;