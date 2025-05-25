import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skills',
      title: 'skills',
      type: 'string',
    }),
    defineField({
      name: 'skillLogo',
      title: 'skillLogo',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
