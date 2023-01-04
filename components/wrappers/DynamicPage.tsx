import { MainLayout, PageComponent, DynamicPageProps } from '@components';

const DynamicPage = function ({ data, global }: DynamicPageProps) {
  return (
    <MainLayout data={data} {...global}>
      {data.pageContent?.map((component, index) => (
        <PageComponent key={component._key} index={index} {...component} />
      ))}
    </MainLayout>
  );
};

export { DynamicPage };
