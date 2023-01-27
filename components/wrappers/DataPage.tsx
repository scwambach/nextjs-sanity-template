import {
  Container,
  HeadingElement,
  ImageProps,
  MainLayout,
  ProgressiveImage,
  GlobalProps,
} from '@components';
import { breakpoints } from '@styles';
import { parseAuthors, parseCategories } from '@utils';
import dayjs from 'dayjs';

interface DataPageProps {
  children?: any;
  data?: any;
  date?: string;
  global?: GlobalProps;
  message?: any;
  photo?: ImageProps;
}

const DataPage = function ({
  children,
  data,
  date,
  global,
  message,
  photo,
}: DataPageProps) {
  return (
    <MainLayout data={data} {...global}>
      <div className="py-header bg-blue-200">
        <Container maxWidth={breakpoints.xl}>
          <div className={photo ? 'md:flex md:items-center' : undefined}>
            {photo && (
              <div className="w-[120px] mb-5 md:mb-0 md:w-auto rounded-full overflow-hidden mr-5">
                <ProgressiveImage
                  {...photo}
                  width={150}
                  alt={data.title}
                  height={150}
                  imgHeight={150}
                  imgWidth={150}
                />
              </div>
            )}
            <div className="max-w-md">
              <HeadingElement type="h1" className="heading-element lrg">
                {data.title}
              </HeadingElement>
              {message && (
                <p
                  className="base-copy my-2"
                  dangerouslySetInnerHTML={{
                    __html: message,
                  }}
                />
              )}
              {(data.authors || data.categories) && (
                <div className="banner-tags my-2">
                  by {parseAuthors(data.authors, true)}
                  {data.categories && parseCategories(data.categories)}
                </div>
              )}
              {date && (
                <p className="font-bold">
                  {dayjs(data.publishDate).format('MMMM DD, YYYY')}
                </p>
              )}
            </div>
          </div>
        </Container>
      </div>
      {children}
    </MainLayout>
  );
};

export { DataPage };
