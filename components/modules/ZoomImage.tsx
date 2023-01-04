import { ProgressiveImage } from '@components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomImageProps {
  image: any;
}

const ZoomImage = ({ image }: ZoomImageProps) => {
  return (
    <Zoom>
      <ProgressiveImage {...image} imgWidth={1500} />
    </Zoom>
  );
};

export { ZoomImage };
