import {
  fieldSets,
  mainImage,
  pageContent,
  pageDescription,
  slug,
} from '../commonFields';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: fieldSets,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    { ...slug() },
    { ...pageDescription },
    { ...mainImage },
    { ...pageContent },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `${title}`,
        subtitle: `slug: ${
          subtitle.current === '/' ? '/' : `/${subtitle.current}`
        }`,
        media,
      };
    },
  },
};
