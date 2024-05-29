import React from 'react';
import NRIITImage from '../Images/NRIIT2.avif';

function About() {
  return (
    <div style={{ padding: '20px', borderRadius: '10px', border: '1px solid #ccc', display: 'flex' }}>
      <div style={{ flex: '1', paddingRight: '20px' }}>
        <h3>About NRIIT</h3>
        <p>NRI INSTITUTE OF TECHNOLOGY, popularly known as NRIIT was established in the year 2008, by MNK EDUCATIONAL SOCIETY in Visadala village, Medikondur Mandal of Guntur district by Sri.Alapati Ravindra, Chairman.</p>
        <p>NRIIT is located away from the hustle and bustle of the city life in a scenic and serene environment spread over an expansive 10.9425 acres amidst the lush greenery of mirch and cotton fields of Visadala Village just 9 kms away from Guntur, the major city of the capital region of Andhra Pradesh. The institute has set a benchmark in providing its students the very best in terms of infrastructure and faculty.</p>
      </div>
      <div style={{ flex: '6', paddingLeft: '20px' }}>
        <img src={NRIITImage} alt="NRIIT" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default About;
