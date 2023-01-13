import Head from 'next/head';
import { urlFor } from '@utils';

const Seo = ({ data, global }) => {
  const isHome = data.slug === '/';
  const pagePath = process.env.SITE_URL + (isHome ? '' : data.slug);
  const pageImage = data.mainImage
    ? `${urlFor(data.mainImage).width(1200).height(630)}`
    : `${urlFor(global.site.defaultOgImage).width(1200).height(630)}`;
  const twitterImage = data.mainImage
    ? `${urlFor(data.mainImage).width(1200).height(630)}`
    : `${urlFor(global.site.defaultOgImage).width(1200).height(630)}`;
  const pageDesc = data.pageDescription || global.site.siteDescription;
  const pageTitle = isHome
    ? global.site.siteTitle
    : `${data.title} | ${global.site.siteTitle}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="canonical" href={pagePath} />
      <meta property="og:image" content={pageImage} />
      <meta name="twitter:image" content={twitterImage} />
      <meta property="og:title" content={pageTitle || 'PAGE TITLE'} />
      <meta name="description" content={pageDesc} />
      <meta name="twitter:card" content="summary"></meta>
      <meta property="og:description" content={pageDesc} />
      <script
        id="siteInfo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "${global.site.siteTitle || 'SITE TITLE'}",
          "url": "${process.env.SITE_URL}"
        }`,
        }}
      />
      {data._type !== 'post' &&
        data._type !== 'event' &&
        data._type !== 'person' && (
          <script
            id="pageInfo"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "${data.title}",
          "description": "${pageDesc}"
        }`,
            }}
          />
        )}
    </Head>
  );
};

export { Seo };
