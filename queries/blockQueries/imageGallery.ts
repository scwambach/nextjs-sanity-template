import { groq } from 'next-sanity';
import { commonBlockProps } from './common';

export const imageGallery = groq`
_type == 'imageGallery' => {
  ...,
  ${commonBlockProps},
  images[] {
    ...,
    "alt": asset->altText,
  }
}
`;
