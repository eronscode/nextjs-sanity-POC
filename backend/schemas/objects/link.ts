import {defineField} from 'sanity'

export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [
        {
          type: 'home',
        },
        {
          type: 'cmsPage',
        },
      ],
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    }),
  ],
}
