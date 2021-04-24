import React from 'react';
import { Slider, SliderItem } from '../../packages/';

export const CustomSlider = () => {
  const styleSlide = (bg: string) => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      background: bg,
    };
  };
  return (
    <div>
      <h1>Hello slides 1</h1>
      <Slider
        className="test-class"
        id="id"
        style={{ letterSpacing: 2 }}
        arrowSize={5}
        height="100vh"
        arrowColor="#ccc"
      >
        <SliderItem index={1} style={styleSlide('#000')}>
          Slid 1
        </SliderItem>
        <SliderItem index={2} style={styleSlide('#f00')}>
          Slid 2
        </SliderItem>
        <SliderItem index={3} style={styleSlide('#000')}>
          Slid 3
        </SliderItem>
        <SliderItem index={4} style={styleSlide('#f00')}>
          Slid 4
        </SliderItem>
      </Slider>
    </div>
  );
};
