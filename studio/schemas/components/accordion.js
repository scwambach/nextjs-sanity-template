import {
  blockContent,
  componentFields,
  componentFieldsets,
} from '../commonFields';
import MdcArrowExpandVertical from '@meronex/icons/mdc/MdcArrowExpandVertical';
import MdExpand from '@meronex/icons/ios/MdExpand';
export default {
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  fieldsets: componentFieldsets,
  fields: [
    ...componentFields(),
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      fieldset: 'content',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              ...blockContent({
                name: 'content',
                title: 'Content',
              }),
            },
          ],
          preview: {
            select: {
              title: 'label',
            },
            prepare({ title }) {
              return {
                title,
                media: MdExpand,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'backgroundImage',
    },
    prepare({ title, image }) {
      return {
        title: 'Accordion',
        subtitle: title,
        media: image || MdcArrowExpandVertical,
      };
    },
  },
};
