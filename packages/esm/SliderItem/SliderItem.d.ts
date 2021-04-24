import React from 'react';
export interface SliderItemProps {
    children?: React.ReactNode | React.ReactChild | any;
    className?: string;
    index?: number;
    style?: React.CSSProperties;
    content?: 'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'center' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    bgImage?: {
        url?: string;
        size?: 'cover' | 'contain' | 'auto' | 'unset' | 'inherit' | 'initial';
        repeat?: 'no-repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space' | 'repeat';
    };
}
export declare const SliderItem: React.FC<SliderItemProps & React.ReactChild & React.ReactNode & any>;
