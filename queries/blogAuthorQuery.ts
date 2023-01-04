import { groq } from 'next-sanity';
import { globalQuery } from './globalQuery';
import { imageQuery } from './imageQuery';
import { postFields } from './postFields';

export const blogAuthorQuery = groq`{
  "page": *[_type == 'person' && slug.current == $author && !(_id in path("drafts.**"))][0] {
    ...,
    ${imageQuery({ name: 'photo' })},
    "count": count(*[_type == "post" && references(^._id) && publishDate <= $today && !(_id in path("drafts.**"))]),
    "posts": *[_type == 'post' && references(^._id) &&  publishDate <= $today && !(_id in path("drafts.**"))] | order(publishDate desc)[$from...$limit] {
      ${postFields}
    }
  },
  ${globalQuery}
}`;
