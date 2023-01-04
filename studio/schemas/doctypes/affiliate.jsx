import React from 'react';
import BsBuilding from '@meronex/icons/bs/BsBuilding';
import { socialList, socialName } from '../commonFields/socialList';
import * as Icons from '@meronex/icons/ai';

export const DynamicIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export default {
  name: 'affiliate',
  title: 'Affiliate',
  type: 'document',
  icon: BsBuilding,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'customIcon',
      title: 'Main Logo',
      hidden: ({ parent }) => parent.iconImage,
      type: 'reference',
      to: [{ type: 'svg' }],
    },
    {
      name: 'iconImage',
      hidden: ({ parent }) => parent.customIcon,
      title: 'Main Logo Image',
      description: 'Use this only when a custom SVG is not an option.',
      type: 'image',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'social',
          title: 'Social',
          type: 'object',
          fields: [
            socialList,
            {
              name: 'url',
              title: 'Url',
              type: 'url',
            },
          ],
          preview: {
            select: {
              subtitle: 'url',
              media: 'icon',
            },
            prepare({ subtitle, media }) {
              return {
                title: socialName(media).toUpperCase(),
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
      title: 'title',
      subtitle: 'description',
      customIcon: 'customIcon.customStyleCode.code',
      iconImage: 'iconImage',
    },
    prepare({ title, subtitle, customIcon, iconImage }) {
      return {
        title: `${title}`,
        subtitle: `${subtitle}`,
        media: iconImage || (
          <>
            <style>
              {`.iconTypePreview svg {
              width: 100%;
            }`}
            </style>
            <div
              className="iconTypePreview"
              style={{ width: '100%' }}
              dangerouslySetInnerHTML={{
                __html: customIcon,
              }}
            />
          </>
        ),
      };
    },
  },
};
