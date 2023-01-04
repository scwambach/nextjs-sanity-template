import { groq } from 'next-sanity';
import { commonBlockProps } from './common';

export const iconFeatures = groq`
_type == "iconFeatures" => {
  ...,
  ${commonBlockProps},
}
`;
