import {
  ProgressiveImage,
  LinkObject,
  DynamicIcon,
  PersonCardProps,
  MainContext,
} from '@components';
import { breakpoints, colors } from '@styles';
import { useContext } from 'react';

const PersonCard = ({
  description,
  firstName,
  lastName,
  photo,
  position,
  socials,
}: PersonCardProps) => {
  const name = `${firstName}${lastName ? ` ${lastName}` : ''}`;
  const { windowWidth } = useContext(MainContext);
  return (
    <div className="bg-white-100">
      <ProgressiveImage
        {...photo}
        alt={name}
        imgHeight={600}
        imgWidth={600}
        height={600}
        width={600}
        className="w-full"
      />
      <div className="p-5 shadow-md shadow-black-100 bg-white-100">
        <p className="font-bold md:text-xl">{name}</p>
        <p className="text-sm md:text-lg text-blue-500 italic">{position}</p>
        {description && <p className="mt-2 hidden lg:block ">{description}</p>}
        {socials && socials.length > 0 && (
          <div className="flex flex-wrap gap-5 mt-5 md:mt-10">
            {socials.map(({ icon, url, _key }) => (
              <LinkObject key={_key} newTab url={url} copy={url}>
                <DynamicIcon
                  name={icon}
                  size={windowWidth > breakpoints.md ? 30 : 20}
                  color={colors.black}
                />
              </LinkObject>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { PersonCard };
