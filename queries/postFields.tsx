import { groq } from 'next-sanity';
import { assetQuery, imageQuery } from './imageQuery';

export const postFields = groq`
  _id,
  publishDate,
  "slug": "blog/" + slug.current,
  title,
  pageDescription,
  defined(categories) => { categories[] -> {
    _id,
    title,
    "slug": "blog/category/" + slug.current
  } },
  authors[] -> {
    _id,
    company -> {
      title,
      "link": links[0]
    },
    firstName,
    lastName,
    "slug": "blog/author/" + slug.current,
    defined(photo) => { ${imageQuery({ name: 'photo' })}},
  },
  bodyContent[] {
    ...,
    _type == 'image' => {
      ${assetQuery()}
    }
  },
  mainImage,
  ${imageQuery({ fieldName: 'postImage', name: 'mainImage' })}
`;
