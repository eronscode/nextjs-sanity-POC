export default {
  name: 'section_hero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Main Title',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'button',
      title: 'Action',
      type: 'callToAction',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      image: 'image',
    },
    prepare({heading, image}: any) {
      return {
        subtitle: 'Hero',
        title: heading,
        media: image,
      }
    },
  },
}
