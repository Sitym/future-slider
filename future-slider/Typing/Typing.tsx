import React, { FC, useEffect, useState } from 'react';
import { useInterval } from '../Common/useInterval';
import css from './typing.stm.css';
export interface TypingProps {
  tag?: string;
  className?: string;
  id?: string;
  align?: string;
  children: string;
  style?: React.CSSProperties;
}
export const Typing: FC<TypingProps> = ({
  tag,
  children,
  ...props
}) => {
  const tagName = tag || 'p';
  const wordLength = children.length;
  const [word, setWord] = useState<string>('');
  const [count, setCount] = useState<number | undefined>(0);

  if (typeof children !== 'string') {
    throw TypeError(
      `Typing accept only string as child : Recieved type ${typeof children}`,
    );
  }
  useInterval(() => {
    setCount(0);
    setWord('');
  }, 7000);

  useEffect(() => {
    const timer = setTimeout(() => {
      const arr = children.split('');
      setCount((prev) =>
        prev && prev < wordLength ? prev + 1 : undefined,
      );
      setWord((prev) =>
        count && prev.length < wordLength
          ? prev + arr[count]
          : children,
      );
    }, 100);
    return () => clearTimeout(timer);
  }, [word]);
  const child = (
    <>
      <span>{word}</span>
      <span
        className={`${css.typed} ${
          count === wordLength || !count ? `${css.typed}` : ''
        }`}
      >
        |
      </span>
    </>
  );
  return (
    <>
      <div>{React.createElement(tagName, props, child)}</div>
    </>
  );
};
