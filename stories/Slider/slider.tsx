import React from 'react';
import { Slider as Sliders } from '../../packages';

export const Slider = () => {
  return (
    <div>
      <Sliders
        className="test-class"
        id="id"
        style={{ letterSpacing: 2 }}
      >
        This is the children
      </Sliders>
    </div>
  );
};
