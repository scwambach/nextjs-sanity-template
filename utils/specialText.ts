import { noOrphans } from './noOrphans';
export const specialText = (string: string) => {
  const wordArray = string.split(' ');

  const wordReturn = wordArray.map((word) => {
    const inBrackets = word.indexOf('[') >= 0;

    if (inBrackets) {
      const matchedString = word.match(/\[(.*)\]/)[1];
      return `<span class="highlight">${matchedString}</span>`;
    }
    return word;
  });

  return noOrphans(wordReturn.join(' '));
};
