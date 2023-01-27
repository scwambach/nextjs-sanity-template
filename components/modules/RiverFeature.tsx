import { breakpoints, colors } from '@styles';
import { useContext, useState } from 'react';
import {
  Button,
  HeadingElement,
  LinkObject,
  MainContext,
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
  const { windowWidth } = useContext(MainContext);
  return (
    <div
      className={`riverFeature sm:flex relative${
        index % 2 == 0 ? ' flex-row-reverse' : ' flex-row'
      }${index > 0 ? ' mt-5 sm:mt-10 lg:mt-0' : ''}`}
    >
      <div className="image sm:m-riverImage w-full sm:w-1/2 relative pb-video lg:pb-0">
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
            <AiFillPlayCircle
              color={colors.white}
              size={windowWidth > breakpoints.sm ? 80 : 50}
            />
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
        className={`copy py-5 sm:py-10 lg:py-20 sm:w-1/2 flex flex-col justify-center ${
          index % 2 == 0 ? 'sm:pr-10 lg:pr-20' : 'sm:pl-10 lg:pl-20'
        }`}
      >
        {title && (
          <HeadingElement
            type={indexHeading(parentIndex)}
            className="heading-element mb-2 md:mb-5 text-blue-500"
          >
            {noOrphans(title)}
          </HeadingElement>
        )}
        {blockContent && <PortableTextModule text={blockContent} />}

        {links?.length > 0 && (
          <div className="buttons flex flex-row gap-2 my-5 sm:mt-10 sm:m">
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
