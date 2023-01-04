import { image } from '.';

export const videoEmbed = (props = {}) => {
  return {
    name: 'videoEmbed',
    title: 'Video Embed',
    fieldset: props.fieldset || 'media',
    type: 'object',
    fields: [
      { ...image({ name: 'videoPoster', title: 'Video Poster' }) },
      {
        name: 'videoSource',
        title: 'Video Source',
        type: 'string',
        options: {
          list: [
            { title: 'Youtube', value: 'youtube' },
            { title: 'Vimeo', value: 'vimeo' },
          ],
        },
      },
      {
        name: 'videoId',
        title: 'Video ID',
        type: 'string',
      },
    ],
  };
};
