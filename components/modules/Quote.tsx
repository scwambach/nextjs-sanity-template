import { ProgressiveImage, PortableTextModule, MainContext } from '@components';
import { breakpoints, colors } from '@styles';
import FaQuoteLeft from '@meronex/icons/fa/FaQuoteLeft';
import { useContext } from 'react';
import { QuoteProps } from 'components/blocks/Quotes';

interface SingleQuoteProps extends QuoteProps {
  length?: number;
  boxed?: boolean;
  colorCutOff?: boolean;
  index?: number;
}

const Quote = ({
  boxed,
  colorCutOff,
  quote,
  person,
  length,
  index,
}: SingleQuoteProps) => {
  const { windowWidth } = useContext(MainContext);
  return (
    <div
      className={`flex relative${
        boxed
          ? ` gap-10 lg:gap-0 p-5 md:p-10 lg:p-20 ${
              index + 1 === length
                ? ' mt-10 lg:mb-40 lg:mt-80'
                : index > 0
                ? ' mt-10 lg:mt-80'
                : 'border-[1px] border-black-900'
            }${
              index % 2 == 0
                ? ' text-black-900 bg-white-500'
                : ' bg-black-900 text-white-500'
            }`
          : ` gap-5 md:gap-10 lg:gap-20 ${index > 0 ? ' mt-32 lg:mt-10' : ''}`
      } items-center flex-col ${
        index % 2 == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      <div
        className={`copy w-full sm:w-1/2${
          !boxed && colorCutOff
            ? ' bg-white-100 md:p-5 md:border-[1px] md:border-black-900'
            : ''
        }`}
      >
        <FaQuoteLeft
          color={
            boxed
              ? index % 2 == 0
                ? colors.black
                : colors.white
              : colors.black
          }
          size={boxed ? (windowWidth < breakpoints.lg ? 30 : 60) : 60}
        />
        <PortableTextModule
          text={quote}
          className={boxed ? `mt-5 lg:mt-10` : 'mt-10'}
        />
        <p className="text-blue-500 font-bold text-2xl mt-10">
          {person?.firstName && <>{person?.firstName}</>}
          {person?.lastName && <>&nbsp;{person?.lastName}</>}
        </p>
        <p className="text-blue-500 font-bold">
          {person?.position && <>{person?.position}</>}
          {person?.position && person?.company && <>&nbsp;at&nbsp;</>}
          {person?.company && <>{person?.company.title}</>}
        </p>
      </div>
      <div
        className={`image w-full sm:w-1/2 relative${
          boxed
            ? ` lg:absolute lg:top-20 ${
                index % 2 == 0 ? 'lg:-right-10' : 'lg:-left-10'
              }`
            : ' mt-5 lg:mt-0'
        }`}
      >
        <div className="w-40 h-40 sm:h-auto sm:w-auto relative sm:pb-mobileVideo">
          {person?.photo && (
            <ProgressiveImage
              alt={`${person?.firstName} ${person?.lastName}`}
              {...person?.photo}
              isBackground
              imgWidth={windowWidth > breakpoints.sm ? 650 : 300}
              imgHeight={windowWidth > breakpoints.sm ? 650 : 300}
              width={560}
              height={560}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { Quote };
