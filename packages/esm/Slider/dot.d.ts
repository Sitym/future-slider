import { FC } from 'react';
interface DotProps {
    color?: string;
    onClick?: (index: number) => void;
    index: number;
    className?: string;
}
export declare const Dot: FC<DotProps>;
export {};
