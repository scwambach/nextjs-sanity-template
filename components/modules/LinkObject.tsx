import { LinkProps } from '@components';
import Link from 'next/link';

const LinkObject = ({
  anchor,
  anchorName,
  copy,
  url,
  ariaLabel,
  internalLink,
  className,
  newTab,
  children,
}: LinkProps) => {
  const basePath = (type) => {
    return type === 'post'
      ? 'blog/'
      : type === 'psotCategory'
      ? 'blog/category'
      : type === 'project'
      ? 'project/'
      : '';
  };

  return (
    <>
      {anchor ? (
        <a
          className={className}
          href={`#${anchorName}`}
          aria-label={ariaLabel || `${copy} Link`}
          onClick={() => {
            const elm = document.getElementById(anchorName);
            elm.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            });
          }}
        >
          {children || copy}
        </a>
      ) : newTab ? (
        <a
          className={className}
          href={url}
          aria-label={`${copy} Link`}
          rel={newTab ? 'noopener noreferrer' : null}
          target={newTab ? '_blank' : '_self'}
        >
          {children || copy}
        </a>
      ) : (
        <Link
          href={`/${basePath(internalLink?._type)}${
            internalLink?.slug.current === '/' ? '' : internalLink?.slug.current
          }`}
          className={className}
          aria-label={`${copy} Link`}
          rel={newTab ? 'noopener noreferrer' : null}
          target={newTab ? '_blank' : '_self'}
        >
          {children || copy}
        </Link>
      )}
    </>
  );
};

export { LinkObject };
