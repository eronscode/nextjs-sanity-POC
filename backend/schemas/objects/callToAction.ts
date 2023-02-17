import {defineField} from 'sanity'

export default {
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    }),
    defineField({
      name: 'url',
      title: 'Reference to page',
      type: 'link',
    }),
    defineField({
      title: 'Link Variant',
      name: 'linkVariant',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
      },
    }),
  ],
}
