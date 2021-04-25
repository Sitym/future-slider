import React, { CSSProperties } from 'react';
import css from './slide.stm.css';
export interface SliderItemProps {
  children?: React.ReactNode;
  className?: string;
  index?: number;
  style?: React.CSSProperties;
  content?:
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'centerLeft'
    | 'center'
    | 'centerRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight';
  bgImage?: {
    url?: string;
    size?:
      | 'cover'
      | 'contain'
      | 'auto'
      | 'unset'
      | 'inherit'
      | 'initial';
    repeat?:
      | 'no-repeat'
      | 'repeat-x'
      | 'repeat-y'
      | 'round'
      | 'space'
      | 'repeat';
  };
}
export const SliderItem: React.FC<SliderItemProps> = ({
  children,
  index,
  className,
  style,
  content,
  bgImage,
}) => {
  const contentPosition = (position) => {
    switch (position) {
      case 'topLeft':
        return css.topLeft;
      case 'topCenter':
        return css.topCenter;
      case 'topRight':
        return css.topRight;
      case 'centerLeft':
        return css.centerLeft;
      case 'center':
        return css.center;
      case 'centerRight':
        return css.centerRight;
      case 'bottomLeft':
        return css.bottomLeft;
      case 'bottomCenter':
        return css.bottomCenter;
      case 'bottomRight':
        return css.bottomRight;
      default:
        return undefined;
    }
  };
  const background: CSSProperties = bgImage
    ? {
        backgroundImage: `url(${bgImage.url})`,
        backgroundRepeat: bgImage.repeat || 'no-repeat',
        backgroundSize: bgImage.size || 'cover',
      }
    : {};
  return (
    <div
      className={`${css.item} ${className || ''}`}
      dat-index={index}
      style={style}
    >
      <div
        className={`${css.inner} ${
          contentPosition(content)
            ? `${contentPosition(content)} ${css.flex}`
            : ''
        }`}
        style={background}
      >
        {children}
      </div>
    </div>
  );
};
