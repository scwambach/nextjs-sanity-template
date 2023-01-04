import {componentFieldsets, image, colorList, styleSettings} from '../commonFields'
import BsCardText from '@meronex/icons/bs/BsCardText'

export default {
  name: 'ctaBlock',
  title: 'Cta Block',
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
    {
      name: 'colorCutOff',
      title: 'Color Cut-Off',
      type: 'boolean',
      description: 'Only use with content that is long enough to scroll.',
      fieldset: 'settings',
    },
    {
      name: 'colorHeight',
      title: 'Color Height',
      type: 'number',
      description: 'Adjust the height of the color cut-off.',
      fieldset: 'settings',
      hidden: ({parent}) => !parent.colorCutOff,
    },
    ...styleSettings({fieldset: 'settings'}),
    {
      name: 'centered',
      title: 'Centered',
      fieldset: 'settings',
      type: 'boolean',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'reference',
      fieldset: 'content',
      to: [{type: 'ctaBanner'}],
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
  ],
  preview: {
    select: {
      subtitle: 'cta.title',
      image: 'backgroundImage',
    },
    prepare({subtitle, image}) {
      return {
        title: 'CTA Block',
        subtitle,
        media: image || BsCardText,
      }
    },
  },
}
