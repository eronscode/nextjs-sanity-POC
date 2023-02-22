export default {
    name: 'section_pricings',
    title: 'Pricing Plans',
    type: 'document',
    __experimental_actions: ['update', 'publish', 'delete'],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subTitle',
        title: 'Sub Title',
        type: 'string',
      },
      {
        name: 'pricing',
        title: 'Pricing Plans',
        type: "array",
        of: [
          {
            type: "reference",
            to: [
              { type: "pricing" },
            ]
          }
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
      prepare({title}: any) {
        return {
          subtitle: 'Pricing Plan',
          title
        }
      },
    },
  }
  