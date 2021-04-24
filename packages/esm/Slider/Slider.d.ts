import React, { FC, ReactNode } from 'react';
import { SliderItemProps } from '../SliderItem';
export interface SliderProps {
    children?: SliderItemProps[] | ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    transition?: number;
    arrowColor?: string;
    arrowSize?: 1 | 2 | 3 | 4 | 5;
    height?: string;
}
/**
 * SiTYM sliders doesn't re-render.
 *
 */
export declare const Slider: FC<SliderProps>;
