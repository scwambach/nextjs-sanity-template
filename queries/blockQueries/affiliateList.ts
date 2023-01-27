import { groq } from 'next-sanity';
import { imageQuery } from '../imageQuery';
import { commonBlockProps, linkObject } from './common';

export const affiliateList = groq`
_type == "affiliateList" => {
  ${commonBlockProps},
  affiliates[] -> {
    _id,
    title,
    defined(customIcon) => { customIcon -> {...} },
    defined(iconImage) => {${imageQuery({ name: 'iconImage' })}},
    "description": array::join(string::split(description, "")[0..200], "") + "...",
    defined(links) => {
      links[] {
        ${linkObject}
      }
    },
  }
}
`;
