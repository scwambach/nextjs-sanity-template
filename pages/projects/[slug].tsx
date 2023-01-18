import {
  Container,
  PortableTextModule,
  ProgressiveImage,
  DataPage,
  CommonPageProps,
  AllPageProps,
  ImageProps,
} from '@components';
import { getClient, listingSettings, noOrphans } from '@utils';
import { projectQuery } from '@queries';
import dayjs from 'dayjs';
import { breakpoints } from '@styles';

interface NewDoc extends AllPageProps {
  postImage?: ImageProps;
  bodyContent?: any[];
}
interface Props extends CommonPageProps {
  doc: NewDoc;
}

const today = dayjs(new Date()).format('YYYY-MM-DD');

const ProjectPage = ({ doc, global }: Props) => {
  return (
    doc && (
      <DataPage
        data={doc}
        global={global}
        message={noOrphans(doc.pageDescription)}
      >
        <div className="relative pb-mobileVideo sm:pb-video lg:pb-0 lg:h-[500px] xl:h-[700px]">
          <ProgressiveImage {...doc.postImage} isBackground mobileCrop />
        </div>

        <div className="py-header bg-white-100">
          <Container maxWidth={breakpoints.md}>
            <PortableTextModule text={doc.bodyContent} postLayout />
          </Container>
        </div>
      </DataPage>
    )
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  const res = await getClient()
    .fetch(`*[_type == "project" && !(_id in path("drafts.**"))] {
    "slug": slug.current
  }`);
  const docs = await res;
  const pathSlugs = docs.map((doc: { slug: string }) => ({
    params: { slug: doc.slug },
  }));

  return { paths: pathSlugs, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const isPreview = `${slug}`.indexOf('drafts.') === 0;

  const doc = await getClient(isPreview).fetch(projectQuery, {
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
