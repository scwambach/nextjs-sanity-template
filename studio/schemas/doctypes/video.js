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
    {
      type: 'image',
      name: 'poster',
      title: 'Poster',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      media: 'poster'
    },
    prepare({ title, subtitle, media }) {
      return {
        media,
        title,
        subtitle,
      };
    },
  },
};
