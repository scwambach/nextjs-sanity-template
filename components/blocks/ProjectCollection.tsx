import {
  BlockProps,
  Button,
  LinkObject,
  Heading,
  PostList,
  PostCardProps,
} from '@components';
import { breakpoints } from '@styles';

interface ProjectCollectionProps extends BlockProps {
  projects: PostCardProps[];
}

const ProjectCollection = ({
  children,
  className,
  heading,
  index,
  subHeading,
  projects,
}: ProjectCollectionProps) => {
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };
  return (
    <div
      className={`projectCollection component-shell${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
      {(heading || subHeading) && <Heading {...headingProps} />}
      <div className="relative">
        <PostList count={4} limit={4} cols={2} posts={projects} noMargin />
        <div className="buttons flex justify-center mt-14">
          <Button>
            <LinkObject
              internalLink={{
                _type: 'dataPage',
                slug: { current: 'projects' },
              }}
              copy="See All Projects"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ProjectCollection };
