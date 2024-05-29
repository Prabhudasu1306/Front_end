import React from 'react';
import NRIITImage from '../Images/NRIIT.jpeg';

function Home() {
  return (
    <div style={{ padding: '20px', borderRadius: '10px', border: '1px solid #ccc' }}>
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h6>Autonomous</h6>
        <h6>Accredited by NAAC with A+ Grade Approved by AICTE - New Delhi</h6>
        <h6>Affiliated to JNTUK Kakinada</h6>
        <h5>Counselling Code: </h5>  
        <h1>NRIT</h1>
      </div>
      <img src={NRIITImage} alt="NRIIT" style={{ width: '70%', marginTop: '20px' }} />
    </div>
  );
}

export default Home;



