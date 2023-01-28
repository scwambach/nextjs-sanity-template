import {
  PostList,
  DataPage,
  PostCardProps,
  AllPageProps,
  CommonPageProps,
} from '@components';
import { getClient, listingSettings } from '@utils';
import { blogQuery } from '@queries';
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

const PostPagination = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage data={doc} global={global} message={doc.pageDescription}>
        <div className="bg-white-100">
          <PostList
            posts={doc.posts}
            count={doc.count}
            number={parseInt(doc.page)}
            limit={listingSettings.postLimit}
          />
        </div>
      </DataPage>
    )
  );
};

export default PostPagination;

export async function getStaticPaths() {
  const res = await getClient().fetch(
    `count(*[_type == "post" && publishDate <= $today && !(_id in path("drafts.**"))])`,
    {
      today,
    }
  );

  const count = await res;
  const pathSlugs = Array.from(
    Array(Math.ceil(count / listingSettings.postLimit))
  ).map((_doc, index) => ({
    params: { page: `${index + 1}` },
  }));

  return {
    paths: pathSlugs,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { page } = params;

  const doc = await getClient().fetch(blogQuery, {
    today,
    limit: page * listingSettings.postLimit,
    from: page * listingSettings.postLimit - listingSettings.postLimit,
  });

  if (doc.posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
        page,
        count: doc.count,
        posts: doc.posts,
      },
      global: doc.global,
    },
  };
}
