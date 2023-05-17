import React from 'react';
import './Card.scss';

interface ICard {
  children?: JSX.Element | JSX.Element[];
  className: string;
}

const Card: React.FC<ICard> = ({ children, className }) => {
  return <div className={`card--container ${className}`}>{children}</div>;
};

export default Card;
