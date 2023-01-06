import {defineCliConfig} from 'sanity/cli'
import {vars} from './env'

const {SANITY_ID, SANITY_DATASET} = vars

export default defineCliConfig({
  api: {
    projectId: SANITY_ID,
    dataset: SANITY_DATASET,
  },
})
