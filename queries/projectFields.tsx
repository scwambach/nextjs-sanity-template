import { groq } from 'next-sanity';
import { assetQuery, imageQuery } from './imageQuery';

export const projectFields = groq`
  _id,
  publishDate,
  "slug": "projects/" + slug.current,
  title,
  pageDescription,
  bodyContent[] {
    ...,
    _type == 'image' => {
      ${assetQuery()}
    }
  },
  mainImage,
  ${imageQuery({ fieldName: 'postImage', name: 'mainImage' })}
`;
