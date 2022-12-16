import {ApiConfig, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default <ApiConfig>defineConfig({
  name: 'default',
  title: 'tech-ecomm',

  projectId: 'eef2fkii',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
