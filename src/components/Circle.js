import {Link} from 'react-router-dom'
import React from 'react';
import '../Styles/Circle.css';

const Circle = ({ animationDelay,title }) => {
    
  return (
    <Link to={`/${title.toLowerCase()}`} style={{ textDecoration: 'none' }}>
        <div className="circle" style={{ animationDelay }}>
            {title}
        </div>
  </Link>
  );
};

export default Circle;

