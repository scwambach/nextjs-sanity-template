import { groq } from 'next-sanity';
import { commonBlockProps, linkObject } from './common';

export const heroBanner = groq`
_type == "heroBanner" => {
  ${commonBlockProps},
  defined(message) => { message },
  alignment,
  links[] {
    ${linkObject}
  },
}
`;
