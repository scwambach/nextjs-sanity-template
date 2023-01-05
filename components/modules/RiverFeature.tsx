import { breakpoints, colors } from '@styles';
import { useState } from 'react';
import {
  Button,
  HeadingElement,
  LinkObject,
  PortableTextModule,
  ProgressiveImage,
  VideoModal,
} from '@components';
import { RiverFeatureProps } from 'components/blocks/River';
import { AiFillPlayCircle } from '@meronex/icons/ai';
import { indexHeading, noOrphans } from '@utils';

interface FeatureProps {
  index: number;
  boxed?: boolean;
  parentIndex: number;
  feature: RiverFeatureProps;
}

const RiverFeature = ({
  index,
  parentIndex,
  boxed,
  feature: { image, title, videoModal, blockContent, links },
}: FeatureProps) => {
  const [active, setActive] = useState(false);
  return (
    <div
      data-testid="riverFeature"
      className={`riverFeature md:flex relative${
        index % 2 == 0 ? ' flex-row-reverse' : ' flex-row'
      }${
        index > 0
          ? boxed
            ? ' mt-5 md:mt-20 lg:mt-32'
            : ' mt-5 md:mt-20 lg:mt-0'
          : ''
      }${boxed ? ' boxed' : ''}`}
    >
      <div
        className={`image md:m-riverImage w-full md:w-1/2 relative pb-mobileVideo sm:pb-video md:pb-0
      ${boxed ? 'mx-auto top-20 -mt-20 md:mx-0 md:top-0' : ''}
      `}
      >
        {image?.url && (
          <ProgressiveImage
            {...image}
            alt={title || `Feature Block ${index + 1} Image`}
            isBackground
            imgHeight={boxed ? breakpoints.md : undefined}
            imgWidth={boxed ? breakpoints.md : breakpoints.xl}
          />
        )}
        {videoModal && (
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            title="Play Video"
            data-testid="videoModalButton"
            onClick={() => {
              setActive(true);
            }}
          >
            <AiFillPlayCircle color={colors.white} size={100} />
          </button>
        )}
        {videoModal && (
          <VideoModal
            video={videoModal}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
      <div
        data-testid="copy"
        className={`copy md:py-10 lg:py-20 py-10 ${
          boxed
            ? `md:w-4/5 lg:w-3/5 px-5 lg:px-10 pt-28 ${
                index % 2 == 0
                  ? 'md:-mr-20 md:pr-24 lg:pr-36 bg-black-900 text-white-500'
                  : 'md:-ml-20 md:pl-24 lg:pl-36 bg-white-500 text-black-900'
              }`
            : `md:w-1/2 ${
                index % 2 == 0 ? 'md:pr-10 lg:pr-20' : 'md:pl-10 lg:pl-20'
              }`
        }`}
      >
        {title && (
          <HeadingElement
            type={indexHeading(parentIndex)}
            className={`${
              boxed
                ? index % 2 == 0
                  ? 'text-yellow-500'
                  : 'text-red-500'
                : 'text-red-500'
            } text-xl md:text-2xl lg:text-3xl font-bold md:mb-5`}
          >
            {noOrphans(title)}
          </HeadingElement>
        )}
        {blockContent && (
          <PortableTextModule
            text={blockContent}
            className="text-sm md:text-base"
          />
        )}

        {links?.length > 0 && (
          <div className="buttons flex flex-col md:flex-row gap-2 mt-10">
            {links.map((link) => (
              <Button key={link._key}>
                <LinkObject key={link._key} {...link} />
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { RiverFeature };
