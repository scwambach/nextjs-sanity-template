import { PostList, DataPage, CommonPageProps, AllPageProps } from '@components';
import { getClient, listingSettings } from '@utils';
import { projectsQuery } from '@queries';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  projects?: any[];
  count?: number;
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const ProjectsIndexPage = ({ doc, global }: Props) => {
  return (
    <DataPage data={doc} global={global}>
      <div className="bg-white-100">
        <PostList
          posts={doc.projects}
          count={doc.count}
          number={1}
          cols={2}
          limit={listingSettings.projectLimit}
        />
      </div>
    </DataPage>
  );
};

export default ProjectsIndexPage;

export async function getStaticProps() {
  const doc = await getClient().fetch(projectsQuery, {
    limit: listingSettings.projectLimit,
    from: 0,
    today,
  });

  if (!doc.page && doc.projects.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
        count: doc.count,
        projects: doc.projects,
      },
      global: doc.global,
    },
  };
}
