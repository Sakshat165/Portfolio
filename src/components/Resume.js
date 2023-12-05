import React from 'react';
import '../Styles/Resume.css';

const Resume = () => {
  return (
    <div className='button mt-5'>
      <a href="/Sakshat-Resume.pdf" target="_blank" rel="noopener noreferrer">
      <button>
        
          Resume <i className="fa-solid fa-download fa-beat" style={{ color: '#ffffff' }}></i>
       
      </button>
      </a>
    </div>
  );
};

export default Resume;
