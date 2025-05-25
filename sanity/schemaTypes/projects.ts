import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    }),
    defineField({
      name: 'projectDesc',
      title: 'Project Description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'projectName',
      media: 'mainImage',
    },
  },
});
