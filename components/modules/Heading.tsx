import { indexHeading, noOrphans } from '@utils';
import {
  Container,
  LinkObject,
  PortableTextModule,
  LinkProps,
  HeadingElement,
} from '@components';

interface HeadingProps {
  heading?: string;
  subHeading?: string;
  message?: any;
  maxWidth?: number | string;
  index?: number;
  edges?: boolean;
  links?: LinkProps[];
}

const Heading = ({
  heading,
  subHeading,
  message,
  index,
  links = [],
  maxWidth,
  edges,
}: HeadingProps) => {
  return (
    <Container maxWidth={maxWidth} edges={edges}>
      <div className="relative mb-10 lg:mb-20">
        {heading && (
          <HeadingElement
            type={indexHeading(index)}
            className="heading-element"
          >
            {noOrphans(heading)}
          </HeadingElement>
        )}
        {subHeading && <p className="sub-heading">{noOrphans(subHeading)}</p>}
        {message && (
          <PortableTextModule
            text={message}
            className="text-sm md:text-base my-5"
          />
        )}
        {links?.length > 0 && (
          <div className="buttons flex items-center justify-center gap-10 mt-10">
            {links.map((link) => (
              <LinkObject
                key={link._key}
                {...link}
                className={`inline-block p-5 border-thin`}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export { Heading };
