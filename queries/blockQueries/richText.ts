import { groq } from 'next-sanity';
import { commonBlockProps, richTextContent } from './common';

export const richText = groq`
_type == "richText" => {
  ${commonBlockProps},
  columns,
  defined(col2Content) => {
    col2Content[] {
      ${richTextContent}
    },
  },
  defined(col3Content) => {
    col3Content[] {
      ${richTextContent}
    },
  },
  blockContent[] {
    ${richTextContent}
  },
}
`;
