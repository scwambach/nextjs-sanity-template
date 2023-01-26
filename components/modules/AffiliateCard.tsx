import { ImageIcon, LinkObject, AffiliateCardProps } from '@components';
import { noOrphans } from '@utils';

const AffiliateCard = ({
  title,
  customIcon,
  colorCutOff,
  hasBg,
  description,
  iconImage,
  links = [],
}: AffiliateCardProps) => {
  const icon =
    customIcon && customIcon.customStyleCode
      ? customIcon.customStyleCode.code
      : undefined;
  return (
    <div
      className={`flex items-center shadow-md shadow-black-100 justify-center flex-col text-center px-3 lg:px-5 py-7 lg:py-10 bg-white-100 text-black-900${
        colorCutOff || hasBg ? ' bg-white-100' : ''
      }`}
    >
      <div className="w-1/2 ">
        <ImageIcon
          icon={icon}
          image={{
            ...iconImage,
            imgWidth: 200,
            imgHeight: 200,
          }}
          className="block"
        />
      </div>
      {links[0] ? (
        <LinkObject
          className="text-blue-500 font-bold text-xl my-2 md:my-5"
          newTab
          url={links[0].url}
        >
          {title}
        </LinkObject>
      ) : (
        <p className="text-blue-500 font-bold text-xl my-2 md:my-5">{title}</p>
      )}
      <p className="clamp text-sm md:text-md">{noOrphans(description)}</p>
    </div>
  );
};

export { AffiliateCard };
