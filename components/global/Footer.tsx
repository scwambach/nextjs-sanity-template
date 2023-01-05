import { useContext } from 'react';
import { MainContext, Container } from '@components';
import { breakpoints } from '@styles';
import dayjs from 'dayjs';

const Footer = () => {
  const year = dayjs(new Date()).format('YYYY');
  const {
    site: { siteTitle },
  } = useContext(MainContext);

  return (
    <footer className="bg-black-900 text-white-500">
      <Container maxWidth={breakpoints.xl}>
        <div className="py-12 md:flex md:items-center md:justify-between border-t-2 border-black-400 text-black-300">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base">
              &copy; {year} {siteTitle}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
