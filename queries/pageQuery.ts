import { groq } from 'next-sanity';
import { componentList } from './componentList';
import { globalQuery } from './globalQuery';

export const pageQuery = groq`{
  "page": *[_type == 'page' && slug.current == $slug][0] {
    ...,
    ${componentList},
  },
  ${globalQuery}
}`;
