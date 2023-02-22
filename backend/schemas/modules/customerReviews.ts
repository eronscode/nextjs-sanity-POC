export default {
  name: 'section_customerReviews',
  title: 'Customer reviews',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "customerReview" },
          ]
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}: any) {
      return {
        subtitle: 'Customer Reviews',
        title
      }
    },
  },
}
