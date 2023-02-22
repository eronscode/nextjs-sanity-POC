export default {
    name: 'section_services',
    title: 'Services',
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
        name: 'services',
        title: 'Services',
        type: "array",
        of: [
          {
            type: "reference",
            to: [
              { type: "service" },
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
          subtitle: 'Services',
          title
        }
      },
    },
  }
  