import {defineField} from 'sanity'

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
    }),
    defineField({
      name: 'url',
      type: 'link',
      title: 'Navigation Item URL',
    }),
  ],
}
