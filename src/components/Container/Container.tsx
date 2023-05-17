import React from 'react';

interface IContainer {
  maxWidth: number;
  className?: any;
  children?: JSX.Element | JSX.Element[];
}

const Container = ({ maxWidth, children, className }: IContainer) => {
  return (
    <section className={className} style={{ maxWidth: `${maxWidth}px`, margin: '0 auto' }}>
      {children}
    </section>
  );
};

export default Container;