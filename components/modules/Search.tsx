import IosClose from '@meronex/icons/ios/IosClose';
import dayjs from 'dayjs';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchItem } from '@components';
import { colors } from '@styles';

interface SearchProps {
  setSearchOpen: Function;
  items: SearchItem[];
}

const Search = ({ items, setSearchOpen }: SearchProps) => {
  const [results, setResults] = useState<any[]>([]);
  items.map((item) => {
    if (item.date) {
      item.date = dayjs(item.date).format('MMMM DD, YYYY');
    }
  });
  const options = {
    threshold: 0.4,
    keys: ['title', 'date'],
  };
  const fuse = new Fuse(items, options);

  const getSlug = ({ type, slug }) => {
    return type === 'post'
      ? `/blog/${slug}`
      : type === 'project'
      ? `/projects/${slug}`
      : type === 'postCategory'
      ? `/blog/category/${slug}`
      : type === 'person'
      ? `/blog/author/${slug}`
      : `/${slug}`;
  };

  const search = (query) => {
    if (!query) {
      return [];
    }
    setResults(fuse.search(query).map((result) => result.item));
  };
  useEffect(() => {
    document.getElementById('searchBar').focus();

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setSearchOpen(false);
      }
    });
  }, []);
  return (
    <div className="search fixed z-50 top-5 lg:top-28 left-0 w-full h-full">
      <div className="fixed top-0 left-0 w-full h-full bg-black-500 opacity-90" />
      <button
        className="fixed top-5 right-5 text-white z-50"
        onClick={() => {
          setSearchOpen(false);
        }}
      >
        <IosClose size={50} color={colors.white} />
      </button>
      <div className="relative max-w-3xl w-11/12 mx-auto">
        <label htmlFor="searchBar">
          <input
            aria-label="Search bar"
            id="searchBar"
            name="searchBar"
            placeholder="Search"
            className="w-full appearance-none text-left px-5 py-3 rounded-none bg-white text-black font-bodyBold mt-20 lg:mt-0"
            onChange={(e) => {
              if (!!e.target.value) {
                search(e.target.value);
              } else {
                setResults([]);
              }
            }}
          />
        </label>
        <div className="results overflow-y-auto max-h-96">
          {results.map((result: any) => {
            const pathSlug = getSlug({ type: result._type, slug: result.slug });
            return (
              <div
                key={result._id}
                className="text-left border-t-[1px] border-black-500  bg-white text-black"
              >
                <Link
                  href={pathSlug}
                  className="flex px-5 py-2 justify-between bg-white-100 lg:focus:bg-yellow-500 lg:hover:bg-yellow-500"
                  onClick={() => {
                    setSearchOpen(false);
                  }}
                >
                  <span className="image flex flex-col justify-center">
                    <img src={result.mainImage} />
                  </span>
                  <span className="copy my-2">
                    <span className="block font-bold">{result.title}</span>
                    <span className="block text-xs">
                      {pathSlug === '//' ? '' : pathSlug}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Search };
