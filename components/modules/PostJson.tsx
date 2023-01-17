import { urlFor } from '@utils';
import dayjs from 'dayjs';
import Head from 'next/head';
import { AssetProps } from '@components';

interface PostJsonProps {
  _createdAt?: string;
  _updatedAt?: string;
  authors?: { firstName?: string; lastName?: string; slug?: string }[];
  categories?: { title: string }[];
  estimatedWordCount?: number;
  excerpt?: string;
  mainImage?: {
    _type?: string;
    asset?: AssetProps;
  };
  pageDescription?: string;
  plainText?: string;
  publishDate?: string;
  slug?: string;
  title?: string;
}

const PostJson = ({
  _createdAt,
  _updatedAt,
  authors,
  categories,
  estimatedWordCount,
  excerpt,
  mainImage,
  pageDescription,
  plainText,
  publishDate,
  slug,
  title,
}: PostJsonProps) => {
  return (
    <Head>
      <script
        id="postInfo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${title}",
            ${
              mainImage
                ? `"image": "${urlFor(mainImage).width(1200).height(630)}",`
                : ''
            }
            ${
              categories
                ? `"keywords": ${JSON.stringify(
                    categories.map((cat) => cat.title)
                  )},`
                : ''
            }
            "wordcount": "${estimatedWordCount}",
            "url": "${process.env.SITE_URL}/${slug}",
            "datePublished": "${dayjs(publishDate).format('YYYY-MM-DD')}",
            "dateCreated": "${dayjs(_createdAt).format('YYYY-MM-DD')}",
            "dateModified": "${dayjs(_updatedAt).format('YYYY-MM-DD')}",
            "description": "${pageDescription || excerpt}",
            "articleBody": "${plainText}",
            ${
              authors
                ? `"author": ${JSON.stringify(
                    authors.map((author) => {
                      const authName = `${author.firstName}${
                        author.lastName ? ` ${author.lastName}` : ''
                      }`;
                      return {
                        '@type': 'Person',
                        name: authName,
                        url: `${process.env.SITE_URL}/${author.slug}`,
                      };
                    })
                  )}`
                : ''
            }
          }`,
        }}
      />
    </Head>
  );
};

export { PostJson };
