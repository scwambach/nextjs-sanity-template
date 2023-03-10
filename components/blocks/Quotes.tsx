import {
  BlockProps,
  Container,
  Heading,
  ImageProps,
  LinkProps,
  Quote,
} from '@components';
import { breakpoints } from '@styles';

export interface QuoteProps {
  _id: string;
  quote?: any[];
  person: {
    firstName?: string;
    lastName?: string;
    position?: string;
    photo?: ImageProps;
    company?: {
      title: string;
      customIcon?: string;
      iconImage?: ImageProps;
      links?: LinkProps[];
    };
  };
}

interface QuotesProps extends BlockProps {
  quotes: QuoteProps[];
}

const Quotes = ({
  children,
  className,
  colorCutOff,
  heading,
  index,
  quotes,
  subHeading,
}: QuotesProps) => {
  const headingProps = {
    heading,
    subHeading,
    index,
    maxWidth: breakpoints.xl,
  };

  return (
    <div className={`river component-shell${className ? ` ${className}` : ''}`}>
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <Container maxWidth={breakpoints.xl} className="relative">
        {quotes?.map((quote, index) => {
          return (
            quote && (
              <Quote
                {...quote}
                key={quote._id}
                index={index}
                colorCutOff={colorCutOff}
                length={quotes?.length}
              />
            )
          );
        })}
      </Container>
    </div>
  );
};

export { Quotes };
