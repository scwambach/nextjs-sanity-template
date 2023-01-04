import { slugify } from '.';

export const slug = (props = {}) => {
  const {
    name = 'slug',
    title = 'Slug',
    prefix,
    source = 'title',
    fieldset = 'meta',
  } = props;
  return {
    name,
    title,
    type: 'slug',
    fieldset,
    validation: (Rule) => Rule.required(),
    options: {
      source,
      maxLength: 96,
      slugify: (input) =>
        prefix
          ? `${prefix ? `${prefix}/` : ''}${slugify(input)}`
          : slugify(input),
    },
  };
};
