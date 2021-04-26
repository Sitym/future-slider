import React, { FC, useState } from 'react';
import { useInterval } from '../Common/useInterval';
import css from './typing.stm.scss';
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
  if (typeof children !== 'string') {
    throw TypeError(
      `Typing accept only string as child : Recieved type ${typeof children}`,
    );
  }
  const tagName = tag || 'p';
  const wordLength = children.length;
  const [word, setWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [finished, setFinished] = useState(false);

  useInterval(() => {
    const arr = children.split('');
    setWord((prev) =>
      prev.length < wordLength ? prev + arr[count] : children,
    );
  }, 100);
  useInterval(() => {
    if (count < wordLength) {
      setCount((prev) => prev + 1);
    }
  }, 100);

  if (count === wordLength) {
    const timer = setTimeout(() => {
      setCount(0);
      setWord('');
    }, 1000);
  }
  const child = (
    <>
      <span>{word}</span>
      <span
        className={`${css.typed} ${
          count === wordLength || !count ? `${css.blink}` : ''
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
