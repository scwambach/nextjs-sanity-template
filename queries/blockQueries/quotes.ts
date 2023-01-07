import { groq } from 'next-sanity';
import { imageQuery } from '../imageQuery';
import { commonBlockProps } from './common';

export const quotes = groq`
_type == "quotes" => {
  ${commonBlockProps},
  quotes[] -> {
    _id,
    person -> {
      defined(firstName) => { firstName },
      defined(lastName) => { lastName },
      defined(position) => { position },
      defined(photo) => { ${imageQuery({ name: 'photo' })} }, 
      defined(company) => { company -> {
        title,
        defined(customIcon) => {"customIcon": customIcon -> customStyleCode.code},
        defined(iconImage) => {${imageQuery({ name: 'iconImage' })}},
        defined(links) => {links},
      } }
    },
    quote,
  }
}
`;
