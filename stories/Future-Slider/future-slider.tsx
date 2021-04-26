import { Slider, SliderItem, Typing } from '@sitym/future-slider';

export const CustomSliderNpm = () => {
  // const  = Future;
  return (
    <div>
      <div>
        <h1>This stories is directly imported via npm</h1>
      </div>
      <div>
        <Slider
          height={'200px'}
          autoPlay
          dotActive="#018c00"
          arrowColor="#018c00"
        >
          <SliderItem style={{ background: '#f00' }} content="center">
            Slide item via npm 1
          </SliderItem>
          <SliderItem style={{ background: '#f00' }} content="center">
            <Typing tag="h1" style={{ color: '#fff' }}>
              Typungs via npm
            </Typing>
          </SliderItem>
        </Slider>
      </div>
    </div>
  );
};
