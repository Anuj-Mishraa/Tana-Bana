import React, { useState } from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='contact_cmp' id='contact'>
        <div className='contact-us'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='contact-us__form'>
            <div className='form-group'>
            <label htmlFor='name'> Full Name</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
            </div>
            <div className='form-group'>
            <label htmlFor='email'> Email Address</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='form-group'>
            <label htmlFor='message'> Message</label>
            <textarea id='message' name='message' value={formData.message} onChange={handleChange} required />
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  );
}

export default ContactUs;
