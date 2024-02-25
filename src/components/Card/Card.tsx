import React from 'react';

interface ICard {
  children?: JSX.Element | JSX.Element[];
  className: string;
}

export const Card: React.FC<ICard> = ({ children, className }) => {
  return <div className={`card--container ${className}`}>{children}</div>;
};
