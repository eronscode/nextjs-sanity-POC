import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPosts',
  title: 'Blog Posts',
  type: 'document',
  //   icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Content Title',
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
      name: 'image',
      title: 'Featured Image',
      type: 'image',
    }),
    {
      name: 'shortDesc',
      type: 'string',
      title: 'Short Description of Content',
      description: 'This is the text displayed at blog cards',
      options: {
        maxLength: 100
      },
    },
    {
      name: 'description',
      type: 'portableText',
      title: 'Content Body',
      description: 'This is the main body of the content',
    },
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'blogAuthor'},
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
