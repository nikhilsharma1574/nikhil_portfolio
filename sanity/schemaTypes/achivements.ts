import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achivement',
  title: 'achivement',
  type: 'document',
  fields: [
    defineField({
      name: 'achivementName',
      title: 'AchivementName',
      type: 'string',
    }),
    defineField({
      name: 'achivementDesc',
      title: 'AchivementDesc',
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
