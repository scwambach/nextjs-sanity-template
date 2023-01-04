import { groq } from 'next-sanity';
import { imageQuery, assetQuery } from '../imageQuery';
import { commonBlockProps, linkObject } from './common';

export const river = groq`
_type == "river" => {
  ${commonBlockProps},
  boxed,
  features[] {
    _key,
    defined(title) => { title },
    defined(videoModal) => { "videoModal": videoModal -> url },
    defined(image) => { ${imageQuery({ name: 'image' })} }, 
    blockContent[] {
      ...,
      _type == 'image' => {
        ${assetQuery()}
      }
    },
    defined(links) => {
      links[] {
        ${linkObject}
      }
    },
  }
}
`;
