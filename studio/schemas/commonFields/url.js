export const url = {
  title: 'URL',
  name: 'url',
  type: 'url',
  description:
    'Can be full URL or relative path (e.g. "/about") or email address.',
  validation: (Rule) =>
    Rule.uri({
      allowRelative: true,
    }),
};
