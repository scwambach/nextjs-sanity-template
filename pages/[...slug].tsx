import { DynamicPage, DynamicPageDataProps, GlobalProps } from '@components';
import { pageQuery, paths } from '@queries';
import { getClient } from '@utils';
import dayjs from 'dayjs';

const today = dayjs(new Date()).format('YYYY-MM-DD');
interface Props {
  doc?: DynamicPageDataProps;
  global?: GlobalProps;
  isPreview?: boolean;
}

const PageBuilder = ({ doc, global }: Props) => {
  return doc && global?.site && <DynamicPage data={doc} global={global} />;
};

export default PageBuilder;

export async function getStaticPaths() {
  const res = await getClient().fetch(paths);
  const docs = await res;
  const pathSlugs = docs.map((doc: { slug: string }) => ({
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

  return { props: { doc: doc.page, global: doc.global, isPreview } };
}
