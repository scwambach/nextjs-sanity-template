import { useContext, useState } from 'react';
import Link from 'next/link';
import { breakpoints } from '@styles';
import {
  AlertBar,
  Container,
  ImageIcon,
  MainContext,
  MainNav,
  NavToggle,
} from '@components';

const Header = ({ alerted }: { alerted: boolean }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const {
    site: { siteTitle, alertBar, iconImage, customIcon },
  } = useContext(MainContext);
  const toggleProps = { menuOpen, setMenuOpen };

  return (
    <header className="fixed w-full top-0 left-0 z-30 bg-blue-500">
      {alerted && <AlertBar {...alertBar} />}
      <Container maxWidth={breakpoints.xl}>
        <nav className="flex items-center justify-between relative py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home Link">
            <div className="w-7">
              <ImageIcon image={iconImage} icon={customIcon} />
            </div>
            <p className="hidden sm:block font-display text-md lg:text-xl ml-3">
              {siteTitle}
            </p>
          </Link>
          {/* Toggle Button */}
          <NavToggle {...toggleProps} />
          {/* Menu */}
          <MainNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
      </Container>
    </header>
  );
};

export { Header };
