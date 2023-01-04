import { groq } from 'next-sanity';
import { formObject } from './blockQueries/common';
import { globalQuery } from './globalQuery';

export const contactQuery = groq`{
  "page": *[_type == 'dataPage' && _id == "contactPage" && !(_id in path("drafts.**"))][0],
  "form": *[_type == 'form' && title == "Basic Contact Form"][0] {
    ${formObject}
  },
  ${globalQuery}
}`;
