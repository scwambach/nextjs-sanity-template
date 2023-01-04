import {blockContent, fieldSets, pageDescription, slug} from '../commonFields'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: [
    ...fieldSets,
    {
      name: 'postmeta',
      title: 'Post Information',
      description: 'These fields influence how the post is categorized and orgranized in the blog.',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
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
        'The image that is shown when shared on social media platforms as well as in the main banner of the post.',
      fieldset: 'meta',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      fieldset: 'postmeta',
      validation: (Rule) => Rule.required(),
      type: 'date',
    },
    {
      name: 'authors',
      title: 'Authors',
      fieldset: 'postmeta',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'person'}],
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      validation: (Rule) => Rule.min(1),
      fieldset: 'postmeta',
      type: 'array',
      of: [
        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{type: 'postCategory'}],
        },
      ],
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
