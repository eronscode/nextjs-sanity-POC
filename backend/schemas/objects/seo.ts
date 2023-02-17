import {defineField} from 'sanity'

export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    defineField({
      title: 'Meta title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title of the page used primarily for search engines and social media previews',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'Meta description',
      name: 'metaDescription',
      type: 'string',
      description:
        'A description of the page used primarily for search engines and social media previews',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
}
