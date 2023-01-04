import AiOutlineMenu from '@meronex/icons/ai/AiOutlineMenu';
import { navItem } from '../commonFields';

export default {
  name: 'navMenu',
  title: 'Nav Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      validation: (Rule) => Rule.required().min(1),
      type: 'array',
      of: [{ ...navItem }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        media: AiOutlineMenu,
      };
    },
  },
};
