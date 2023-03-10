import {
  PortableTextModule,
  DataPage,
  CommonPageProps,
  EventProps,
  ProgressiveImage,
  Container,
  Button,
  LinkObject,
  EventJson,
} from '@components';
import { getClient } from '@utils';
import { eventQuery } from '@queries';
import dayjs from 'dayjs';
import { breakpoints } from '@styles';

interface Props extends CommonPageProps {
  doc: EventProps;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const parseDates = (dateTimeOne: string, dateTimeTwo: string) => {
  const firstDate = dayjs(dateTimeOne).format('MMM DD, YYYY');
  const firstTime = dayjs(dateTimeOne).format('hh:mm A');
  const endDate = dayjs(dateTimeTwo).format('MMM DD, YYYY');
  const endTime = dayjs(dateTimeTwo).format('hh:mm A');
  const sameDay = firstDate === endDate;
  const sameTime = firstTime === endTime;
  const times = sameTime ? firstTime : `${firstTime} - ${endTime}`;
  const dates = sameDay ? firstDate : `${firstDate} - ${endDate}`;
  return `${dates}${times ? ` | ${times}` : ''}`;
};

const PostPage = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage
        data={doc}
        global={global}
        message={`
        <a
          class="mb-2 font-bold underline block hover:text-blue-500 transition-all ease-in-out"
          href='https://www.google.com/maps/place/${doc.location?.street} ${
          doc.location?.cityStateZip
        }'
        >
          ${
            doc.physicalLocation
              ? `Location: ${
                  doc.location?.name ||
                  `${doc.location?.street}, ${doc.location?.cityStateZip}`
                }`
              : ''
          }
        </a>
        <p>${parseDates(doc.date, doc.endDate)}</p>
      `}
      >
        <EventJson {...doc} />
        <div className="bg-white-100">
          <Container maxWidth={breakpoints.md}>
            <div className="py-12 lg:py-20">
              <div className="mb-10">
                {doc.postImage && (
                  <a
                    href={doc.postImage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProgressiveImage
                      {...doc.postImage}
                      imgWidth={breakpoints.lg}
                    />
                  </a>
                )}
              </div>
              <PortableTextModule text={doc.description} />
              {doc.links && (
                <>
                  {doc.links.map((link) => (
                    <Button key={link._key}>
                      <LinkObject {...link} />
                    </Button>
                  ))}
                </>
              )}
            </div>
          </Container>
        </div>
      </DataPage>
    )
  );
};

export default PostPage;

export async function getStaticPaths() {
  const res = await getClient()
    .fetch(`*[(_type == "event" && !(_id in path("drafts.**")))] {
    "slug": slug.current
  }`);
  const docs = await res;
  const pathSlugs = docs.map((doc: { slug: string }) => ({
    params: { slug: doc.slug },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const isPreview = `${slug}`.indexOf('drafts.') === 0;

  const doc = await getClient(isPreview).fetch(eventQuery, {
    today,
    slug,
  });

  if (!doc.page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
      },
      global: doc.global,
    },
  };
}
