import { groq } from 'next-sanity';
import { globalQuery } from './globalQuery';
import { imageQuery } from './imageQuery';

export const pastEventsQuery = groq`{
  "page": *[_type == 'dataPage' && _id == "eventsPage" && !(_id in path("drafts.**"))][0],
  "events":*[_type == "event" && ((_id in path('drafts.**')) == false) && date < $today] | order(date desc) {
    _id,
    title,
    endDate,
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
