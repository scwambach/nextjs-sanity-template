import { ProgressiveImage, PortableTextModule, MainContext } from '@components';
import { breakpoints, colors } from '@styles';
import FaQuoteLeft from '@meronex/icons/fa/FaQuoteLeft';
import { useContext } from 'react';
import { QuoteProps } from 'components/blocks/Quotes';

interface SingleQuoteProps extends QuoteProps {
  length?: number;
  colorCutOff?: boolean;
  index?: number;
}

const Quote = ({ quote, person, index }: SingleQuoteProps) => {
  const { windowWidth } = useContext(MainContext);
  return (
    <div
      className={`flex relative gap-5 md:gap-10 lg:gap-20 ${
        index > 0 ? ' mt-32 lg:mt-10' : ''
      } items-center flex-col ${
        index % 2 == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      <div className="copy w-full sm:w-1/2">
        <FaQuoteLeft color={colors.black} size={60} />
        <PortableTextModule text={quote} className="mt-10" />
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
      <div className="image w-full sm:w-1/2 relative mt-5 lg:mt-0">
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
