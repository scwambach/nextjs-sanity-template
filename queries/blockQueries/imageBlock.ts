import { groq } from 'next-sanity';
import { imageQuery } from '../imageQuery';
import { commonBlockProps } from './common';

export const imageBlock = groq`
_type == "imageBlock" => {
  ${commonBlockProps},
  defined(image) => { ${imageQuery({ name: 'image' })} },
}
`;
