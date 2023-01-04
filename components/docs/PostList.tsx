import { PostCard, Container, PageNav, PostCardProps } from '@components';
import { breakpoints } from '@styles';

interface PostListProps {
  number?: number;
  count: number;
  paginationPath?: string;
  posts?: PostCardProps[];
  cols?: 2 | 3;
  limit: number;
  noMargin?: boolean;
}

const PostList = ({
  posts,
  count,
  paginationPath,
  number = 0,
  cols = 3,
  limit,
  noMargin,
}: PostListProps) => {
  return (
    <div className={`relative ${noMargin ? 'py-0' : 'py-12 lg:py-20'}`}>
      <Container maxWidth={breakpoints.xl}>
        {count > limit && (
          <PageNav
            className="mb-10"
            limit={limit}
            number={number}
            count={count}
            path={paginationPath}
          />
        )}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            cols === 3 ? 'lg:grid-cols-3 ' : ''
          }gap-8 sm:gap-10`}
        >
          {posts?.map((post) => {
            return post && <PostCard key={post._id} {...post} />;
          })}
        </div>
        {count > limit && (
          <PageNav
            className="mt-10"
            limit={limit}
            number={number}
            count={count}
            path={paginationPath}
          />
        )}
      </Container>
    </div>
  );
};

export { PostList };
