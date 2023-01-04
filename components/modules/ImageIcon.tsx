import { ImageProps, ProgressiveImage } from '@components';

interface IconImageProps extends ImageProps {
  imgWidth?: number;
  imgHeight?: number;
}

interface ImageIconProps {
  image?: IconImageProps;
  icon?: string;
  className?: string;
}

const ImageIcon = ({ image, icon, className }: ImageIconProps) => {
  return (
    <>
      {image?.url ? (
        <ProgressiveImage alt="Icon Image" {...image} className={className} />
      ) : (
        <span
          className={className}
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
      )}
    </>
  );
};

export { ImageIcon };
