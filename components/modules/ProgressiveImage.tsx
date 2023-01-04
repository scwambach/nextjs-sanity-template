import { useContext, useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/legacy/image';
import { ImageProps, MainContext } from '@components';
import { breakpoints } from '@styles';
import { getClient, newRatio } from '@utils';

interface ProgressiveImageProps extends ImageProps {
  alt: string;
  className?: string;
  imgHeight?: number;
  imgWidth?: number;
  isBackground?: boolean;
  mobileCrop?: boolean | 'squared';
  overrideSize?: boolean;
  priority?: boolean;
  quality?: number;
  thin?: boolean;
  title?: string;
}

const ProgressiveImage = ({
  alt = null,
  className = '',
  crop,
  height,
  imgHeight = null,
  imgWidth = breakpoints.xxl,
  isBackground = false,
  lqip,
  mobileCrop,
  overrideSize = false,
  priority = false,
  quality = 90,
  reference,
  title = null,
  url,
  width,
}: ProgressiveImageProps) => {
  const { windowWidth } = useContext(MainContext);
  const [loaded, setLoaded] = useState(false);

  const myCustomImageBuilder = (imageUrlBuilder) => {
    if (imgHeight) {
      if (mobileCrop) {
        if (windowWidth < breakpoints.sm) {
          return imageUrlBuilder
            .width(breakpoints.sm)
            .height(
              mobileCrop === 'squared' ? breakpoints.sm : breakpoints.sm * 1.5
            )
            .quality(quality)
            .fit('clip');
        }

        if (windowWidth < breakpoints.md) {
          return imageUrlBuilder
            .width(breakpoints.md)
            .height(
              mobileCrop === 'squared' ? breakpoints.md : breakpoints.md / 1.5
            )
            .quality(quality)
            .fit('clip');
        }

        if (windowWidth > 2000) {
          return imageUrlBuilder
            .width(imgWidth)
            .height(imgHeight)
            .quality(quality)
            .fit('clip');
        }
      }
      return imageUrlBuilder
        .width(imgWidth)
        .height(imgHeight)
        .quality(quality)
        .fit('clip');
    }

    if (mobileCrop) {
      if (windowWidth < breakpoints.sm) {
        return imageUrlBuilder
          .width(breakpoints.sm)
          .height(
            mobileCrop === 'squared' ? breakpoints.sm : breakpoints.sm * 1.5
          )
          .quality(quality)
          .fit('clip');
      }

      if (windowWidth < breakpoints.md) {
        return imageUrlBuilder
          .width(breakpoints.md)
          .height(
            mobileCrop === 'squared' ? breakpoints.md : breakpoints.md / 1.5
          )
          .quality(quality)
          .fit('clip');
      }

      if (windowWidth > 2000) {
        return imageUrlBuilder
          .width(imgWidth + 600)
          .height(900)
          .quality(quality)
          .fit('clip');
      }

      return imageUrlBuilder.width(imgWidth).quality(quality);
    }
    return imageUrlBuilder.width(imgWidth).quality(quality);
  };

  const imageProps: { src: string } = useNextSanityImage(
    getClient(),
    reference,
    {
      imageBuilder: myCustomImageBuilder,
    }
  );

  const dimensions = newRatio(crop, {
    height: height,
    width: width,
  });

  return (
    <div className="image-container">
      <Image
        alt={alt}
        title={title || alt}
        height={isBackground ? null : overrideSize ? height : dimensions.height}
        width={isBackground ? null : overrideSize ? width : dimensions.width}
        layout={isBackground ? 'fill' : 'intrinsic'}
        src={imageProps ? imageProps.src : url}
        blurDataURL={lqip}
        priority={priority}
        quality={quality}
        placeholder="blur"
        className={`${
          isBackground
            ? 'max-h-full min-h-full transition-all ease-in-out max-w-full min-w-full object-cover object-center pointer-events-none '
            : ''
        }${loaded ? 'unblur ' : ''}${className}`}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
};

export { ProgressiveImage };
