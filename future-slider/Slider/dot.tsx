import React, { FC } from 'react';

interface DotProps {
  color?: string;
  onClick?: (index: number) => void;
  index: number;
  className?: string;
}
export const Dot: FC<DotProps> = ({
  color,
  onClick,
  index,
  className,
}) => {
  const handleClick = (event: React.MouseEvent<{}>) => {
    event.preventDefault();
    onClick ? onClick(index) : undefined;
  };
  return (
    <div
      onClick={handleClick}
      data-target-dot={index}
      className={className || ''}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 426.667 426.667"
        fill={color || '#d2d2d2'}
      >
        <g>
          <g>
            <g>
              <path d="M213.333,106.667c-58.88,0-106.667,47.787-106.667,106.667S154.453,320,213.333,320S320,272.213,320,213.333     S272.213,106.667,213.333,106.667z" />
              <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667     S384,119.04,384,213.333S307.627,384,213.333,384z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
