import {link} from '../commonFields'
import BsCardText from '@meronex/icons/bs/BsCardText'

export default {
  name: 'ctaBanner',
  title: 'Cta Banner',
  type: 'document',
  icon: BsCardText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: (Rule) => Rule.max(2).min(1).required(),
      of: [{...link({title: 'Link', name: 'link'})}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'message',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
        media: BsCardText,
      }
    },
  },
}
