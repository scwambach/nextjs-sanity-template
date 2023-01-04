import { groq } from 'next-sanity';
import { commonBlockProps, linkObject } from './common';

export const ctaBlock = groq`
_type == 'ctaBlock' => {
  ${commonBlockProps},
  centered,
  cta -> {
    message,
    title,
    links[] {
      ${linkObject}
    }
  }
}
`;
