import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    defineField({
      name: 'CompanyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'startDate',
      type: 'date',
    }),
    defineField({
        name: 'endDate',
        title: 'endDate',
        type: 'date',
      }),
    defineField({
      name: 'technologies',
      title: 'technologies',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Company Logo',
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
