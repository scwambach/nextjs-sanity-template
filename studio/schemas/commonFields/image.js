export const image = (props = {}) => {
  return {
    name: props.name || 'image',
    title: props.title || 'Image',
    type: 'image',
    fieldset: props.fieldset,
    description: props.description,
    validation: props.required ? (Rule) => Rule.required() : null,
    options: {
      hotspot: true,
    },
  }
}
