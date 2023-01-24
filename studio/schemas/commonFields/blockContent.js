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
        name: 'videoEmbed',
        title: 'Video Embed',
        fields: [
          {
            name: 'featureVideo',
            validation: (Rule) => Rule.required(),
            title: 'Feature Video',
            type: 'reference',
            to: [{ type: 'video' }],
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
        ],
        preview: {
          select: {
            title: 'featureVideo.title',
            subtitle: 'featureVideo.url',
            media: 'featureVideo.poster'
          },
          prepare({ title, subtitle, media }) {
            return {
              media,
              title,
              subtitle,
            };
          },
        },
      },
      {
        type: 'object',
        name: 'generalEmbed',
        title: 'General Embed',
        description: 'This could be from SoundCloud, Spotify, or anything.',
        fields: [
          {
            name: 'code',
            type: 'text',
            title: 'Code',
            description: 'Paste code here',
          },
        ],
        preview: {
          select: {
            subtitle: 'code',
          },
          prepare({  subtitle }) {
            return {
              title: 'General Embed',
              subtitle,
            };
          },
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
