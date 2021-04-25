import React, {
  FC,
  ReactNode,
  Children,
  useState,
  useEffect,
  ReactChild,
} from 'react';
import css from './slider.stm.css';
import { SliderItem, SliderItemProps } from '../SliderItem';
import { useInterval } from './useInterval';

export interface SliderProps {
  children?: SliderItemProps[] | ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  transition?: number;
  arrowColor?: string;
  arrowSize?: 1 | 2 | 3 | 4 | 5;
  height?: string;
  autoPlay?: boolean | number;
}
/**
 * SiTYM sliders doesn't re-render.
 *
 */

export const Slider: FC<SliderProps> = ({
  children,
  transition,
  arrowColor,
  arrowSize,
  height,
  autoPlay,
}) => {
  //
  const [index, setIndex] = useState<number>(1);
  const [transDuration, setTransitionDuration] = useState<number>(0);
  const childrenCount: number = Children.count(children);

  const finishedLap = () => {
    if (index === 0) {
      const timer = setTimeout(() => {
        setTransitionDuration(0);
        setIndex(4);
      }, 500);
      clearTimeout(timer);
    } else if (index === 5) {
      const timer = setTimeout(() => {
        setTransitionDuration(0);
        setIndex(1);
      }, 500);
      clearTimeout(timer);
    }
  };
  const PrevSlide = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setTransitionDuration(500);
    setIndex((prev) => prev - 1);
  };
  const NextSlide = (event: React.MouseEvent<HTMLElement>) => {
    setTransitionDuration(500);
    event.preventDefault();
    setIndex((prev) => prev + 1);
  };
  if (autoPlay) {
    useInterval(
      () => {
        setTransitionDuration(500);
        setIndex((prev) => prev + 1);
      },
      typeof autoPlay === 'number' ? autoPlay : 7000,
    );
  }
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setIndex(4);
      }, 500);
    } else if (index === 5) {
      setTimeout(() => {
        setTransitionDuration(0);
        setIndex(1);
      }, 500);
    }
  }, [index]);
  const slides = () => {
    return Children.map(
      children,
      (
        child: SliderItemProps | ReactChild | ReactNode,
        index: number,
      ) => {
        if (
          React.isValidElement<
            SliderItemProps & ReactChild & ReactNode
          >(child)
        ) {
          return (
            <SliderItem key={index} {...child.props}>
              {child.props.children}
            </SliderItem>
          );
        } else {
          return (
            <SliderItem key={index} index={index}>
              {child}
            </SliderItem>
          );
        }
      },
    );
  };
  const cloneBefore = () => {
    return Children.map(
      children,
      (slide: SliderItemProps | ReactNode, index: number) => {
        if (index + 1 === childrenCount) {
          return (
            <SliderItem key={index} index={index} children={slide} />
          );
        }
      },
    );
  };
  const cloneAfter = () => {
    return Children.map(
      children,
      (slide: SliderItemProps | ReactNode, index: number) => {
        if (index === 0) {
          return (
            <SliderItem key={index} index={index} children={slide} />
          );
        }
      },
    );
  };

  // Arrow controller

  const arrowSizes = (size?: 1 | 2 | 3 | 4 | 5 | 6) => {
    switch (size) {
      case 1:
        return '25px';

      case 2:
        return '30px';

      case 3:
        return '35px';

      case 4:
        return '40px';

      case 5:
        return '45px';

      case 6:
        return '50px';

      default:
        return '35px';
    }
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper} style={{ height: height || '' }}>
          <div
            className={css.sliders}
            style={{
              transform: `translate3d(${-index * 100}%,0,0)`,
              transitionDuration: `${transDuration}ms`,
            }}
          >
            {cloneBefore()}
            {slides()}
            {cloneAfter()}
          </div>
          <div
            onClick={PrevSlide}
            className={`${css.arrow} ${css.left}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={arrowSizes(arrowSize)}
              height={arrowSizes(arrowSize)}
              viewBox="0 0 24 24"
              fill={arrowColor || '#fff'}
            >
              <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z" />
            </svg>
          </div>
          <div
            onClick={NextSlide}
            className={`${css.arrow} ${css.right}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={arrowSizes(arrowSize)}
              height={arrowSizes(arrowSize)}
              viewBox="0 0 24 24"
              fill={arrowColor || '#fff'}
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
