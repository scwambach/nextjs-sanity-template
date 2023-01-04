const detectScroll = (setScrollDirection: Function) => {
  window.onscroll = () => {
    window.oldScroll > window.scrollY
      ? setScrollDirection('up')
      : setScrollDirection('down');
    window.oldScroll = window.scrollY;
  };
};

export { detectScroll };
