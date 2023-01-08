import { groq } from 'next-sanity';
import { componentList } from './componentList';
import { globalQuery } from './globalQuery';

export const pageQuery = groq`{
  "page": *[_type == 'page' && slug.current == $slug || _type == 'page' && _id == $id][0] {
    ...,
    "slug": slug.current,
    ${componentList},
  },
  ${globalQuery}
}`;
