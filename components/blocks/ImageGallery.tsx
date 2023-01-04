import { BlockProps, Container, Heading } from '@components';
import { breakpoints } from '@styles';
import { ZoomImage } from 'components/modules/ZoomImage';
import 'react-medium-image-zoom/dist/styles.css';

interface ImageGalleryProps extends BlockProps {
  images?: any[];
}

const ImageGallery = ({
  children,
  className,
  heading,
  index,
  images,
  subHeading,
}: ImageGalleryProps) => {
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
            {images.map((image) => (
              <ZoomImage key={image._key} image={image} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { ImageGallery };
