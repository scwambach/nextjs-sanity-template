import {
  AllPageProps,
  CommonPageProps,
  Container,
  DataPage,
  HeadingElement,
  ImageProps,
  PortableTextModule,
  PostCardProps,
  PostJson,
  PostList,
  ProgressiveImage,
} from '@components';
import { getClient, listingSettings, usePreviewSubscription } from '@utils';
import { postQuery } from '@queries';
import dayjs from 'dayjs';
import { breakpoints } from '@styles';

interface NewDoc extends AllPageProps {
  bodyContent?: any[];
  postImage?: ImageProps;
  publishDate?: string;
  related?: PostCardProps[];
}

interface Props extends CommonPageProps {
  doc: NewDoc;
  path?: string;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const PostPage = ({ doc, global, isPreview, path }: Props) => {
  console.log({ path });
  const { data } = usePreviewSubscription(postQuery, {
    params: {
      from: 0,
      limit: listingSettings.postLimit,
      slug: path,
      today,
    },
    initialData: doc,
    enabled: isPreview,
  });

  const pageData = isPreview ? data : doc;

  return (
    pageData && (
      <DataPage data={pageData} global={global} date={pageData.publishDate}>
        <PostJson {...pageData} />

        <div className="relative pb-mobileVideo sm:pb-video lg:pb-0 lg:h-[500px] xl:h-[700px]">
          <ProgressiveImage {...pageData.postImage} isBackground mobileCrop />
        </div>

        <div className="py-header bg-white-100">
          <Container maxWidth={breakpoints.md}>
            <PortableTextModule text={pageData.bodyContent} postLayout />
          </Container>
          {pageData.related && pageData.related.length > 0 && (
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
                <PostList
                  limit={3}
                  count={3}
                  cols={3}
                  posts={pageData.related}
                />
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
  const isPreview = `${slug}`.indexOf('drafts.') === 0;
  console.log({ isPreview, params });
  const doc = await getClient(isPreview).fetch(postQuery, {
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
      path: slug,
      isPreview,
      global: doc.global,
    },
  };
}
