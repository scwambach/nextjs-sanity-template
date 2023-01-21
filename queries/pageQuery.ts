import { groq } from 'next-sanity';
import { componentList } from './componentList';
import { globalQuery } from './globalQuery';

export const pageQuery = groq`{
  "page": *[_type == 'page' && _id == $id || _type == 'page' && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    ${componentList},
  },
  ${globalQuery}
}`;
