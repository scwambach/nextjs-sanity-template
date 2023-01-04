import { colors } from '@styles';
import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import '../styles/main.scss';

function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <NextNprogress
        color={colors.red}
        options={{
          easing: 'ease',
          speed: 500,
          showSpinner: false,
        }}
      />
      <AnyComponent {...pageProps} />
    </>
  );
}

export default App;
