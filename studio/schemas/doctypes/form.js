import AiOutlineForm from '@meronex/icons/ai/AiOutlineForm';
import { blockContent } from '../commonFields';
import MdInput from '@meronex/icons/md/MdInput';
import AiOutlineCheckCircle from '@meronex/icons/ai/AiOutlineCheckCircle';
export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  icon: AiOutlineForm,
  fields: [
    {
      name: 'title',
      title: 'Form Subject',
      description:
        'For internal purposes only, this will not be displayed on the site.',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'recipient',
      title: 'Recipient',
      type: 'string',
      initialValue: 'scott@scottwamba.ch',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ).required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      ...blockContent({
        title: 'Description',
        name: 'description',
      }),
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          name: 'formField',
          title: 'Form Field',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              validation: (Rule) => Rule.required(),
              type: 'string',
              options: {
                list: [
                  { title: 'checkbox', value: 'checkbox' },
                  { title: 'date', value: 'date' },
                  { title: 'datetime-local', value: 'datetime-local' },
                  { title: 'email', value: 'email' },
                  { title: 'hidden', value: 'hidden' },
                  { title: 'month', value: 'month' },
                  { title: 'number', value: 'number' },
                  { title: 'radio', value: 'radio' },
                  { title: 'tel', value: 'tel' },
                  { title: 'text', value: 'text' },
                  { title: 'textarea', value: 'textarea' },
                  { title: 'time', value: 'time' },
                  { title: 'url', value: 'url' },
                  { title: 'week', value: 'week' },
                ],
              },
            },
            {
              name: 'label',
              validation: (Rule) => Rule.required(),
              title: 'Label',
              type: 'string',
            },
            {
              name: 'hideLabel',
              title: 'Hide Label',
              type: 'boolean',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'choices',
              hidden: ({ parent }) =>
                parent.type !== 'radio' && parent.type !== 'checkbox',
              title: 'Choices',
              type: 'array',
              of: [
                {
                  name: 'choice',
                  title: 'Choice',
                  type: 'object',
                  fields: [
                    {
                      name: 'copy',
                      title: 'Copy',
                      type: 'string',
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'copy',
                      subtitle: 'value',
                    },
                    prepare({ title, subtitle }) {
                      return {
                        title,
                        subtitle,
                        media: AiOutlineCheckCircle,
                      };
                    },
                  },
                },
              ],
            },
            {
              name: 'initialValue',
              title: 'Initial Value',
              type: 'string',
              hidden: ({ parent }) =>
                parent.type === 'radio' || parent.type === 'checkbox',
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              hidden: ({ parent }) =>
                parent.type === 'radio' ||
                parent.type === 'checkbox' ||
                parent.initialValue,
              type: 'string',
            },
            {
              name: 'required',
              title: 'Required',
              type: 'boolean',
            },
            {
              name: 'readOnly',
              title: 'Read Only',
              type: 'boolean',
              hidden: ({ parent }) =>
                parent.type === 'radio' || parent.type === 'checkbox',
            },
            {
              name: 'disabled',
              title: 'Disabled',
              type: 'boolean',
              hidden: ({ parent }) =>
                parent.type === 'radio' || parent.type === 'checkbox',
            },
            {
              name: 'validation',
              title: 'RegEx Validation',
              description:
                'Use RegEx to validate. Only if you know what you are doing',
              type: 'string',
              hidden: ({ parent }) =>
                parent.type === 'radio' || parent.type === 'checkbox',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'type',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle,
                media: MdInput,
              };
            },
          },
        },
      ],
    },
    {
      ...blockContent({
        name: 'beforeSubmitCopy',
        title: 'Before Submit Copy',
      }),
    },
    {
      name: 'submitButtonCopy',
      title: 'Submit Button Copy',
      description: 'If left blank it will just say "Submit"',
      type: 'string',
    },
    {
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      initialValue: 'Thank you! We appreciate you contacting us. We will get back in touch with you soon! Have a great day!',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'errorMessage',
      title: 'Error Message',
      type: 'text',
      initialValue: 'Oh no! Looks like something has gone wrong. Our engineer has been alerted to the issue and will attend to the problem as soon as possible.',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heading',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: AiOutlineForm,
      };
    },
  },
};
