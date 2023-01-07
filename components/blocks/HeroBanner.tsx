import {
  BlockProps,
  Container,
  HeadingElement,
  Button,
  LinkObject,
  LinkProps,
  PortableTextModule,
} from '@components';
import { breakpoints } from '@styles';
import { indexHeading, noOrphans } from '@utils';

interface HeroBannerProps extends BlockProps {
  links?: LinkProps[];
  fullScreen?: boolean;
  message?: any;
  alignment?: 'left' | 'right' | 'center';
}

const HeroBanner = ({
  alignment,
  children,
  className,
  fullScreen,
  heading,
  index,
  links = [],
  message,
  subHeading,
}: HeroBannerProps) => {
  return (
    <div className={`heroBanner relative${className ? ` ${className}` : ''}`}>
      {children}
      <div
        className={`relative py-12 sm:py-16 md:py-20${
          fullScreen ? ' md:max-h-[800px] md:h-fullScreen' : ''
        } md:flex md:flex-col md:justify-center`}
      >
        <Container maxWidth={breakpoints.xl}>
          <div
            className={`flex flex-col justify-center${
              alignment === 'right'
                ? ' md:w-1/2 xl:w-3/4 md:items-end md:text-right md:mr-0 md:ml-auto'
                : alignment === 'center'
                ? ' md:items-center md:text-center m-auto'
                : ' md:w-1/2 xl:w-3/4'
            }`}
          >
            <HeadingElement
              type={indexHeading(index)}
              className="font-display text-xl md:text-2xl lg:text-4xl"
            >
              {noOrphans(heading)}
            </HeadingElement>
            {subHeading && (
              <p className="lg:text-lg">{noOrphans(subHeading)}</p>
            )}
            {message && (
              <PortableTextModule
                text={message}
                className="text-sm md:text-md"
              />
            )}
            {links?.length > 0 && (
              <div className="buttons flex items-center justify-start gap-2">
                {links.map(
                  (link) =>
                    (link.internalLink || link.url) && (
                      <Button key={link._key}>
                        <LinkObject {...link} />
                      </Button>
                    )
                )}
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { HeroBanner };
