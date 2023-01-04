import { useContext, useState } from 'react';
import { Popover } from '@headlessui/react';
import { Search, MainContext, LinkObject } from '@components';
import { FaChevronDown } from '@meronex/icons/fa';
import { AiOutlineSearch } from '@meronex/icons/ai';

interface MainNavProps {
  menuOpen: boolean;
  setMenuOpen: Function;
}

const MainNav = ({ menuOpen, setMenuOpen }: MainNavProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const linkClasses = '';
  const {
    search,
    mainNavigation: { items },
  } = useContext(MainContext);
  return (
    <menu
      className={`menu
  fixed right-0 top-0 z-30 text-right bg-white-100 w-3/4 md:w-1/2 h-full overflow-y-auto pt-12 transition-all
  lg:w-auto lg:bg-transparent lg:relative lg:h-auto lg:pt-0 lg:flex lg:gap-5 lg:right-0 lg:overflow-visible
  ${menuOpen ? ' open' : ' close -right-3/4 md:-right-1/2'}`}
    >
      {items.map(({ _key, link }, index) => (
        <li
          key={_key}
          className={`menu-item ${
            index !== 0
              ? 'border-t-2 border-t-white-300 lg:border-none'
              : undefined
          }`}
        >
          {/* Has Sub */}
          {link.subItems ? (
            <Popover className="relative">
              <Popover.Button
                className={`
              flex w-full items-center justify-end gap-2
              py-3 px-5 lg:py-0 lg:px-0
              ${link.className}
              ${linkClasses}`}
              >
                {link.copy}
                <FaChevronDown />
              </Popover.Button>
              <Popover.Panel className="panel lg:absolute lg:text-right bg-white-500 lg:bg-white-100 lg:top-10 lg:right-0 lg:z-30 lg:w-60">
                <ul>
                  {link.subItems.map((subItem) => (
                    <li key={subItem._key}>
                      <LinkObject
                        {...subItem}
                        className={`block border-t-white-700 py-3 px-5 ${subItem.className} ${linkClasses}`}
                      />
                    </li>
                  ))}
                </ul>
              </Popover.Panel>
            </Popover>
          ) : (
            <>
              {/* Link */}
              <LinkObject
                {...link}
                className={`block py-3 px-5 lg:py-0 lg:px-0 ${linkClasses}`}
              />
            </>
          )}
        </li>
      ))}
      <li className="lg:flex lg:flex-col lg:justify-center border-t-2 border-t-white-300 lg:border-none lg:px-0 px-5 lg:py-0 py-3">
        <button
          className="mt-"
          onClick={() => {
            setMenuOpen(false);
            setSearchOpen(true);
          }}
        >
          <AiOutlineSearch size={20} />
        </button>
      </li>
      {searchOpen && <Search items={search} setSearchOpen={setSearchOpen} />}
    </menu>
  );
};

export { MainNav };
