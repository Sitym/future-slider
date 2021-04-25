import React from 'react';
import { Slider, SliderItem, Typing } from '../../packages/esm';

export const CustomSlider = () => {
  const styleSlide = (bg: string) => {
    return {
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
        autoPlay={6000}
      >
        <SliderItem
          index={1}
          content="center"
          style={styleSlide('#000')}
        >
          <Typing>Lorem ipsum dolor sit</Typing>
        </SliderItem>
        <SliderItem
          index={2}
          content="center"
          style={styleSlide('#f00')}
        >
          Slid 2
        </SliderItem>
      </Slider>
    </div>
  );
};
