export const styleSettings = (props) => {
  return [
    {
      name: 'customStyles',
      title: 'Custom Styles',
      fieldset: props.fieldset,
      description: 'Only use if you know what you are doing.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'customStyleCode',
      title: 'SCSS',
      fieldset: props.fieldset,
      hidden: ({ parent }) => !parent.customStyles,
      type: 'code',
      options: {
        language: 'scss',
      },
    },
  ];
};
