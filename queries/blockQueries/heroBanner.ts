import { groq } from 'next-sanity';
import { imageQuery } from '../imageQuery';
import { commonBlockProps, linkObject } from './common';

export const heroBanner = groq`
_type == "heroBanner" => {
  ${commonBlockProps},
  defined(mainImage) => { ${imageQuery({ name: 'mainImage' })} },
  defined(secondaryImage) => { ${imageQuery({ name: 'secondaryImage' })} },
  defined(message) => { message },
  links[] {
    ${linkObject}
  },
}
`;
