import { ImageIcon, LinkObject, AffiliateCardProps } from '@components';

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
      className={`flex items-center justify-center flex-col text-center border-2 border-black-500 px-3 lg:px-5 py-7 lg:py-10${
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
          className="text-red-500 font-bold text-xl my-5"
          newTab
          url={links[0].url}
        >
          {title}
        </LinkObject>
      ) : (
        <p className="text-red-500 font-bold text-xl my-5">{title}</p>
      )}
      <p className="text-sm md:text-md">{description}</p>
    </div>
  );
};

export { AffiliateCard };
