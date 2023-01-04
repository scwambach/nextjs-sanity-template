import {
  AffiliateCard,
  AffiliateCardProps,
  BlockProps,
  Container,
  Heading,
} from '@components';
import { breakpoints } from '@styles';

interface AffiliateListProps extends BlockProps {
  affiliates: AffiliateCardProps[];
}

const AffiliateList = ({
  affiliates,
  backgroundImage,
  backgroundVideo,
  children,
  className,
  colorCutOff,
  heading,
  index,
  subHeading,
}: AffiliateListProps) => {
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };

  const hasBg = !!backgroundImage || !!backgroundVideo || !!colorCutOff;

  return (
    <div
      className={`affiliateList relative py-12 lg:py-20${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <div className="grid gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {affiliates?.map((affiliate) => {
              return (
                affiliate && (
                  <AffiliateCard
                    key={affiliate._id}
                    {...affiliate}
                    hasBg={hasBg}
                  />
                )
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { AffiliateList };
