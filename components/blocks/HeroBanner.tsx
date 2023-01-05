import {
  BlockProps,
  Container,
  HeadingElement,
  ImageProps,
  Button,
  LinkObject,
  LinkProps,
  PortableTextModule,
  ProgressiveImage,
  MainContext,
} from '@components';
import { breakpoints } from '@styles';
import { indexHeading, noOrphans } from '@utils';
import { useContext } from 'react';

interface HeroBannerProps extends BlockProps {
  links?: LinkProps[];
  mainImage?: ImageProps;
  message?: any;
  secondaryImage?: ImageProps;
}

const HeroBanner = ({
  children,
  className,
  heading,
  index,
  links = [],
  mainImage,
  message,
  backgroundColor,
  secondaryImage,
  subHeading,
}: HeroBannerProps) => {
  const hasImage = !!mainImage || !!secondaryImage;
  const largeType = !hasImage && !message;

  const { windowWidth } = useContext(MainContext);

  return (
    <div className={`heroBanner relative${className ? ` ${className}` : ''}`}>
      {children}
      <div className={`relative${hasImage ? ' lg:pt-20' : ' py-12 lg:py-20'}`}>
        <Container
          maxWidth={breakpoints.xl}
          className={hasImage ? 'flex gap-10 flex-col lg:flex-row' : ''}
        >
          <div
            className={
              hasImage
                ? `relative lg:w-1/2 ${
                    !!secondaryImage
                      ? 'pt-20 lg:pt-10 lg:pb-36'
                      : 'py-12 lg:py-20'
                  }`
                : 'w-full'
            }
          >
            {subHeading && (
              <p
                className={`lg:text-xl mb-5 font-display ${
                  largeType ? 'text-red-500' : 'text-black-900'
                }`}
              >
                {noOrphans(subHeading)}
              </p>
            )}
            <HeadingElement
              type={indexHeading(index)}
              className={`font-display ${
                largeType
                  ? 'text-xl md:text-2xl lg:text-4xl text-black-900'
                  : 'text-xl md:text-2xl lg:text-3xl text-red-500'
              }`}
            >
              {noOrphans(heading)}
            </HeadingElement>
            {message && (
              <PortableTextModule
                text={message}
                className="text-sm md:text-md my-5"
              />
            )}
            {links?.length > 0 && (
              <div className="buttons flex items-center justify-start gap-10 mt-10">
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
            {!!secondaryImage && (
              <div className="imagebox secondaryImage lg:absolute z-10 hidden lg:block">
                <ProgressiveImage
                  {...secondaryImage}
                  alt={`${heading} (secondary image)`}
                  imgWidth={windowWidth > breakpoints.lg ? 350 : breakpoints.lg}
                  imgHeight={windowWidth > breakpoints.lg ? 230 : 650}
                  width={windowWidth > breakpoints.lg ? 350 : breakpoints.lg}
                  height={windowWidth > breakpoints.lg ? 230 : 650}
                />
              </div>
            )}
          </div>
          {hasImage && (
            <div className="lg:w-1/2 relative">
              <div className="imagebox lg:absolute top-0 z-10 mb-10">
                <ProgressiveImage
                  {...mainImage}
                  alt={heading}
                  imgWidth={windowWidth > breakpoints.lg ? 700 : breakpoints.lg}
                  imgHeight={windowWidth > breakpoints.lg ? 700 : 650}
                  width={windowWidth > breakpoints.lg ? 700 : breakpoints.lg}
                  height={windowWidth > breakpoints.lg ? 700 : 650}
                />
              </div>
            </div>
          )}
        </Container>
        {hasImage && (
          <div
            className={`hidden lg:block pb-52${
              backgroundColor === 'bg-white-100'
                ? ' bg-white-500'
                : ' bg-white-100'
            }`}
          />
        )}
      </div>
    </div>
  );
};

export { HeroBanner };
