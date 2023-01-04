import {FaFileImage} from '@meronex/icons/fa'

import {image, componentFieldsets, styleSettings} from '../commonFields'

export default {
  name: 'imageBlock',
  title: 'Image Block',
  fieldsets: componentFieldsets,
  type: 'object',
  fields: [
    {
      name: 'componentId',
      title: 'Component ID',
      type: 'string',
      fieldset: 'settings',
      initialValue: ({_type, _key}) => `component-${_type}_${_key}`,
    },
    ...styleSettings({fieldset: 'settings'}),
    image({name: 'image', title: 'Image', fieldset: 'content'}),
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare({image}) {
      return {
        title: 'Image Block',
        media: image || FaFileImage,
      }
    },
  },
}
