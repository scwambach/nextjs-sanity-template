import { componentFields, componentFieldsets } from '../commonFields';
import BsPeopleFill from '@meronex/icons/bs/BsPeopleFill';

export default {
  name: 'peopleListing',
  title: 'People Listing',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      name: 'people',
      title: 'People',
      type: 'array',
      fieldset: 'content',
      options: {
        layout: 'grid',
      },
      of: [
        {
          name: 'person',
          title: 'Person',
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'backgroundImage',
    },
    prepare({ title, image }) {
      return {
        title: 'People Listing',
        subtitle: title,
        media: image || BsPeopleFill,
      };
    },
  },
};
