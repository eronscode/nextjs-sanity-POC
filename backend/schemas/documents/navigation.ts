import {defineField} from 'sanity'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id',
    }),
    defineField({
      name: 'navItems',
      type: 'array',
      title: 'Navigation items',
      of: [{type: 'navigationItem'}],
    }),
  ],
}
