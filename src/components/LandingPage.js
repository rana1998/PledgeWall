// src/components/LandingPage.js

import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="header-content">
          <h1>Environmental Pledge Wall</h1>
          <p>Your Platform for a Greener Tomorrow</p>
          <a href="#pledge-section" className="cta-button">Make a Pledge</a>
        </div>
      </div>
      <div className="main-content">
        <div className="pledge-section" id="pledge-section">
          <div className="cta-container">
            <h2>Make Your Pledge</h2>
            <p>Join us in our mission to support the environment. Make a pledge today.</p>
            <a href="#pledge-form" className="cta-button">Pledge Now</a>
          </div>
          <div className="image-container">
            <img src="/environment.jpg" alt="Environmental Conservation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
