import { groq } from 'next-sanity';
import { globalQuery } from './globalQuery';
import { projectFields } from './projectFields';

export const projectsQuery = groq`{
  "page": *[_type == 'dataPage' && _id == "projectsPage" && !(_id in path("drafts.**"))][0],
  "count": count(*[_type == "project" && !(_id in path("drafts.**"))]),
  "projects": *[_type == 'project' && !(_id in path("drafts.**"))] | order(publishDate desc)[$from...$limit] {
    ${projectFields}
  },
  ${globalQuery}
}`;
