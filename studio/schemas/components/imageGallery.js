import {componentFields, componentFieldsets, image} from '../commonFields'
import {FaStar} from '@meronex/icons/fa'

export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),

    {
      title: 'Images',
      name: 'images',
      fieldset: 'content',
      validation: (Rule) => Rule.min(1),
      type: 'array',
      of: [image({name: 'image', title: 'Image', fieldset: 'content'})],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'backgroundImage',
    },
    prepare({title, image}) {
      return {
        title: 'Image Gallery',
        subtitle: title,
        media: image || FaStar,
      }
    },
  },
}
