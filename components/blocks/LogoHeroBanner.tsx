import { BlockProps, Container, HeadingElement, ImageIcon } from '@components';
import { breakpoints } from '@styles';

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
    <div
      className={`logoHeroBanner relative py-12 lg:py-20${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <ImageIcon
            icon={logo}
            className="block w-full max-w-[600px] mx-auto"
          />

          {copy && (
            <HeadingElement
              className="text-center font-display text-4xl mt-10 uppercase tracking-wide"
              type="h1"
            >
              {copy}
            </HeadingElement>
          )}
        </Container>
      </div>
    </div>
  );
};

export { LogoHeroBanner };
