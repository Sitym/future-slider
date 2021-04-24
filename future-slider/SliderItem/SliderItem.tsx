import React, { Children } from 'react';
import css from './slide.stm.css';
export interface SliderItemProps {
  children?: React.ReactNode;
  className?: string;
  index: number;
  style?: React.CSSProperties;
}
export const SliderItem: React.FC<SliderItemProps> = ({
  children,
  index,
  className,
  style,
}) => {
  return (
    <div
      className={`${css.item} ${className}`}
      dat-index={index}
      style={style}
    >
      {children}
    </div>
  );
};
