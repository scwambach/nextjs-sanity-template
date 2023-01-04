import { groq } from 'next-sanity';

export const paths = groq`*[(_type == "page" || _type == "post") && slug.current != '/'] {
  "slug": slug.current
}`;
