// src/components/PledgeWall.js

import React from 'react';
import './PledgeWall.css';

function PledgeWall({ pledges }) {
  return (
    <div id="pledge-wall" className="pledge-wall">
      <h2>Pledge Wall</h2>
      <div className="pledge-cards">
        {pledges.map((pledge, index) => (
          <div className="pledge-card" key={index}>
            <h3>{pledge.name}</h3>
            <p>{pledge.location}</p>
            <p className="category">{pledge.category}</p>
            <p>{pledge.pledgeStatement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PledgeWall;
