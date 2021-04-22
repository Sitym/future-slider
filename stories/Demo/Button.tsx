import React from 'react';
import { MyButton } from '../../future-slider';

export const CustomButton = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    alert('Go forward');
  };
  return (
    <MyButton
      onClick={handleClick}
      style={{ background: '#000', color: '#fff' }}
    >
      My button
    </MyButton>
  );
};
