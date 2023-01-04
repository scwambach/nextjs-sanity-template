import AiOutlineLink from '@meronex/icons/ai/AiOutlineLink'

export const link = ({title = 'Link', name = 'link', fieldset, extraFields = []}) => ({
  title,
  name,
  type: 'object',
  fieldset,
  options: {
    collapsible: true,
    collapsed: false,
  },
  icon: AiOutlineLink,
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      type: 'string',
    },
    {
      name: 'anchor',
      title: 'Anchor',
      type: 'boolean',
      hidden: ({parent}) => parent?.subItems?.length > 0,
      initialValue: false,
    },
    {
      name: 'anchorName',
      title: 'Anchor name',
      hidden: ({parent}) => !parent?.anchor || parent?.subItems?.length > 0,
      type: 'string',
      description:
        'This is the ID of the element you are targeting. One way to find the elements ID is to right-click on the element and select "inspect element". The element in the new panel should have the code highlighted that represents the element. You should be able to find the ID there.',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'Please enter the full web address.',
      hidden: ({parent}) => !parent?.newTab || parent?.anchor || parent?.subItems?.length > 0,
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
        }),
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      hidden: ({parent}) => parent?.anchor || parent?.newTab || parent?.subItems?.length > 0,
      to: [{type: 'page'}, {type: 'dataPage'}, {type: 'post'}],
    },
    {
      title: 'New Tab',
      hidden: ({parent}) => parent?.anchor || parent?.subItems?.length > 0,
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
    },
    ...extraFields,
  ],
  preview: {
    select: {
      title: 'copy',
      subtitle: 'url',
      internal: 'internalLink.slug.current',
    },
    prepare(selection) {
      const {title, subtitle, internal} = selection
      return {
        ...selection,
        title,
        subtitle: subtitle || internal,
        media: AiOutlineLink,
      }
    },
  },
})
