import { groq } from 'next-sanity';
import { assetQuery } from 'queries/imageQuery';
import { commonBlockProps, formObject } from './common';

export const formCta = groq`
_type == "formCta" => {
  ${commonBlockProps},
  message[] {
    ...,
    _type == 'image' => {
      ${assetQuery()}
    }
  },
  form -> {
    ${formObject}
  }
}
`;
