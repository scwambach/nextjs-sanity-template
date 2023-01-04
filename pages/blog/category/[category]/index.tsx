import {
  PostList,
  DataPage,
  PostCardProps,
  AllPageProps,
  CommonPageProps,
} from '@components';
import { getClient, noOrphans, listingSettings } from '@utils';
import { blogCatQuery } from '@queries';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  count?: number;
  posts: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const CategoryIndexPage = ({ doc, global }: Props) => {
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
            number={1}
            limit={listingSettings.postLimit}
            paginationPath={`category/${doc.slug}`}
          />
        </div>
      </DataPage>
    )
  );
};

export default CategoryIndexPage;

export async function getStaticPaths() {
  const res = await getClient()
    .fetch(`*[_type == "postCategory" && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }`);
  const docs = await res;
  const pathSlugs = docs.map((doc) => ({
    params: { category: doc.slug },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const doc = await getClient().fetch(blogCatQuery, {
    today,
    category,
    limit: listingSettings.postLimit,
    from: 0,
  });

  if (doc.page.posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: doc.page,
      global: doc.global,
    },
  };
}
