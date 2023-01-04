import { groq } from 'next-sanity';
import { imageQuery } from 'queries/imageQuery';
import { commonBlockProps } from './common';

export const peopleListing = groq`
_type == 'peopleListing' => {
  ${commonBlockProps},
  people[] -> {
    _id,
    ${imageQuery({ name: 'photo' })},
    company -> {
      _id, 
      title,
    },
    firstName,
    lastName,
    position,
    description,
    socials
  }
}
`;
