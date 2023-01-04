import {blockContent} from '../commonFields'
import AiOutlineAlert from '@meronex/icons/ai/AiOutlineAlert'

export default {
  name: 'alertBar',
  title: 'Alert Bar',
  type: 'document',
  fields: [
    {
      ...blockContent({
        title: 'Content',
        name: 'content',
        required: true,
        description:
          'This is intended to be one sentence/line long, so please make this a breif message.',
      }),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      validation: (Rule) => Rule.required(),
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      validation: (Rule) => Rule.required(),
      type: 'date',
    },
  ],
  preview: {
    select: {
      subtitle: 'content',
    },
    prepare({subtitle}) {
      const block = (subtitle || []).find((blok) => blok._type === 'block')
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'Alert Bar',
        media: AiOutlineAlert(),
      }
    },
  },
}
