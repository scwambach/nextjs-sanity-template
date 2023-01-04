import { groq } from 'next-sanity';
import { globalQuery } from './globalQuery';
import { postFields } from './postFields';

export const blogCatQuery = groq`{
  "page": *[_type == 'postCategory' && slug.current == $category && !(_id in path("drafts.**"))][0] {
    ...,
    "count": count(*[_type == "post" && references(^._id) && publishDate <= $today && !(_id in path("drafts.**"))]),
    "posts": *[_type == 'post' && references(^._id) &&  publishDate <= $today && !(_id in path("drafts.**"))] | order(publishDate desc)[$from...$limit] {
      ${postFields}
    }
  },
  ${globalQuery}
}`;
