import {
  BlockProps,
  Container,
  Heading,
  PortableTextModule,
  MainContext,
} from '@components';
import { breakpoints } from '@styles';
import FaChevronDown from '@meronex/icons/fa/FaChevronDown';
import { useContext, useState } from 'react';
interface AccordionProps extends BlockProps {
  items: {
    _key: string;
    label: string;
    content: any[];
  }[];
}

const Accordion = ({
  children,
  className,
  heading,
  index,
  items,
  subHeading,
  backgroundColor,
}: AccordionProps) => {
  const { windowWidth } = useContext(MainContext);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div
      className={`accordion relative py-12 lg:py-20${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          {items?.map(({ label, _key, content }, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={_key}>
                <button
                  className={`${
                    isActive
                      ? backgroundColor === 'bg-white-100'
                        ? 'bg-white-300'
                        : 'bg-black-400'
                      : backgroundColor === 'bg-white-100'
                      ? 'bg-white-500'
                      : 'bg-black-500'
                  } ${
                    backgroundColor === 'bg-white-100' ? '' : 'text-white-100 '
                  }p-5 text-sm lg:text-lg font-bold flex lg:gap-10 items-center justify-between w-full text-left mb-5`}
                  onClick={() => {
                    if (isActive) {
                      setActiveIndex(undefined);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <span className="w-5/6">{label}</span>
                  <FaChevronDown
                    size={windowWidth > breakpoints.md ? 27 : 20}
                    className={`w-[30px] transition-all duration-300 ${
                      isActive ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`${
                    isActive
                      ? 'opacity-100 max-h-[500px]'
                      : 'opacity-0 max-h-0 overflow-hidden'
                  } transition-all ease-in-out duration-300`}
                >
                  <PortableTextModule
                    text={content}
                    className={`${
                      backgroundColor === 'bg-white-100'
                        ? 'bg-white-300'
                        : 'bg-black-400 text-white-100'
                    } text-sm md:text-md p-5 mb-5`}
                  />
                </div>
              </div>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export { Accordion };
