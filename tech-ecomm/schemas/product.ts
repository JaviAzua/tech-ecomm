import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(30),
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'headphone', value: 'headphone'},
          {title: 'component', value: 'component'},
          {title: 'accessory', value: 'accessory'},
          {title: 'notebook', value: 'notebook'},
          {title: 'tablet', value: 'tablet'},
        ],
        layout: 'dropdown',
      },
    },
  ],
})
