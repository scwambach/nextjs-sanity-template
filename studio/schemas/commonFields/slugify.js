export const slugify = (string) => {
  let isHome = false;

  if (
    string === 'Home Page' ||
    string === 'home page' ||
    string === 'Home page' ||
    string === 'home Page' ||
    string === 'Front Page' ||
    string === 'front page' ||
    string === 'Front page' ||
    string === 'front Page' ||
    string === 'Home' ||
    string === 'home'
  ) {
    isHome = true;
  }

  const a =
    'àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b =
    'aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return isHome
    ? '/'
    : string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(p, (c) => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};
