import React from 'react';
import './AboutUs.css'; 
import saree from './ChanderiSaree.jfif'

const AboutUs = () => {
  return (
    <section className="about" id='about'>
      <div className="about__content">
        <h2 className="about__title">About Us</h2>
        <p className="about__description">
          Chanderi sarees, renowned for their sheer elegance, are a testament to India's rich textile heritage. Originating from the historic town of Chanderi in Madhya Pradesh, these sarees are celebrated for their lightweight texture, intricate weaving, and ethereal beauty. Crafted from a blend of silk and cotton, Chanderi sarees exude gracefulness and are adorned with delicate motifs inspired by nature, history, and traditional craftsmanship. The translucent texture of these sarees, combined with their subtle shimmer, makes them a timeless choice for various occasions, from formal gatherings to festive celebrations.
        </p>
        <p className="about__description">
          The making process of Chanderi sarees involves a meticulous blend of traditional techniques and modern innovations. Skilled artisans intricately weave the fabric on handloom, paying careful attention to every detail. The unique feature of Chanderi sarees lies in the use of three types of fabric - silk, cotton, and zari (metallic thread), which are seamlessly integrated to create the signature glossy texture and delicate patterns. Each saree undergoes a series of processes, including dyeing, designing, and embellishment, before it reaches its final form of sheer elegance. With its fine craftsmanship and timeless appeal, the Chanderi saree embodies the essence of Indian tradition and continues to captivate fashion enthusiasts worldwide.
        </p>
      </div>
      <div className="about__image">
        <img src={saree} alt="About Us" />
      </div>
    </section>
  );
}

export default AboutUs;
