import {
  BlockProps,
  Container,
  Heading,
  PersonCardProps,
  PersonCard,
} from '@components';
import { breakpoints } from '@styles';

interface PeopleListingProps extends BlockProps {
  people: PersonCardProps[];
}

const PeopleListing = ({
  children,
  className,
  heading,
  index,
  people,
  subHeading,
}: PeopleListingProps) => {
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div
      className={`peopleListing component-shell${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {people?.map((person) => {
              return person && <PersonCard key={person._id} {...person} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export { PeopleListing };
