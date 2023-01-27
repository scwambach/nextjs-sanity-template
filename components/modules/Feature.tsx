import { DynamicIcon } from '@components';
import { noOrphans } from '@utils';
interface FeatureProps {
  heading?: string;
  icon?: string;
  message?: string;
  colorCutOff?: boolean;
  backgroundColor?: string;
}

const Feature = ({
  heading,
  icon,
  message,
  colorCutOff,
  backgroundColor,
}: FeatureProps) => {
  return (
    <div
      className={`feature ${
        colorCutOff ? 'px-4 py-6 border-[1px] border-black-900' : ''
      }${
        colorCutOff
          ? backgroundColor === 'bg-white-100'
            ? ' bg-blue-500'
            : ' bg-white-100'
          : ''
      }`}
    >
      {icon && <DynamicIcon faIcons name={icon} size={50} />}
      {heading && (
        <p className="mt-5 font-bold md:text-xl">{noOrphans(heading)}</p>
      )}
      {message && (
        <p className="base-copy-size sml mt-5">{noOrphans(message)}</p>
      )}
    </div>
  );
};

export { Feature };
