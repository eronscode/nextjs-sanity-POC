export default {
    name: 'section_textWithImage',
    type: 'object',
    title: 'Text with Image',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'portableText',
        title: 'Description',
        description: '',
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
          subtitle: 'Text with Image',
          title: heading,
          media: image,
        }
      },
    },
  }
  