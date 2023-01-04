import { groq } from 'next-sanity';
import { componentList } from './componentList';
import { globalQuery } from './globalQuery';

export const homeQuery = groq`{
  "page": *[slug.current == "/"][0] {
    ...,
    ${componentList}
  },
  ${globalQuery}
}`;
