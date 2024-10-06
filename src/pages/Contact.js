// src/ContactForm.js
import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h1>Contact Me</h1>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Send</button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;