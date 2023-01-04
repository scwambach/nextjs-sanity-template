import {
  BlockProps,
  Container,
  Heading,
  PortableTextModule,
} from '@components';
import { breakpoints } from '@styles';

interface RichTextProps extends BlockProps {
  blockContent: any[];
  col2Content?: any[];
  col3Content?: any[];
  columns?: 'twoColumns' | 'threeColumns';
}

const RichText = (props: RichTextProps) => {
  const {
    blockContent,
    children,
    className,
    col2Content,
    col3Content,
    columns,
    heading,
    index,
    subHeading,
  } = props;
  const headingProps = {
    heading,
    index,
    maxWidth: breakpoints.xl,
    subHeading,
  };

  return (
    <div
      className={`richText py-48 relative${className ? ` ${className}` : ''}`}
    >
      {children}
      <Heading {...headingProps} index={index} />
      <Container maxWidth={columns ? breakpoints.xl : breakpoints.lg}>
        <div
          className={`relative grid ${
            columns === 'twoColumns'
              ? 'lg:grid-cols-2 lg:gap-20'
              : columns === 'threeColumns'
              ? 'lg:grid-cols-2 xl:grid-cols-3 lg:gap-10'
              : ''
          }`}
        >
          {blockContent && (
            <div className="copy">
              <PortableTextModule text={blockContent} className="font-body" />
            </div>
          )}
          {(columns === 'twoColumns' || columns === 'threeColumns') &&
            col2Content && (
              <div className="copy -mt-8 lg:mt-0">
                <PortableTextModule text={col2Content} className="font-body" />
              </div>
            )}
          {columns === 'threeColumns' && col3Content && (
            <div className="copy -mt-8 xl:mt-0">
              <PortableTextModule text={col3Content} className="font-body" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export { RichText };
