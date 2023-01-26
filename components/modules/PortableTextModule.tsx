import Link from 'next/link';
import { FaQuoteLeft } from '@meronex/icons/fa';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import { ProgressiveImage, MainContext } from '@components';
import ReactPlayer from 'react-player';
import { urlFor } from '@utils';
import { useContext } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

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
  const { hasWindow } = useContext(MainContext);
  const serializers = {
    types: {
      videoEmbed: ({ node }) =>
        hasWindow && (
          <div className={postLayout ? `lg:-mx-32 my-4 md:my-8` : undefined}>
            <figure>
              <ReactPlayer
                url={node.featureVideo}
                controls
                playing
                width="100%"
                height={500}
                light={node.poster ? `${urlFor(node.poster).width(900)}` : null}
              />

              {node.caption && (
                <figcaption className="block text-center w-full border-b-[1px] border-white-400 px-2 pt-1">
                  {node.caption}
                </figcaption>
              )}
            </figure>
          </div>
        ),
      generalEmbed: ({ node }) => (
        <div
          dangerouslySetInnerHTML={{
            __html: node.code,
          }}
        />
      ),
      codeSnippet: ({ node }) => (
        <CodeBlock
          text={node.code}
          showLineNumbers
          language={node.language}
          theme={dracula}
        />
      ),
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
    <CopyBlock className={`block${className ? ` ${className}` : ''}`}>
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
  > div {
    * {
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

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
