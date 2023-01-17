import { groq } from 'next-sanity';
import { assetQuery, imageQuery } from './imageQuery';

export const postFields = groq`
  _id,
  _type,
  publishDate,
  "slugObject": slug,
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
  "plainText": array::join(string::split((pt::text(bodyContent)), "")[], ""),
  "excerpt": array::join(string::split((pt::text(bodyContent)), "")[0..255], "") + "...",
  "numberOfCharacters": length(pt::text(bodyContent)),
  "estimatedWordCount": round(length(pt::text(bodyContent)) / 5),
  "estimatedReadingTime": round(length(pt::text(bodyContent)) / 5 / 180 ),
  bodyContent[] {
    ...,
    _type == 'image' => {
      ${assetQuery()}
    }
  },
  mainImage,
  ${imageQuery({ fieldName: 'postImage', name: 'mainImage' })}
`;
