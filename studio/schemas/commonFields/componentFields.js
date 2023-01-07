import {image, colorList, styleSettings} from '.'

export const componentFields = () => {
  return [
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
      description: 'Adds a strip of alternate color to the background of component to give a feeling of seemless flow through the page.',
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
      name: 'heading',
      title: 'Heading',
      fieldset: 'content',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      fieldset: 'content',
      type: 'string',
    },
    {
      ...image({
        name: 'backgroundImage',
        title: 'Background Image',
        fieldset: 'media',
        hidden: ({parent}) => parent.colorCutOff,
    }),
    },
    {
      name: 'backgroundVideo',
      title: 'Background video',
      type: 'reference',
      fieldset: 'media',
      hidden: ({parent}) => parent.colorCutOff,
      to: [{type: 'backgroundVideo'}],
    },
  ]
}
