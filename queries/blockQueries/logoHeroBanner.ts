import { groq } from 'next-sanity';
import { commonBlockProps } from './common';

export const logoHeroBanner = groq`
_type == 'logoHeroBanner' => {
  ...,
  ${commonBlockProps},
  defined(logo) => {"logo": logo -> customStyleCode.code},
}
`;
