import { ProgressiveImage, LinkObject, PostCardProps } from '@components';
import { blurbMaker, noOrphans, parseAuthors } from '@utils';
import dayjs from 'dayjs';
import { useState } from 'react';

const PostCard = ({
  authors,
  bodyContent,
  categories,
  className,
  pageDescription,
  postImage,
  publishDate,
  slug,
  title,
}: PostCardProps) => {
  const [hovering, setHovering] = useState<boolean>(false);
  return (
    <article className={`relative${className ? ` ${className}` : ''}`}>
      {categories && (
        <div className="absolute top-5 right-5 z-10 border-[1px] border-blue-500 text-blue-500 bg-white-500 pt-1 px-2">
          <LinkObject
            internalLink={{
              slug: { current: categories[0].slug },
            }}
          >
            {categories[0].title}
          </LinkObject>
        </div>
      )}
      <div
        className={`lg:transition-all ${
          hovering ? 'lg:opacity-80' : 'lg:opacity-100'
        }`}
        onMouseOver={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <LinkObject
          internalLink={{
            slug: { current: slug },
          }}
        >
          <ProgressiveImage
            {...postImage}
            overrideSize
            alt={title}
            imgHeight={700}
            imgWidth={700}
            width={700}
            height={700}
          />
        </LinkObject>
      </div>
      <div className="pt-5">
        <p
          className={`text-lg lg:text-2xl font-bold lg:transition-all ${
            hovering ? 'lg:text-blue-500' : 'lg:text-black-900'
          }`}
          onMouseOver={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
        >
          <LinkObject
            internalLink={{
              slug: { current: slug },
            }}
          >
            {noOrphans(title)}
          </LinkObject>
        </p>
        {authors && (
          <p className="mt-2">
            by&nbsp;
            {parseAuthors(authors, false)}
            <span className="text-blue-500">
              <br />
              {dayjs(publishDate).format('MMM DD, YYYY')}
            </span>
          </p>
        )}
        <p className="mt-10 hidden lg:block">
          {noOrphans(pageDescription || blurbMaker(bodyContent))}
        </p>
      </div>
    </article>
  );
};

export { PostCard };
