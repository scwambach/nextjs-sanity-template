import { socialList } from '../commonFields';
import * as Icons from '@meronex/icons/si';
import { socialName } from '../commonFields/socialList';
import { AiOutlineMail, AiOutlineLink } from '@meronex/icons/ai';

export const DynamicIcon = (name) => {
  const IconComponent = Icons[name];

  if (name === 'AiOutlineMail') {
    return AiOutlineMail;
  }

  if (name === 'AiOutlineLink') {
    return AiOutlineLink;
  }

  return IconComponent;
};

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      validation: (Rule) => Rule.required(),
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (parent) => `${parent.firstName}-${parent.lastName}`,
      },
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'affiliate' }],
    },
    {
      name: 'socials',
      title: 'Socials',
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
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto'],
                }),
            },
          ],
          preview: {
            select: {
              title: 'icon',
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
      firstName: 'firstName',
      lastName: 'lastName',
      company: 'company.title',
      position: 'position',
      media: 'photo',
    },
    prepare({ firstName, lastName, position, company, media }) {
      return {
        title: `${firstName}${lastName ? ` ${lastName}` : ''}`,
        subtitle: `${
          position && company
            ? `${position} @ ${company}`
            : company
            ? company
            : position
            ? position
            : ''
        }`,
        media,
      };
    },
  },
};
