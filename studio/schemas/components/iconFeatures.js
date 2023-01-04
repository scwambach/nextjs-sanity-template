import { componentFields, componentFieldsets, iconList } from '../commonFields';
import BsFillGrid3X2GapFill from '@meronex/icons/bs/BsFillGrid3X2GapFill';
import * as Icons from '@meronex/icons/fa';

export const DynamicIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export default {
  name: 'iconFeatures',
  title: 'Icon Features',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      fieldset: 'content',
      of: [
        {
          name: 'feature',
          title: 'Feature',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Select Icon',
              validation: (Rule) => Rule.required(),
              type: 'string',
              options: {
                list: iconList,
              },
            },
            {
              name: 'heading',
              validation: (Rule) => Rule.required(),
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'message',
              validation: (Rule) => Rule.required(),
              title: 'Message',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'message',
              media: 'icon',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: `${title}`,
                subtitle: `${subtitle}`,
                media: DynamicIcon(media),
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      image: 'backgroundImage',
      subtitle: 'heading',
    },
    prepare({ subtitle, image }) {
      return {
        title: 'Icon Feautres',
        subtitle,
        media: image || BsFillGrid3X2GapFill,
      };
    },
  },
};
