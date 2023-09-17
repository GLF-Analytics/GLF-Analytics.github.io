import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index'

export const config = defineConfig({  
  projectId: '508ol8zu',
  dataset: 'production',
  title: 'GLF-Analytics',
  apiVersion: "2023-09-17",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
