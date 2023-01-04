import { LinkObject } from '@components';

export const parseCategories = (
  categories: {
    _id: string;
    title: string;
    slug: string;
  }[]
) => {
  const catArray = categories.map((category, index) => {
    return (
      <span key={category._id}>
        {index === 0 && <>&nbsp;&nbsp;|&nbsp;&nbsp;</>}
        {index > 0 && <>&nbsp;&bull;&nbsp;</>}
        <LinkObject
          internalLink={{ slug: { current: category.slug } }}
          copy={category.title}
        />
      </span>
    );
  });

  return catArray;
};
