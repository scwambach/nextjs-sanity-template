import { groq } from 'next-sanity';
import { commonBlockProps } from './common';
import { assetQuery } from 'queries/imageQuery';

export const imageGallery = groq`
_type == 'imageGallery' => {
  ...,
  ${commonBlockProps},
  images[] {
    _key,
    ${assetQuery()}
  }
}
`;
