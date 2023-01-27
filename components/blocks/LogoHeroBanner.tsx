import { BlockProps, Container, HeadingElement, ImageIcon } from '@components';
import { breakpoints } from '@styles';
import styled from 'styled-components';

interface LogoHeroBannerProps extends BlockProps {
  logo?: any;
  copy?: string;
}

const LogoHeroBanner = ({
  children,
  className,
  copy,
  logo,
}: LogoHeroBannerProps) => {
  return (
    <LogoBanner
      className={`logoHeroBanner component-shell${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      <div className="relative">
        <Container maxWidth={breakpoints.md}>
          <ImageIcon
            icon={logo}
            className="logo-block block w-full max-w-[350px] mx-auto"
          />

          {copy && (
            <HeadingElement
              className="text-center font-display sm:text-2xl lg:text-4xl mt-10 uppercase tracking-wide"
              type="h1"
            >
              {copy}
            </HeadingElement>
          )}
        </Container>
      </div>
    </LogoBanner>
  );
};

export { LogoHeroBanner };

const LogoBanner = styled.div`
  .logo-block {
    display: flex;
    justify-content: center;
  }
`;
