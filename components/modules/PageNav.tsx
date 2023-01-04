import { useRouter } from 'next/router';
import Pagination from 'react-js-pagination';

interface PageNavProps {
  number: number;
  limit: number;
  count: number;
  className?: string;
  path?: string;
}

const PageNav = ({ number, className, limit, path, count }: PageNavProps) => {
  const router = useRouter();
  return (
    <div className={className || undefined}>
      <Pagination
        activePage={number}
        itemsCountPerPage={limit}
        innerClass="flex justify-start"
        linkClass="mr-4 border-2 block border-white pt-1 px-3 font-headingBold lg:hover:bg-white lg:hover:text-black cursor-pointer"
        activeLinkClass="bg-black-500 text-white-100"
        linkClassFirst="hidden"
        linkClassPrev="hidden"
        linkClassNext="hidden"
        linkClassLast="hidden"
        totalItemsCount={count}
        pageRangeDisplayed={5}
        getPageUrl={(e) =>
          `/${
            e === 1
              ? `blog${path ? `/${path}` : ''}`
              : `blog${path ? `/${path}` : ''}/p/${e}`
          }`
        }
        onChange={(e) => {
          router.push(
            `/blog${path ? `/${path}` : ''}/${
              parseInt(e) === 1 ? '' : `/p/${parseInt(e)}`
            }`
          );
        }}
      />
    </div>
  );
};

export { PageNav };
