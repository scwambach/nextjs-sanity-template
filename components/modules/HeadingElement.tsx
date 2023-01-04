import React from 'react';

interface HeadingElementProps {
  children: any;
  type: string;
  className?: string;
}

const HeadingElement = ({ children, type, className }: HeadingElementProps) => {
  return (
    <>
      {type === 'h1' && (
        <h1 data-testid="headingElement" className={className}>
          {children}
        </h1>
      )}
      {type === 'h2' && (
        <h2 data-testid="headingElement" className={className}>
          {children}
        </h2>
      )}
      {type === 'h3' && (
        <h3 data-testid="headingElement" className={className}>
          {children}
        </h3>
      )}
      {type === 'h4' && (
        <h4 data-testid="headingElement" className={className}>
          {children}
        </h4>
      )}
      {type === 'h5' && (
        <h5 data-testid="headingElement" className={className}>
          {children}
        </h5>
      )}
      {type === 'h6' && (
        <h6 data-testid="headingElement" className={className}>
          {children}
        </h6>
      )}
    </>
  );
};

export { HeadingElement };
