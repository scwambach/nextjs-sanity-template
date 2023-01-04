import AiOutlineForm from '@meronex/icons/ai/AiOutlineForm';
import {
  blockContent,
  componentFieldsets,
  componentFields,
} from '../commonFields';

export default {
  name: 'formCta',
  title: 'Form cta',
  fieldsets: componentFieldsets,
  type: 'object',
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
      name: 'form',
      title: 'Form',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'form' }],
    },
  ],
  preview: {
    select: {
      subtitle: 'heading',
      image: 'backgroundImage',
    },
    prepare({ subtitle, image }) {
      return {
        title: 'Form CTA',
        subtitle,
        media: image || AiOutlineForm,
      };
    },
  },
};
