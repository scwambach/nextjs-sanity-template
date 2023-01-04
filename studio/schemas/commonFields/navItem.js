import AiOutlineLink from '@meronex/icons/ai/AiOutlineLink';
import { link } from '.';

export const navItem = {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      ...link({
        title: 'Link',
        name: 'link',
        extraFields: [
          {
            name: 'subItems',
            title: 'Sub Items',
            type: 'array',
            of: [
              {
                ...link({
                  title: 'Link',
                  name: 'link',
                  extraFields: [
                    {
                      name: 'className',
                      title: 'Classes',
                      description: 'Separate classes with a single space.',
                      type: 'string',
                    },
                  ],
                }),
              },
            ],
          },
          {
            name: 'className',
            title: 'Classes',
            description: 'Separate classes with a single space.',
            type: 'string',
          },
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'link.copy',
      subtitle: 'link.url',
      internal: 'link.internalLink.slug.current',
      subItems: 'link.subItems',
      className: 'className',
    },
    prepare(selection) {
      const { title, subtitle, subItems, className, internal } = selection;
      return {
        ...selection,
        title,
        subtitle: `${`${subItems ? 'Sub-Items' : subtitle || internal}${
          subItems && subItems.length > 0
            ? ` (${subItems.length} subitems)`
            : ''
        }`}${className ? ` [${className}]` : ''}`,
        media: AiOutlineLink,
      };
    },
  },
};
