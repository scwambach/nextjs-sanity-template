import {
  BlockProps,
  Button,
  Container,
  HeadingElement,
  LinkObject,
  LinkProps,
} from '@components';
import { breakpoints } from '@styles';
import { indexHeading, noOrphans } from '@utils';

interface CtaBlockProps extends BlockProps {
  centered?: boolean;
  cta: {
    message: string;
    title: string;
    links: LinkProps[];
  };
}

const CtaBlock = ({
  centered,
  children,
  className,
  cta,
  index,
}: CtaBlockProps) => {
  return (
    <div
      className={`ctaBlock component-shell${className ? ` ${className}` : ''}`}
    >
      {children}

      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <div
            className={`${
              centered
                ? ' border-[1px] bg-white-100 border-black-900 p-4 sm:p-8 md:p-14 lg:p-20'
                : ''
            }`}
          >
            <div
              className={`flex flex-col ${
                centered ? 'text-center' : 'lg:flex-row lg:gap-20'
              } gap-5`}
            >
              <HeadingElement
                type={indexHeading(index)}
                className={`font-display leading-6 ${
                  centered
                    ? 'text-xl md:text-2xl lg:text-4xl'
                    : 'text-xl sm:text-2xl md:text-4xl lg:text-5xl lg:w-1/2'
                }`}
              >
                {cta?.title}
              </HeadingElement>
              <p className={`base-copy-size ${centered ? '' : 'lg:w-1/2'}`}>
                {noOrphans(cta?.message)}
              </p>
            </div>
            {cta?.links?.length > 0 && (
              <div
                className={`buttons flex items-start sm:flex-row gap-2 mt-10${
                  centered ? ' justify-center' : ''
                }`}
              >
                {cta?.links.map((link) => (
                  <Button key={link._key}>
                    <LinkObject key={link._key} {...link} />
                  </Button>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { CtaBlock };
