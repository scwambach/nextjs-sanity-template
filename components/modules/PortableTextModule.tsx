import Link from 'next/link';
import { FaQuoteLeft } from '@meronex/icons/fa';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { ProgressiveImage } from '@components';

interface PortableProps {
  text?: any[];
  className?: string;
  postLayout?: boolean;
}

const BlockRenderer = (props) => {
  const { node, children } = props;
  const { style = 'normal' } = node;
  if (style === 'blockquote') {
    return (
      <blockquote className="text-4xl border-l-4 border-black-900 pl-10">
        <FaQuoteLeft size={40} className="mb-3" />
        {children}
      </blockquote>
    );
  }
  if (style === 'h2') {
    return (
      <h2 className="text-4xl my-4 md:my-8 font-display uppercase tracking-widest">
        {children}
      </h2>
    );
  }
  if (style === 'h3') {
    return (
      <h3 className="text-3xl my-4 md:my-8 font-display uppercase tracking-widest">
        {children}
      </h3>
    );
  }
  if (style === 'h4') {
    return (
      <h4 className="text-2xl my-4 md:my-8 font-display uppercase tracking-widest">
        {children}
      </h4>
    );
  }
  if (style === 'normal') {
    return <p className="my-4 md:my-8">{children}</p>;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

const PortableTextModule = ({ text, className, postLayout }: PortableProps) => {
  const serializers = {
    types: {
      image: ({ node }) => (
        <div className={postLayout ? `lg:-mx-32 my-4 md:my-8` : undefined}>
          <figure>
            {node.url && (
              <ProgressiveImage {...node} imgWidth={1200} mobileCrop />
            )}
            {node.caption && (
              <figcaption className="block text-center w-full border-b-[1px] border-white-400 px-2 pt-1">
                {node.caption}
              </figcaption>
            )}
          </figure>
        </div>
      ),
      quoteBlock: ({ node }) => (
        <figure>
          <blockquote
            className="text-4xl border-l-4 border-black-900 pl-10"
            cite={node.citeUrl || undefined}
          >
            <FaQuoteLeft size={40} className="mb-3" />
            {node.copy}
          </blockquote>
          {(node.signature || node.cite) && (
            <figcaption className="mt-5 mb-10">
              - {node.signature}&nbsp;
              {node.cite && <cite>{node.cite}</cite>}
            </figcaption>
          )}
        </figure>
      ),
      block: BlockRenderer,
    },

    marks: {
      link: ({ mark, children }) => {
        const { blank, href } = mark;
        return blank ? (
          <a
            className="underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ) : (
          <Link className="underline" href={href || ''}>
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <CopyBlock
      data-testid="portable-text"
      className={`block${className ? ` ${className}` : ''}`}
    >
      <BlockContent
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers}
        renderContainerOnSingleChild
        blocks={text}
      />
    </CopyBlock>
  );
};

export { PortableTextModule };

const CopyBlock = styled.div`
  ol,
  ul {
    margin-left: 1.75rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    li {
      margin-bottom: 1.25rem;
    }
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
`;
