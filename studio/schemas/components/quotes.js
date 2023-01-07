import { componentFields, componentFieldsets } from '../commonFields';
import BsFillChatQuoteFill from '@meronex/icons/bs/BsFillChatQuoteFill';

export default {
  name: 'quotes',
  title: 'Quotes',
  fieldsets: componentFieldsets,
  type: 'object',
  fields: [
    ...componentFields(),
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          to: [{ type: 'quote' }],
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
        title: 'Quotes',
        subtitle: title,
        media: image || BsFillChatQuoteFill,
      };
    },
  },
};
