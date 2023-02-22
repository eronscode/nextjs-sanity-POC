export default {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'shortDesc',
        title: 'Short Description',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
    ],
  }
  