import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './PostResources.css';

const BannerForm = () => {
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const category = 'banner'; 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/sliderData', {
        image,
        link,
      });
      alert('Resource added successfully!');
      setImage('');
      setLink('');
    } catch (error) {
      console.error('Error adding resource:', error);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className="resources-form">
      <h1>Add Resource</h1>
      
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="resources-form-input"
        />
      </label>
      
      <label>
        Link URL:
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="resources-form-input"
        />
      </label>
      
      <button onClick={handleSubmit} className="resources-form-button">Add Resource</button>
       <button className='back-button' onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default BannerForm;
