import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  //   icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
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
      description: 'You can click the generate button to generate slug based on title',
    }),
    defineField({
      name: 'pageSections',
      type: 'array',
      title: 'Sections',
      of: [
        {type: 'section_hero'},
        {type: 'section_textWithImage'},
        {type: 'section_customerReviews'},
        {type: 'section_pricings'},
        {type: 'section_services'},
        {type: 'section_genericText'},
      ],
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
