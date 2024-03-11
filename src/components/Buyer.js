import React from 'react';
import './Byers.css'; 
// import saree1 from './SareeeImages/saree1.jfif';

const Buyer = () => {
  
  const sarees = [
    {
      id: 1,
      image: "./SareeeImages/saree6.jpg",
      title: 'Traditional Silk Saree',
      seller: 'Saree Emporium',
      price: 1500,
      discount: 10,
    },
    {
      id: 2,
      image: "SareeeImages/saree1.jfif",
      title: 'Designer Georgette Saree',
      seller: 'Fashionista Sarees',
      price: 2500,
      discount: 15,
    },

    {
      id: 1,
      image: "./SareeeImages/saree6.jpg",
      title: 'Traditional Silk Saree',
      seller: 'Saree Emporium',
      price: 1500,
      discount: 10,
    },

    {
      id: 1,
      image: "./SareeeImages/saree6.jpg",
      title: 'Traditional Silk Saree',
      seller: 'Saree Emporium',
      price: 1500,
      discount: 10,
    },

    {
      id: 1,
      image: "./SareeeImages/saree6.jpg",
      title: 'Traditional Silk Saree',
      seller: 'Saree Emporium',
      price: 1500,
      discount: 10,
    },


    {
      id: 1,
      image: "./SareeeImages/saree6.jpg",
      title: 'Traditional Silk Saree',
      seller: 'Saree Emporium',
      price: 1500,
      discount: 10,
    },
    
  ];

  return (
    <div className="buyer-container">
      <h2>Sarees for Sale</h2>
      <div className="sarees-grid">
        {sarees.map((saree) => (
          <div key={saree.id} className="saree-card">
            <img src={saree.image} alt={saree.title} className="saree-image" />
            <div className="saree-details">
              <h3>{saree.title}</h3>
              <p className="seller">Seller: {saree.seller}</p>
              <p className="price">Price: Rs. {saree.price}</p>
              <p className="discount">Discount: {saree.discount}% off</p>
              <div className="buttons">
                <button className="buy-button">Buy</button>
                <button className="cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyer;
