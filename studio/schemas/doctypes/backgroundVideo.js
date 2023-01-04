import MdLocalMovies from '@meronex/icons/md/MdLocalMovies';

export default {
  name: 'backgroundVideo',
  title: 'Background Video',
  type: 'document',
  icon: MdLocalMovies,
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
      description:
        'Please make sure this is a short loopable video, does not have sound, and is a video file. Please do not use a link from youtube, vemeo, or any other video hosting wesbite link.',
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
