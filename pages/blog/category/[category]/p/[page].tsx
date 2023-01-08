import {
  PostList,
  DataPage,
  AllPageProps,
  CommonPageProps,
  PostCardProps,
} from '@components';
import { getClient, noOrphans, listingSettings } from '@utils';
import { blogCatQuery } from '@queries';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  count?: number;
  page?: string;
  posts: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}
const today = dayjs(new Date()).format('YYYY-MM-DD');

const CategoryPagination = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage
        data={doc}
        global={global}
        message={noOrphans(doc.pageDescription)}
      >
        <div className="bg-white-100">
          <PostList
            posts={doc.posts}
            count={doc.count}
            limit={listingSettings.postLimit}
            number={parseInt(doc.page)}
            paginationPath={`category/${doc.slug}`}
          />
        </div>
      </DataPage>
    )
  );
};

export default CategoryPagination;

export async function getServerSideProps({ params }) {
  const { category, page } = params;

  const doc = await getClient().fetch(blogCatQuery, {
    today,
    category,
    limit: page * listingSettings.postLimit,
    from: page * listingSettings.postLimit - listingSettings.postLimit,
  });

  if (doc.page.posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
        page,
      },
      global: doc.global,
    },
  };
}
