import { specialText } from '@utils';
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
        <h1
          className={className}
          dangerouslySetInnerHTML={{ __html: specialText(children) }}
        />
      )}
      {type === 'h2' && (
        <h2
          className={className}
          dangerouslySetInnerHTML={{ __html: specialText(children) }}
        />
      )}
      {type === 'h3' && (
        <h3
          className={className}
          dangerouslySetInnerHTML={{ __html: specialText(children) }}
        />
      )}
      {type === 'h4' && (
        <h4
          className={className}
          dangerouslySetInnerHTML={{ __html: specialText(children) }}
        />
      )}
      {type === 'h5' && (
        <h5
          className={className}
          dangerouslySetInnerHTML={{ __html: specialText(children) }}
        />
      )}
      {type === 'h6' && (
        <h6
          className={className}
          dangerouslySetInnerHTML={{ __html: specialText(children) }}
        />
      )}
    </>
  );
};

export { HeadingElement };
