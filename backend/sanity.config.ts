import { defaultDocumentNode } from './defaultDocumentNode';
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Nextjs sanity POC',

  projectId: '8gj76zxm',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode
    }),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
