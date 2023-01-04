import {componentFields, componentFieldsets, link} from '../commonFields'
import EnDocuments from '@meronex/icons/en/EnDocuments'

export default {
  name: 'recentPosts',
  title: 'Recent Posts',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      ...link({
        title: 'Link',
        name: 'link',
        fieldset: 'content',
        extraFields: [
          {
            name: 'className',
            title: 'Classes',
            description: 'Separate classes with a single space.',
            type: 'string',
          },
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'backgroundImage',
    },
    prepare({title, image}) {
      return {
        title: 'Recent Posts',
        subtitle: title,
        media: image || EnDocuments,
      }
    },
  },
}
