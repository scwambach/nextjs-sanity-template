import { AuthorProps, LinkObject } from '@components';

export const parseAuthors = (authors: AuthorProps[], link: boolean) => {
  const multiAuth = authors?.length > 1;
  const authorArray = authors.map((author, index) => {
    const authName = `${author.firstName}${
      author.lastName ? ` ${author.lastName}` : ''
    }`;
    const prefix =
      authors.length > 2
        ? index + 1 === authors.length
          ? ', & '
          : ', '
        : index === 0
        ? ''
        : ' & ';
    const name = multiAuth ? `${prefix}${authName}` : authName;
    return (
      <span key={author._id}>
        {link ? (
          <LinkObject
            internalLink={{ slug: { current: author.slug } }}
            copy={name}
          />
        ) : (
          <>{name}</>
        )}
      </span>
    );
  });

  return authorArray;
};
