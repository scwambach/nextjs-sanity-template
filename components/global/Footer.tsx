import { useContext } from 'react';
import { LinkObject, MainContext, Container, Address } from '@components';
import { breakpoints } from '@styles';
import dayjs from 'dayjs';

const Footer = () => {
  const year = dayjs(new Date()).format('YYYY');
  const {
    footerNavigation,
    site: { siteTitle },
  } = useContext(MainContext);

  return (
    <footer className="bg-black-500 text-white-500">
      <Container maxWidth={breakpoints.xl}>
        <nav className="grid text-center md:text-left md:grid-cols-2 gap-10 lg:grid-cols-4 py-20">
          <Address />
          {footerNavigation.items.map((column) => (
            <div key={column._key}>
              <p className="font-bold text-xl">{column.link.copy}</p>
              <menu>
                {column.link.subItems.map((subItem) => (
                  <li
                    key={subItem._key}
                    className="text-black-300 lg:hover:text-white-500 lg:transition-all"
                  >
                    <LinkObject {...subItem} />
                  </li>
                ))}
              </menu>
            </div>
          ))}
        </nav>

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
