import {
  AllPageProps,
  CommonPageProps,
  DataPage,
  EventsListing,
  EventProps,
} from '@components';
import { pastEventsQuery } from '@queries';
import { getClient } from '@utils';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  events: EventProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const ProjectsIndexPage = ({ doc, global }: Props) => {
  return (
    <DataPage
      data={{ ...doc, title: 'Past Events', slug: 'events/past' }}
      global={global}
      message={doc.pageDescription}
    >
      <div className="bg-white-100">
        <EventsListing events={doc.events} past />
      </div>
    </DataPage>
  );
};

export default ProjectsIndexPage;

export async function getStaticProps() {
  const doc = await getClient().fetch(pastEventsQuery, {
    today,
  });

  if ((!doc.page && !doc.events) || doc.events.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
        events: doc.events,
      },
      global: doc.global,
    },
  };
}
