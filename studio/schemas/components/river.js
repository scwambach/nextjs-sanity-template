import BiWater from '@meronex/icons/bi/BiWater';
import {
  blockContent,
  componentFields,
  componentFieldsets,
  link,
} from '../commonFields';

export default {
  name: 'river',
  title: 'River',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      name: 'boxed',
      title: 'Boxed',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      title: 'Features',
      name: 'features',
      fieldset: 'content',
      validation: (Rule) => Rule.min(1),
      type: 'array',
      of: [
        {
          name: 'feat',
          title: 'Feature',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              validation: (Rule) => Rule.required(),
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            { ...blockContent() },
            {
              title: 'Links',
              name: 'links',
              type: 'array',
              validation: (Rule) => Rule.max(2),
              of: [{ ...link({ title: 'Link', name: 'link' }) }],
            },
            {
              name: 'videoModal',
              title: 'Video',
              type: 'reference',
              to: [{ type: 'video' }],
            },
          ],
          preview: {
            select: {
              title: 'title',
              videoUrl: 'videoUrl',
              media: 'image',
            },
            prepare({ videoUrl, media }) {
              return {
                title: 'Feature',
                subtitle: videoUrl || '',
                media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'backgroundImage',
      subtitle: 'subHeading',
    },
    prepare({ title, subtitle, image }) {
      return {
        title: 'River',
        subtitle: title ? `${title}${subtitle ? ` - ${subtitle}` : ''}` : null,
        media: image || BiWater(),
      };
    },
  },
};
