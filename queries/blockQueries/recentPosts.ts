import { groq } from 'next-sanity';
import { postFields } from 'queries/postFields';
import { commonBlockProps, linkObject } from './common';

export const recentPosts = groq`
_type == 'recentPosts' => {
  ${commonBlockProps},
  link {
    ${linkObject}
  },
  "posts": *[_type == 'post' && publishDate <= $today && !(_id in path("drafts.**"))] | order(publishDate desc)[0...3] {
    ${postFields}
  }
}
`;
