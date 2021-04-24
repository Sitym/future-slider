import React, { FC } from 'react';
import css from './slider.stm.css';

interface SliderProps {
  children?: React.ReactElement;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
/**
 * Simple proto slider
 * @param {React.ReactElement} children Children
 * @param {string} className Children
 * @param {string} id Children
 * @param {React.CSSProperties} style Children
 * @returns Slider
 */
export const Slider: FC<SliderProps> = ({
  children,
  className,
  id,
  style,
}) => {
  return (
    <>
      <div
        className={`${css.intro} ${className}`}
        id={id}
        style={style}
      >
        {children}
      </div>
    </>
  );
};
