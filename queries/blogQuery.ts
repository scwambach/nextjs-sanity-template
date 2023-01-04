import { groq } from 'next-sanity';
import { globalQuery } from './globalQuery';
import { postFields } from './postFields';

export const blogQuery = groq`{
  "page": *[_type == 'dataPage' && _id == "blogPage" && !(_id in path("drafts.**"))][0],
  "count": count(*[_type == "post" && publishDate <= $today && !(_id in path("drafts.**"))]),
  "posts": *[_type == 'post' && publishDate <= $today && !(_id in path("drafts.**"))] | order(publishDate desc)[$from...$limit] {
   ${postFields}
  },
  ${globalQuery}
}`;
