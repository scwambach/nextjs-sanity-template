interface NavToggleProps {
  menuOpen: boolean;
  setMenuOpen: Function;
}

const NavToggle = ({ menuOpen, setMenuOpen }: NavToggleProps) => {
  return (
    <button
      name="Menu Toggle"
      className={`toggle block w-7 lg:hidden z-[31] fixed top-5 right-5 ${
        menuOpen ? 'open' : 'close'
      }`}
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <span
        className={`bar transition-all block relative top-0 bg-black-500 h-1 w-full${
          menuOpen ? ' rotate-45 top-2' : ''
        }`}
      />
      <span
        className={`bar transition-all block scale-100 bg-black-500 mt-1 h-1 w-full${
          menuOpen ? ' scale-0' : ''
        }`}
      />
      <span
        className={`bar transition-all block relative top-0 bg-black-500 mt-1 h-1 w-full${
          menuOpen ? ' -rotate-45 -top-2' : ''
        }`}
      />
    </button>
  );
};

export { NavToggle };
