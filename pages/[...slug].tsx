import { useRouter } from 'next/router';
import { DynamicPage, DynamicPageDataProps, GlobalProps } from '@components';
import { pageQuery, paths } from '@queries';
import { usePreviewSubscription, getClient } from '@utils';
import dayjs from 'dayjs';

const today = dayjs(new Date()).format('YYYY-MM-DD');
interface Props {
  doc?: DynamicPageDataProps;
  global?: GlobalProps;
}

const PageBuilder = ({ doc, global }: Props) => {
  const router = useRouter();
  const isPreview = router.query.preview === '';

  const { data } = usePreviewSubscription(pageQuery, {
    params: { slug: doc?.slug, today },
    initialData: doc,
    enabled: isPreview,
  });

  const pageData = isPreview ? data.page : doc;

  return (
    pageData && global?.site && <DynamicPage data={pageData} global={global} />
  );
};

export default PageBuilder;

export async function getStaticPaths() {
  const res = await getClient().fetch(paths);
  const docs = await res;
  const pathSlugs = docs.map((doc) => ({
    params: { slug: doc.slug.split('/') },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug = '' } = params;
  const isPreview = `${slug.join('/')}`.indexOf('drafts.') === 0;

  const doc = await getClient(isPreview).fetch(pageQuery, {
    slug: `${slug.join('/')}`,
    id: slug[0],
    today,
  });

  if (!doc.page) {
    return {
      notFound: true,
    };
  }

  return { props: { doc: doc.page, global: doc.global } };
}
