import {
  AllPageProps,
  CommonPageProps,
  DataPage,
  ImageProps,
  PostCardProps,
  PostList,
} from '@components';
import { getClient, noOrphans, listingSettings } from '@utils';
import { blogAuthorQuery } from '@queries';
import dayjs from 'dayjs';

interface NewDoc extends AllPageProps {
  count?: number;
  description?: string;
  page?: string;
  photo?: ImageProps;
  posts: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const AuthorPagination = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage
        data={doc}
        global={global}
        message={noOrphans(doc.description)}
        photo={doc.photo}
      >
        <div className="bg-white-100">
          <PostList
            posts={doc.posts}
            count={doc.count}
            limit={listingSettings.postLimit}
            number={parseInt(doc.page)}
            paginationPath={`author/${doc.slug}`}
          />
        </div>
      </DataPage>
    )
  );
};

export default AuthorPagination;

export async function getServerSideProps({ params }) {
  const { author, page } = params;
  const doc = await getClient().fetch(blogAuthorQuery, {
    today,
    author,
    limit: page * listingSettings.postLimit,
    from: page * listingSettings.postLimit - listingSettings.postLimit,
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
        page,
      },
      global: doc.global,
    },
  };
}
