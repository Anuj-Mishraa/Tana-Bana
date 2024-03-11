import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <h2>TANA-BANA</h2>
      </div>
      <div className='footer__links'>
        <a href='https://facebook.com'>Facebook</a>
        <a href='https://twitter.com'>Twitter</a>
        <a href='https://instagram.com'>Instagram</a>
      </div>
      <div className='footer__copy-right'>
        &copy; 2024 Tana-Bana. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
