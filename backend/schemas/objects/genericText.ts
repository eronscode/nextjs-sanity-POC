export default {
  name: 'section_genericText',
  title: 'Generic Text',
  type: 'object',
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
      name: 'text',
      title: 'Text',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        subtitle: 'Generic Text',
        title,
      }
    },
  },
}
