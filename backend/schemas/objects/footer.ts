export default {
  name: 'footerConfig',
  type: 'object',
  title: 'Footer',
  fields: [
    {
      name: 'description',
      type: 'portableText',
      title: 'Description',
      description: 'This is the text displayed at the footer',
    },
    {
      name: 'footerNav',
      title: 'Footer Navigation',
      type: 'reference',
      to: {type: 'navigation'},
    },
    {
      name: 'copyright',
      type: 'string',
      title: 'Copyright Text',
    },
  ],
}
