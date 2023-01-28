import {
  AllPageProps,
  CommonPageProps,
  DataPage,
  ImageProps,
  PostCardProps,
  PostList,
} from '@components';
import { getClient, listingSettings } from '@utils';
import { blogAuthorQuery } from '@queries';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  count?: number;
  description?: string;
  photo?: ImageProps;
  posts: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const AuthorIndexPage = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage
        data={doc}
        global={global}
        message={doc.description}
        photo={doc.photo}
      >
        <div className="bg-white-100">
          <PostList
            posts={doc.posts}
            count={doc.count}
            number={1}
            limit={listingSettings.postLimit}
            paginationPath={`author/${doc.slug}`}
          />
        </div>
      </DataPage>
    )
  );
};

export default AuthorIndexPage;

export async function getStaticPaths() {
  const res = await getClient()
    .fetch(`*[_type == "person" && _id in *[_type=="post"].authors[]._ref] {
    "slug": slug.current
  }`);
  const docs = await res;
  const pathSlugs = docs.map((doc) => ({
    params: { author: doc.slug },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { author } = params;
  const doc = await getClient().fetch(blogAuthorQuery, {
    today,
    author,
    limit: listingSettings.postLimit,
    from: 0,
  });

  if (!doc.page || doc.page.posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc: {
        ...doc.page,
        title: `${doc.page.firstName} ${doc.page.lastName}`,
      },
      global: doc.global,
    },
  };
}
