import {
  BlockProps,
  Button,
  Container,
  Heading,
  LinkObject,
  LinkProps,
  PostCard,
  PostCardProps,
} from '@components';
import { breakpoints } from '@styles';
interface RecentPostsProps extends BlockProps {
  link?: LinkProps;
  posts: PostCardProps[];
}

const RecentPosts = ({
  children,
  className,
  heading,
  index,
  link,
  posts,
  subHeading,
}: RecentPostsProps) => {
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div
      className={`recentPosts component-shell${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <Container maxWidth={breakpoints.xl}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {posts.map((post) => {
              return <PostCard key={post._id} {...post} />;
            })}
          </div>

          {link?.copy && (
            <div className="buttons flex justify-center mt-14">
              <Button>
                <LinkObject key={link._key} {...link} />
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export { RecentPosts };
