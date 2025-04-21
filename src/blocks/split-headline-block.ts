import type { Block } from 'payload'

export const SplitHeadlineBlock: Block = {
  slug: 'split-headline',
  labels: {
    singular: 'Split Headline',
    plural: 'Split Headlines',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: true,
      defaultValue: 'headline',
    },
    {
      name: 'lines',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'columns',
          type: 'array',
          required: true,
          minRows: 1,
          maxRows: 3,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
