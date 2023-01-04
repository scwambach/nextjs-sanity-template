import { groq } from 'next-sanity';
import { projectFields } from 'queries/projectFields';
import { commonBlockProps } from './common';

export const projectCollection = groq`
_type == 'projectCollection' => {
  ${commonBlockProps},
  projects[] -> {
    ${projectFields}
  }
}
`;
