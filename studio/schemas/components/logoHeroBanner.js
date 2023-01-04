import {colorList, componentFieldsets, image, styleSettings} from '../commonFields'
import {FaStar} from '@meronex/icons/fa'

export default {
  name: 'logoHeroBanner',
  title: 'Logo Hero Banner',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    {
      name: 'componentId',
      title: 'Component ID',
      type: 'string',
      fieldset: 'settings',
      initialValue: ({_type, _key}) => `component-${_type}_${_key}`,
    },
    {
      ...colorList({
        name: 'backgroundColor',
        title: 'Background Color',
        fieldset: 'settings',
      }),
    },
    ...styleSettings({fieldset: 'settings'}),
    {
      name: 'copy',
      title: 'Copy',
      fieldset: 'content',
      type: 'string',
    },
    {
      ...image({
        name: 'backgroundImage',
        title: 'Background Image',
        fieldset: 'media',
      }),
    },
    {
      name: 'backgroundVideo',
      title: 'Background video',
      type: 'reference',
      fieldset: 'media',
      to: [{type: 'backgroundVideo'}],
    },
    {
      name: 'logo',
      title: 'Logo',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'svg'}],
    },
  ],
  preview: {
    select: {
      title: 'copy',
      image: 'backgroundImage',
    },
    prepare({title, image}) {
      return {
        title: 'Logo Hero Banner',
        subtitle: title,
        media: image || FaStar,
      }
    },
  },
}
