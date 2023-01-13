import {defineCliConfig} from 'sanity/cli'
import {vars} from './env'

const {SANITY_STUDIO_API_PROJECT_ID, SANITY_STUDIO_API_DATASET} = vars

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_API_DATASET,
  },
})
