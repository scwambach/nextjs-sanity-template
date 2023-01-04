export const blurbMaker = (blocks: any[]) => {
  const text = blocks.filter((b) => b.style === 'normal')[0].children[0].text;
  return text.slice(0, 120) + (text.length > 120 ? '...' : '');
};
