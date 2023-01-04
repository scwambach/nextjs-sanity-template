import MdcMovieOpenOutline from '@meronex/icons/mdc/MdcMovieOpenOutline';

export default {
  name: 'video',
  title: 'Feature Video',
  type: 'document',
  icon: MdcMovieOpenOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
