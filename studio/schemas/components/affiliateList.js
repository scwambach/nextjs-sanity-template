import { componentFieldsets, componentFields } from '../commonFields';
import BsBuilding from '@meronex/icons/bs/BsBuilding';

export default {
  name: 'affiliateList',
  title: 'Affiliate List',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      name: 'affiliates',
      validation: (Rule) => Rule.min(1),
      title: 'Affiliates',
      fieldset: 'content',
      type: 'array',
      of: [
        {
          name: 'affiliate',
          validation: (Rule) => Rule.required(),
          title: 'Affiliate',
          type: 'reference',
          to: [{ type: 'affiliate' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: 'heading',
      image: 'backgroundImage',
    },
    prepare({ subtitle, image }) {
      return {
        title: 'Affiliate List',
        subtitle,
        media: image || BsBuilding,
      };
    },
  },
};
