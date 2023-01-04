import {
  Container,
  PortableTextModule,
  ProgressiveImage,
  DataPage,
  PostList,
  HeadingElement,
  AllPageProps,
  CommonPageProps,
  PostCardProps,
  ImageProps,
} from '@components';
import { getClient, listingSettings } from '@utils';
import { postQuery } from '@queries';
import dayjs from 'dayjs';
import { breakpoints } from '@styles';

interface NewDoc extends AllPageProps {
  bodyContent?: any;
  postImage?: ImageProps;
  publishDate?: string;
  related?: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const PostPage = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage data={doc} global={global} date={doc.publishDate}>
        <div className="relative pb-mobileVideo sm:pb-video lg:pb-0 lg:h-[500px] xl:h-[700px]">
          <ProgressiveImage {...doc.postImage} isBackground mobileCrop />
        </div>

        <div className="py-header bg-white-100">
          <Container maxWidth={breakpoints.md}>
            <PortableTextModule text={doc.bodyContent} postLayout />
          </Container>
          {doc.related.length > 0 && (
            <>
              <Container maxWidth={breakpoints.xl}>
                <HeadingElement
                  type="h4"
                  className="text-4xl mt-40 font-display"
                >
                  Related Posts
                </HeadingElement>
              </Container>

              <aside>
                <PostList limit={3} count={3} cols={3} posts={doc.related} />
              </aside>
            </>
          )}
        </div>
      </DataPage>
    )
  );
};

export default PostPage;

export async function getStaticPaths() {
  const res = await getClient()
    .fetch(`*[(_type == "post" && !(_id in path("drafts.**")))] {
    "slug": slug.current
  }`);
  const docs = await res;
  const pathSlugs = docs.map((doc) => ({
    params: { slug: doc.slug },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const doc = await getClient().fetch(postQuery, {
    today,
    slug,
    limit: listingSettings.postLimit,
    from: 0,
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
