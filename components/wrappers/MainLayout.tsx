import { createContext, useEffect, useState } from 'react';
import {
  DocHead,
  Header,
  Footer,
  Seo,
  ContactProps,
  SiteProps,
  SearchItem,
  NavProps,
} from '@components';
import dayjs from 'dayjs';

type MainLayoutProps = {
  mainNavigation?: NavProps;
  footerNavigation?: NavProps;
  contact?: ContactProps;
  site?: SiteProps;
  data?: any;
  search?: SearchItem[];
  children?: any;
};

interface ContextProps extends MainLayoutProps {
  alerted?: boolean;
  scrollingDown?: boolean;
  hasWindow?: boolean;
  setAlerted?: Function;
  windowWidth?: number;
}

export const MainContext = createContext<ContextProps | null>(null);

const MainLayout = ({
  mainNavigation,
  footerNavigation,
  contact,
  site,
  search,
  data,
  children,
}: MainLayoutProps) => {
  const today = dayjs(new Date()).format('YYYY-MM-DD');

  const [hasWindow, setHasWindow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [alerted, setAlerted] = useState(false);

  useEffect(() => {
    const isAlertClosed = sessionStorage.getItem('alertClosed');

    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }

    if (isAlertClosed) {
      setAlerted(false);
    } else {
      setAlerted(
        !!site.alertBar &&
          today >= site.alertBar.startDate &&
          today <= site.alertBar.endDate
      );
    }

    window.onscroll = () => {
      if (window.oldScroll < window.scrollY && window.scrollY > 100) {
        setScrollingDown(true);
      } else if (window.scrollY < 100) {
        setScrollingDown(false);
      }

      window.oldScroll = window.scrollY;
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        alerted,
        contact,
        footerNavigation,
        hasWindow,
        mainNavigation,
        scrollingDown,
        search,
        setAlerted,
        site,
        windowWidth,
      }}
    >
      <DocHead site={site} />
      <Seo data={data} global={{ site }} />
      <a
        className="skip-to-content absolute -translate-y-[150%] transition-all ease-in-out duration-150 focus:translate-y-0 focus:z-[99] bg-white-100 text-black-900 rounded-md p-2"
        href="#main-content"
      >
        Skip to content
      </a>

      <Header alerted={alerted} />
      <main id="main-content" className="pt-header text-black-900 font-body">
        {children}
      </main>
      <Footer />
    </MainContext.Provider>
  );
};

export { MainLayout };
