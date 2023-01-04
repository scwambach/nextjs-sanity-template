import * as Icons from '@meronex/icons/si';

export const DynamicIcon = (name) => {
  const IconComponent = Icons[name];

  return IconComponent;
};

export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'electronic',
      title: 'Electronic',
      options: {
        collapsible: false,
        collapsed: true,
      },
    },
    {
      name: 'address',
      title: 'Address',
      options: {
        collapsible: false,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'defaultOgImage',
      title: 'Default OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
            {
              title: 'Icon',
              name: 'icon',
              type: 'string',
              options: {
                list: [
                  { title: 'facebook', value: 'SiFacebook' },
                  { title: 'twitter', value: 'SiTwitter' },
                  { title: 'youtube', value: 'SiYoutube' },
                  { title: 'instagram', value: 'SiInstagram' },
                  { title: 'linkedin', value: 'SiLinkedin' },
                  { title: 'pinterest', value: 'SiPinterest' },
                  { title: 'tiktok', value: 'SiTiktok' },
                  { title: 'spotify', value: 'SiSpotify' },
                  { title: 'venmo', value: 'SiVenmo' },
                  { title: 'snapchat', value: 'SiSnapchat' },
                  { title: 'twitch', value: 'SiTwitch' },
                  { title: 'dribbble', value: 'SiDribbble' },
                ],
              },
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
              description:
                'Can be full URL or relative path (e.g. "/about") or email address.',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                }),
            },
          ],
          preview: {
            select: {
              title: 'url',
              icon: 'icon',
            },
            prepare(selection) {
              const { title, icon } = selection;
              return {
                title,
                media: DynamicIcon(icon),
              };
            },
          },
        },
      ],
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
      name: 'mainPhone',
      title: 'Main Phone',
      fieldset: 'electronic',
      type: 'string',
    },
    {
      name: 'mainEmail',
      title: 'Main Email',
      fieldset: 'electronic',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address Line 1',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address Line 2',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'cityState',
      title: 'City & State',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'zip',
      title: 'Zip Code',
      fieldset: 'address',
      type: 'string',
    },
    {
      name: 'customCss',
      title: 'Custom Styles (SCSS)',
      type: 'code',
      description:
        "For advanced use only. Set global styles if what is already in place isn't doing the trick.",
      options: {
        language: 'scss',
      },
    },
    {
      name: 'customJs',
      title: 'Custom Javascript',
      type: 'code',
      description:
        'For advanced use only. Do NOT change unless you know what you are doing.',
      options: {
        language: 'js',
      },
    },
  ],
};
