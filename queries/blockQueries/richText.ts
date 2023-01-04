import { groq } from 'next-sanity';
import { assetQuery } from '../imageQuery';
import { commonBlockProps } from './common';

export const richText = groq`
_type == "richText" => {
  ${commonBlockProps},
  columns,
  defined(col2Content) => {
    col2Content[] {
      ...,
      _type == 'image' => {
        ${assetQuery()}
      }
    },
  },
  defined(col3Content) => {
    col3Content[] {
      ...,
      _type == 'image' => {
        ${assetQuery()}
      }
    },
  },
  blockContent[] {
    ...,
    _type == 'image' => {
      ${assetQuery()}
    }
  },
}
`;
