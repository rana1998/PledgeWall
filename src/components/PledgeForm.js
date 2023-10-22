// src/components/PledgeForm.js

import React, { useState } from 'react';
import './PledgeForm.css';


function PledgeForm({ onPledgeSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    pledgeStatement: '',
    category: 'Energy Conservation',
    optIn: false,
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in localStorage
    localStorage.setItem('pledgeData', JSON.stringify(formData));
    onPledgeSubmit(formData);

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      location: '',
      email: '',
      pledgeStatement: '',
      category: 'Energy Conservation',
      optIn: false,
    });

    // Scroll to the pledge wall section
    scrollToPledgeWall();
  };

  const scrollToPledgeWall = () => {
    const pledgeWallSection = document.getElementById('pledge-wall');

    if (pledgeWallSection) {
      pledgeWallSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='pledge-form-container'>

    <div className="pledge-form">
      <h2>Make Your Pledge</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Pledge Statement:
          <textarea
            name="pledgeStatement"
            value={formData.pledgeStatement}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleFormChange}
          >
            <option value="Energy Conservation">Energy Conservation</option>
            <option value="Waste Reduction">Waste Reduction</option>
            <option value="Sustainable Transportation">Sustainable Transportation</option>
            <option value="Water Conservation">Water Conservation</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="optIn"
            checked={formData.optIn}
            onChange={handleFormChange}
          />
          Subscribe to Updates and Newsletters
        </label>
        <button type="submit" className="cta-button">Submit Pledge</button>
      </form>
    </div>
    </div>

  );
}

export default PledgeForm;
