export default {
  name: 'customerReview',
  title: 'Customer Reviews',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          {title: '1', value: '1'},
          {title: '2', value: '2'},
          {title: '3', value: '3'},
          {title: '4', value: '4'},
          {title: '5', value: '5'},
        ],
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'review',
      title: 'Review',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'customerName',
      image: 'image',
      review: 'review',
    },
    prepare({heading, image, review}: any) {
      return {
        subtitle: review,
        title: heading,
        media: image,
      }
    },
  },
}
