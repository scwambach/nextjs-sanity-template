export const colorList = (props = {}) => {
  return {
    title: props.title || 'Color List',
    name: props.name || 'colorList',
    type: 'string',
    fieldset: props.fieldset || null,
    description: props.description || null,
    hidden: props.hidden,
    validation: (Rule) => Rule.required(),
    initialValue: 'bg-white-100',
    options: {
      list: [
        {title: 'White', value: 'bg-white-100'},
        {title: 'Blue', value: 'bg-blue-500'},
      ],
    },
  }
}
