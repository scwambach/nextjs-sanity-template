import {defineConfig} from 'sanity'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {desk} from './desk'
import {vars} from './env'


const {SANITY_TITLE, SANITY_ID, SANITY_DATASET, REMOTE_URL, LOCAL_URL} = vars

export default defineConfig({
  name: 'default',
  title: SANITY_TITLE,
  projectId: SANITY_ID,
  dataset: SANITY_DATASET,
  plugins: [desk, visionTool(), codeInput(), media(), unsplashImageAsset()],
  document: {
    // @ts-ignore
    productionUrl: async (prev, context) => {
      // context includes the client an other details
      // @ts-ignore
      const {client, dataset, document} = context

      const appUrl = window.location.hostname === 'localhost' ? LOCAL_URL : REMOTE_URL

      if (document._type === 'page') {
        // you can now use async/await 🎉
        const slug = await client.fetch(`*[_id == $docId][0] {
          slug,
          _id
        }`, {
          docId: document._id,
        })

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `${appUrl}/${slug === '/' ? '' : slug?._id}?${params}`
      }

      return prev
    },
  },
  schema: {
    // @ts-ignore
    types: schemaTypes,
  },
})
