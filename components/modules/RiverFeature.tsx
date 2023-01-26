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
  parentIndex: number;
  feature: RiverFeatureProps;
}

const RiverFeature = ({
  index,
  parentIndex,
  feature: { image, title, videoModal, blockContent, links },
}: FeatureProps) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`riverFeature md:flex relative${
        index % 2 == 0 ? ' flex-row-reverse' : ' flex-row'
      }${index > 0 ? ' mt-5 md:mt-20 lg:mt-0' : ''}`}
    >
      <div className="image md:m-riverImage w-full md:w-1/2 relative pb-mobileVideo sm:pb-video md:pb-0">
        {image?.url && (
          <ProgressiveImage
            {...image}
            alt={title || `Feature Block ${index + 1} Image`}
            isBackground
            imgWidth={breakpoints.xl}
          />
        )}
        {videoModal && (
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            title="Play Video"
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
        className={`copy md:py-10 lg:py-20 py-10 md:w-1/2 ${
          index % 2 == 0 ? 'md:pr-10 lg:pr-20' : 'md:pl-10 lg:pl-20'
        }`}
      >
        {title && (
          <HeadingElement
            type={indexHeading(parentIndex)}
            className="text-blue-500 text-xl md:text-2xl lg:text-3xl font-bold md:mb-5"
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
