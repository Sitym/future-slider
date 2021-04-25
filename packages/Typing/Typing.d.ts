import React, { FC } from 'react';
export interface TypingProps {
    tag?: string;
    className?: string;
    id?: string;
    align?: string;
    children: string;
    style?: React.CSSProperties;
}
export declare const Typing: FC<TypingProps>;
