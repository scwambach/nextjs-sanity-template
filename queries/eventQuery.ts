import { globalQuery } from './globalQuery';
import { groq } from 'next-sanity';
import { imageQuery } from './imageQuery';

export const eventQuery = groq`{
  "page": *[_type == 'event' && $slug == slug.current && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    date,
    "slug": "events/" + slug.current,
    defined(mainImage) => {mainImage },
    defined(mainImage) => { ${imageQuery({
      fieldName: 'postImage',
      name: 'mainImage',
    })} },
    defined(description) => { description },
    defined(physicalLocation) => { physicalLocation },
    defined(location) => { location },
    defined(time) => { time },
    defined(links) => { links }
  },
  ${globalQuery}
}`;
