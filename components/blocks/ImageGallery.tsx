import { BlockProps, Container, Heading, MainContext } from '@components';
import { breakpoints } from '@styles';
import { urlFor } from '@utils';
import { useContext } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
interface ImageGalleryProps extends BlockProps {
  images?: {
    _key: string,
    alt: string;
    asset: {
      _ref: string,
      _type: string,
    }
  }[];
}

const ImageGallery = ({
  children,
  className,
  heading,
  index,
  images,
  subHeading,
}: ImageGalleryProps) => {
  const { windowWidth } = useContext(MainContext);
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div
      className={`imageGallery relative py-20${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
            {images?.map((image) => image && (
              <Zoom
                key={image._key}
                zoomImg={{
                  alt: image.alt,
                  src: `${urlFor( image).width(1000).height(700).fit('crop')}`,
                }}
                zoomMargin={windowWidth > breakpoints.lg ? 120 : 20}
              >
                <img
                  src={`${urlFor( image).width(500).height(350).fit('crop')}`}
                  loading="lazy"
                  alt={image.alt}
                />
              </Zoom>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { ImageGallery };
