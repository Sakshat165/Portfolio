import React from 'react';
import Circle from './Circle';
import '../Styles/Circle.css';

const CircleContainer = () => {
  const circles = [0, 1, 2, 3, 4];
  const titles = ['About Me', 'Education', 'Skills', 'Projects', 'Contact Me'];

  return (
    <div className="container d-flex justify-content-evenly mt-5">
      {circles.map((index) => (
        <Circle key={index} animationDelay={`${index * 0.5}s`} title={titles[index]} />
      ))}
    </div>
  );
};

export default CircleContainer;
