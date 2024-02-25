import React from 'react';

interface IContainer {
    maxWidth?: number;
    className?: any;
    children?: JSX.Element | JSX.Element[];
}

export const Container = ({ maxWidth = 1280, children, className }: IContainer) => {
    return (
        <section
            className={className}
            style={{ maxWidth: `${maxWidth}px`, margin: '0 auto', paddingInline: 16 }}
        >
            {children}
        </section>
    );
};
