import dayjs from 'dayjs';
import Head from 'next/head';

interface EventJsonProps {
  date?: string;
  excerpt?: string;
  location?: {
    name?: string;
    cityStateZip: string;
    street: string;
  };
  physicalLocation?: boolean;
  slug?: string;
  title?: string;
}

const EventJson = ({
  date,
  excerpt,
  location,
  physicalLocation,
  slug,
  title,
}: EventJsonProps) => {
  return (
    <Head>
      <script
        id="eventInfo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://www.schema.org",
          "@type": "Event",
          "name": "${title}",
          "url": "${process.env.SITE_URL}/${slug}",
          "description": "${excerpt}",
          "startDate": "${dayjs(date).format('MM/DD/YYYY hh:mmA')}",
          "endDate": "${dayjs(date).format('MM/DD/YYYY hh:mmA')}"${
            !physicalLocation ? '' : ','
          }
          ${
            physicalLocation
              ? `"location": {
            "@type": "Place",
            "name": "${location.name}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${location.name}",
              "addressLocality": "${location.cityStateZip.split(' ')[0]}",
              "addressRegion": "${location.cityStateZip
                .split(' ')[1]
                .replace(',', '')}",,
              "postalCode": "${location.cityStateZip.split(' ')[2]}",
              "addressCountry": "USA"
            }
          },`
              : ''
          }
        }`,
        }}
      />
    </Head>
  );
};

export { EventJson };
