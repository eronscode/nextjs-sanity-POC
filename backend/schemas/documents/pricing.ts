export default {
  name: 'pricing',
  title: 'Pricing Plans',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isFeatured',
      title: 'Featured?',
      type: 'boolean',
      description:'If toggled, this pricing will have a different background to standout',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: "string",
        }
      ]
    },
    {
      name: 'button',
      title: 'Action',
      type: 'callToAction',
    },
  ],
}
