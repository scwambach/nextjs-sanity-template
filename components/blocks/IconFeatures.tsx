import { BlockProps, Container, Heading, Feature } from '@components';
import { breakpoints } from '@styles';

interface IconFeaturesProps extends BlockProps {
  features: {
    _key: string;
    heading: string;
    icon: string;
    message: string;
  }[];
}

const IconFeatures = ({
  backgroundColor,
  children,
  className,
  colorCutOff,
  features,
  heading,
  index,
  subHeading,
}: IconFeaturesProps) => {
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div
      className={`iconFeatures component-shell${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <div className="grid grid-cols-1 gap-10 md:gap-20 sm:grid-cols-2 md:grid-cols-3">
            {features?.map(
              (feature) =>
                feature && (
                  <Feature
                    key={feature._key}
                    {...feature}
                    colorCutOff={colorCutOff}
                    backgroundColor={backgroundColor}
                  />
                )
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { IconFeatures };
