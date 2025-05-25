import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'education',
  type: 'document',
  fields: [
    defineField({
      name: 'educationInstitute',
      title: 'educationInstitute',
      type: 'string',
    }),
    defineField({
      name: 'educationYear',
      title: 'educationYear',
      type: 'string',
    }),
    defineField({
        name: 'educationPercentage',
        title: 'educationPercentage',
        type: 'string',
      }),
    defineField({
      name: 'mainImage',
      title: 'Education Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
