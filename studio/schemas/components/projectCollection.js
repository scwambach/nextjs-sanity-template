import { componentFields, componentFieldsets } from '../commonFields';
import AiOutlineProject from '@meronex/icons/ai/AiOutlineProject';

export default {
  name: 'projectCollection',
  title: 'Project Collection',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      fieldset: 'content',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          name: 'project',
          title: 'Project',
          type: 'reference',
          to: [{ type: 'project' }],
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
        title: 'Project Collection',
        subtitle: title,
        media: image || AiOutlineProject,
      };
    },
  },
};
