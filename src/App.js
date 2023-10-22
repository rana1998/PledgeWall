// src/App.js
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import PledgeForm from './components/PledgeForm';
import PledgeWall from './components/PledgeWall';

function App() {
  const [pledges, setPledges] = useState([]);

  // Handle pledge submission and update pledges state

  const handlePledgeSubmit = (formData) => {
    // Update the pledges state with the new pledge data
    setPledges([...pledges, formData]);
  };

  return (
    <div>
      <LandingPage />
      <PledgeForm onPledgeSubmit={handlePledgeSubmit}/>
      <PledgeWall pledges={pledges} />
    </div>
  );
}

export default App;
