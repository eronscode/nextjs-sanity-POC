import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'cmsPage',
  title: 'CMS Pages',
  type: 'document',
  //   icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
      description: 'It can be left empty as it\'s auto generated from the title',
    }),
    defineField({
      name: 'pageSections',
      type: 'array',
      title: 'Sections',
      of: [{type: 'hero'}],
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //   },
  //   prepare({title}) {
  //     return {
  //       subtitle: 'Home',
  //       title,
  //     }
  //   },
  // },
})
