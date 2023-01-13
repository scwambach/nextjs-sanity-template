import { GlobalProps } from 'components/modules/CommonInterface';
import Head from 'next/head';

const DocHead = ({ site }: GlobalProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="og:site_name" content={site.siteTitle || 'SITE TITLE'} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export { DocHead };
