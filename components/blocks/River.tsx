import {
  BlockProps,
  Heading,
  ImageProps,
  LinkProps,
  Container,
  RiverFeature,
} from '@components';

import { breakpoints } from '@styles';

export interface RiverFeatureProps {
  _key: string;
  title?: string;
  videoModal?: string;
  blockContent: any | any[];
  image?: ImageProps;
  links?: LinkProps[];
}
interface RiverProps extends BlockProps {
  features?: RiverFeatureProps[];
}

const River = ({
  children,
  className,
  features,
  heading,
  index,
  subHeading,
}: RiverProps) => {
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div className={`river component-shell${className ? ` ${className}` : ''}`}>
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <Container maxWidth={breakpoints.xl}>
        {features?.map(
          (feature, featureIndex) =>
            feature && (
              <RiverFeature
                index={featureIndex}
                parentIndex={heading ? index + 2 : index + 1}
                feature={feature}
                key={feature._key}
              />
            )
        )}
      </Container>
    </div>
  );
};

export { River };
