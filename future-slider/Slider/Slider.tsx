import React, { CSSProperties, FC, MouseEvent } from 'react';
interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode | string;
  style: CSSProperties;
}
export const MyButton: FC<ButtonProps> = ({
  onClick,
  children,
  style,
}) => {
  return (
    <>
      <button onClick={onClick} style={style}>
        {children}
      </button>
    </>
  );
};
