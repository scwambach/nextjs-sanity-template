import { BlockProps, ImageProps, ProgressiveImage } from '@components';

interface ImageBlockProps extends BlockProps {
  image: ImageProps;
}

const ImageBlock = ({ image, className }: ImageBlockProps) => {
  return (
    <div
      className={`relative pb-mobileVideo md:pb-banner${
        className ? ` ${className}` : ''
      }`}
    >
      <ProgressiveImage
        {...image}
        isBackground
        mobileCrop="squared"
        imgWidth={2000}
        imgHeight={500}
      />
    </div>
  );
};

export { ImageBlock };
