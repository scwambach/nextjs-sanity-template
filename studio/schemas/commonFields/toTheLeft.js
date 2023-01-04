export const toTheLeft = (props = {}) => {
  return {
    name: 'toTheLeft',
    title: 'Icon To the Left',
    fieldset: props.settings,
    type: 'boolean',
    initialValue: false,
    description: 'Toggling this will put the icon to the left of the copy.',
  };
};
