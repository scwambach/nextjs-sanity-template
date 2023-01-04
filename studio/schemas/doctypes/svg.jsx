import React from 'react';

export default {
  name: 'svg',
  title: 'SVG',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'customStyleCode',
      title: 'SVG Code',
      type: 'code',
      options: {
        language: 'html',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'customStyleCode',
    },
    prepare({ title, media }) {
      return {
        title: `${title}`,
        media: (
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
                __html: media.code,
              }}
            />
          </>
        ),
      };
    },
  },
};
