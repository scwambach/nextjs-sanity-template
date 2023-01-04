import { useRouter } from 'next/router';
import { DynamicPage, DynamicPageDataProps, GlobalProps } from '@components';
import { usePreviewSubscription, getClient } from '@utils';
import { homeQuery } from '@queries';
import dayjs from 'dayjs';

const today = dayjs(new Date()).format('YYYY-MM-DD');

interface Props {
  doc?: DynamicPageDataProps;
  global?: GlobalProps;
}

const IndexPage = ({ doc, global }: Props) => {
  const router = useRouter();
  const isPreview = router.query.preview === '';

  const { data } = usePreviewSubscription(homeQuery, {
    params: { today },
    initialData: doc,
    enabled: isPreview,
  });

  const pageData = isPreview ? data.page : doc;

  return (
    pageData && global?.site && <DynamicPage data={pageData} global={global} />
  );
};

export default IndexPage;

export async function getStaticProps() {
  const doc = await getClient().fetch(homeQuery, {
    today,
  });

  if (!doc.page) {
    return {
      notFound: true,
    };
  }

  return { props: { doc: doc.page, global: doc.global } };
}
