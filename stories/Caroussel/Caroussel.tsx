import React from 'react';
import './style.css';

export const Caroussel = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="sliders">
          <div className="item">
            <img
              src="/house2.jpg"
              alt="House"
              width="200px"
              height="200px"
            />
          </div>
          <div className="item">
            <img
              src="/house3.jpg"
              alt="House"
              width="200px"
              height="200px"
            />
          </div>
          <div className="item">
            <img
              src="/house4.jpg"
              alt="House"
              width="200px"
              height="200px"
            />
          </div>
          <div className="item">
            <img
              src="/house5.jpg"
              alt="House"
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
