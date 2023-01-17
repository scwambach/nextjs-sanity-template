import { globalQuery } from './globalQuery';
import { groq } from 'next-sanity';
import { postFields } from './postFields';

export const postQuery = groq`{
  "page": *[_type == 'post' && _id == $slug || _type == 'post' && publishDate <= $today && $slug == slug.current && !(_id in path("drafts.**"))][0] {
    ${postFields},
    "related": *[_type == 'post' && references(^.categories[]._ref) && title != ^.title][0...3] {
      ${postFields},
    }
  },
  ${globalQuery}
}`;
