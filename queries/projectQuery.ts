import { globalQuery } from './globalQuery';
import { groq } from 'next-sanity';
import { projectFields } from 'queries/projectFields';

export const projectQuery = groq`{
  "page": *[_type == 'project' && $slug == slug.current && !(_id in path("drafts.**"))][0] {
    ${projectFields},
  },
  ${globalQuery}
}`;
