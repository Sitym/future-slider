import React from 'react';
import { Slider, SliderItem, Typing } from '../../packages/';

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
        arrowColor="#ccc"
        autoPlay={6000}
      >
        <SliderItem
          index={1}
          content="center"
          style={styleSlide('#000')}
        >
          <div style={{ whiteSpace: 'normal', height: 200 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Inventore tempora repellat delectus nobis ullam rerum ad
            provident atque incidunt, saepe totam velit praesentium
            soluta. Sequi vero neque explicabo consequatur mollitia.
          </div>
        </SliderItem>
        <SliderItem
          index={2}
          content="center"
          style={styleSlide('#f00')}
        >
          <div style={{ whiteSpace: 'normal' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Inventore tempora repellat delectus nobis ullam rerum ad
            provident atque incidunt, saepe totam velit praesentium
            soluta. Sequi vero neque explicabo consequatur mollitia.
          </div>
        </SliderItem>
      </Slider>
    </div>
  );
};
