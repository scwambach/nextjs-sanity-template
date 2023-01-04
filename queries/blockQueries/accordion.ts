import { groq } from 'next-sanity';
import { commonBlockProps } from './common';

export const accordion = groq`
_type == 'accordion' => {
  ...,
  ${commonBlockProps},
}
`;
