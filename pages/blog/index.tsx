import {
  PostList,
  DataPage,
  CommonPageProps,
  AllPageProps,
  PostCardProps,
} from '@components';
import { getClient, listingSettings } from '@utils';
import { blogQuery } from '@queries';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  count?: number;
  posts: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const BlogPage = ({ doc, global }: Props) => {
  return (
    <DataPage data={doc} global={global} message={doc.pageDescription}>
      <div className="bg-white-100">
        <PostList
          posts={doc.posts}
          count={doc.count}
          number={1}
          limit={listingSettings.postLimit}
        />
      </div>
    </DataPage>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const doc = await getClient().fetch(blogQuery, {
    today,
    limit: listingSettings.postLimit,
    from: 0,
  });

  if (!doc.page && doc.posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
        count: doc.count,
        posts: doc.posts,
      },
      global: doc.global,
    },
  };
}
