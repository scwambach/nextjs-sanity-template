export const blockContent = (props = {}) => {
  return {
    title: props.title || 'Block Content',
    name: props.name || 'blockContent',
    description: props.description,
    fieldset: props.fieldset,
    hidden: props.hidden,
    validation: props.required ? (Rule) => Rule.required() : null,
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'Quote', value: 'blockquote'},
        ],
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'Link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                  validation: (Rule) => Rule.uri({
                    allowRelative: true,
                  }),
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean',
                  initialValue: false,
                },
              ],
            },
          ],
        },
      },
      {
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        type: 'object',
        name: 'quoteBlock',
        title: 'Quote',
        fields: [
          {
            name: 'copy',
            type: 'text',
            title: 'Copy',
            rows: 3,
          },
          {
            name: 'signature',
            type: 'string',
            title: 'Signature',
          },
          {
            name: 'cite',
            type: 'string',
            title: 'Cite',
          },
          {
            name: 'citeUrl',
            type: 'string',
            title: 'Cite URL',
          },
        ],
      },
    ],
  }
}
