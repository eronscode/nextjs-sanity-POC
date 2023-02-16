import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  //   icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
    },),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Front Page',
      name: 'frontPage',
      description: 'This is the entry page to your website',
      type: 'reference',
      to: {type: 'page'},
    }),
    defineField({
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
    defineField({
      title: 'Social Links',
      name: 'socialNav',
      description: 'Select menu for social navigation',
      type: 'reference',
      to: {type: 'navigation'},
    }),
    defineField({
      title: 'Footer',
      name: 'footer',
      type: 'footerConfig',
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
