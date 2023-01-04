import BiText from '@meronex/icons/bi/BiText';
import {
  blockContent,
  componentFields,
  componentFieldsets,
} from '../commonFields';

export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      name: 'columns',
      title: 'Columns',
      type: 'string',
      fieldset: 'content',
      options: {
        list: [
          { title: 'Two Columns', value: 'twoColumns' },
          { title: 'Three Columns', value: 'threeColumns' },
        ],
      },
    },
    { ...blockContent({ fieldset: 'content' }) },
    {
      ...blockContent({
        name: 'col2Content',
        title: 'Column 2 Content',
        fieldset: 'content',
        hidden: ({ parent }) =>
          parent.columns !== 'twoColumns' && parent.columns !== 'threeColumns',
      }),
    },
    {
      ...blockContent({
        name: 'col3Content',
        title: 'Column 3 Content',
        fieldset: 'content',
        hidden: ({ parent }) => parent.columns !== 'threeColumns',
      }),
    },
  ],
  preview: {
    select: {
      subtitle: 'blockContent',
      image: 'backgroundImage',
    },
    prepare({ subtitle, image }) {
      const block = (subtitle || []).find((blok) => blok._type === 'block');
      return {
        title: 'Rich Text',
        subtitle: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
        media: image || BiText(),
      };
    },
  },
};
