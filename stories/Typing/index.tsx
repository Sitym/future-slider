import React, { FC, useEffect, useState } from 'react';
import { useInterval } from './useInterval';
// import css from './stlyle.stm.css';
interface ProtoProps {
  tag?: string;
  className?: string;
  id?: string;
  aligh?: string;
  children: string;
  style?: React.CSSProperties;
}
const Proto: FC<ProtoProps> = ({ tag, children, ...props }) => {
  let typing: string;
  let i: number = 0;
  const wordLength = children.length;
  const [word, setWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);

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
      setCount((prev) => (prev < wordLength ? prev + 1 : undefined));
      setWord((prev) =>
        prev.length < wordLength ? prev + arr[count] : children,
      );
    }, 100);
    return () => clearTimeout(timer);
  }, [word]);
  const child = (
    <>
      <span>{word}</span>
      <span
        className={`typed-cursor ${
          count === wordLength || !count ? 'typed-cursor-blink' : ''
        }`}
      >
        |
      </span>
    </>
  );
  return (
    <>
      <div>{React.createElement(tag, props, child)}</div>
    </>
  );
};
export const CustomTypings = () => {
  return (
    <>
      <Proto tag="h1" className="test">
        Lorem ipsum, dolor sit!
      </Proto>
    </>
  );
};
