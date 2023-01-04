import FaHeading from '@meronex/icons/fa/FaHeading';

import {
  blockContent,
  componentFieldsets,
  componentFields,
  link,
  image,
} from '../commonFields';

export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      ...blockContent({
        name: 'message',
        title: 'Message',
        fieldset: 'content',
      }),
    },
    {
      ...image({ name: 'mainImage', title: 'Main Image', fieldset: 'content' }),
    },
    {
      ...image({
        name: 'secondaryImage',
        title: 'Secondary Image',
        fieldset: 'content',
      }),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.max(2),
      of: [{ ...link({ title: 'Link', name: 'link' }) }],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'backgroundImage',
    },
    prepare({ title, image }) {
      return {
        title: 'Hero Banner',
        subtitle: title,
        media: image || FaHeading(),
      };
    },
  },
};
