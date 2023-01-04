import { blockContent } from '../commonFields';
import BsFillChatQuoteFill from '@meronex/icons/bs/BsFillChatQuoteFill';
export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: BsFillChatQuoteFill,
  fields: [
    {
      ...blockContent({
        title: 'Quote',
        name: 'quote',
        required: true,
      }),
    },
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'person' }],
    },
  ],
  preview: {
    select: {
      title: 'quote',
      firstName: 'person.firstName',
      lastName: 'person.firstName',
      media: 'person.photo',
    },
    prepare({ title, firstName, lastName, media }) {
      const block = (title || []).find((blok) => blok._type === 'block');
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'Quote',
        subtitle: `${firstName}${lastName ? ` ${lastName}` : ''}`,
        media,
      };
    },
  },
};
