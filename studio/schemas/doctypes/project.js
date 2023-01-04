import {blockContent, fieldSets, pageDescription, slug} from '../commonFields'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fieldsets: fieldSets,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {...slug()},
    {...pageDescription},
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description:
        'The image that is shown when shared on social media platforms as well as in the main banner of the project.',
      fieldset: 'meta',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      ...blockContent({
        title: 'Body Content',
        name: 'bodyContent',
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}
