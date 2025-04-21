import type { Block } from 'payload'

export const BrandStatementBlock: Block = {
  slug: 'brand-statement',
  labels: {
    singular: 'Brand Statement',
    plural: 'Brand Statements',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Anchor / Section Name',
      required: true,
      defaultValue: 'brand-statement',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'WE DON’T SELL ORDINARY CARS. ONLY TASTIEST. ONLY TOP-TIER.',
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      defaultValue: `WE DON’T DEAL IN BASIC. WE DELIVER MACHINES THAT TURN HEADS AND SPARK CONVERSATIONS — THE RARE SPECS, THE ICONIC TRIMS, THE BUILDS YOU WON’T FIND PARKED ON EVERY CORNER. EVERY CAR IS HANDPICKED FOR THOSE WHO KNOW EXACTLY WHAT THEY WANT AND WON’T SETTLE FOR LESS. WE MOVE FAST — DELIVERY IN AS LITTLE AS 7 DAYS. MINIMAL UPFRONT, FULL SUPPORT, ZERO HASSLE. THIS ISN’T JUST BUYING A CAR — IT’S MAKING A STATEMENT, WITHOUT LIFTING A FINGER.`,
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left Column (heading left, body right)', value: 'left' },
        { label: 'Centered', value: 'center' },
        { label: 'Reversed', value: 'reverse' },
      ],
      required: true,
    },
  ],
}
