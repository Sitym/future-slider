import React from 'react';
export interface SliderItemProps {
    children?: React.ReactNode;
    className?: string;
    index: number;
    style?: React.CSSProperties;
}
export declare const SliderItem: React.FC<SliderItemProps>;
