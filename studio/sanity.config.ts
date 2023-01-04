import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {desk} from './desk'

export default defineConfig({
  name: 'default',
  title: 'Developers Donating Work',

  projectId: 'ermbtigh',
  dataset: 'production',

  plugins: [desk, visionTool(), codeInput(), media()],
  document: {
    // @ts-ignore
    productionUrl: async (prev, context) => {
      // context includes the client an other details
      // @ts-ignore
      const {client, dataset, document} = context

      const remoteURL = 'https://developersdonatingwork.vercel.app'
      const localURL = 'http://localhost:3000'

      const appUrl = window.location.hostname === 'localhost' ? localURL : remoteURL

      if (document._type === 'page') {
        // you can now use async/await 🎉
        const slug = await client.fetch(`*[_id == $docId][0].slug.current`, {
          docId: document._id,
        })

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `${appUrl}/${slug === '/' ? '' : slug}?${params}`
      }

      return prev
    },
  },
  schema: {
    // @ts-ignore
    types: schemaTypes,
  },
})
