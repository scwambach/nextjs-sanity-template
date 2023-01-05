import { DynamicIcon } from '@components';
import { noOrphans } from '@utils';
interface FeatureProps {
  heading?: string;
  icon?: string;
  message?: string;
  boxed?: boolean;
  colorCutOff?: boolean;
  backgroundColor?: string;
}

const Feature = ({
  heading,
  icon,
  message,
  boxed,
  colorCutOff,
  backgroundColor,
}: FeatureProps) => {
  return (
    <div
      className={`feature ${
        boxed
          ? ' border-2 border-black-900 px-4 lg:px-8 py-8 lg:py-10 '
          : colorCutOff
          ? 'px-4 py-6 border-2 border-black-900'
          : ''
      }${
        colorCutOff
          ? backgroundColor === 'bg-white-100'
            ? ' bg-white-500'
            : ' bg-white-100'
          : ''
      }`}
    >
      {icon && <DynamicIcon faIcons name={icon} size={boxed ? 80 : 50} />}
      {heading && (
        <p className="mt-5 font-bold md:text-xl">{noOrphans(heading)}</p>
      )}
      {message && (
        <p className="text-sm md:text-md mt-5">{noOrphans(message)}</p>
      )}
    </div>
  );
};

export { Feature };
