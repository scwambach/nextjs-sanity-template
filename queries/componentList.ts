import { groq } from 'next-sanity';
import * as block from './blockQueries';
export const componentList = groq`
pageContent[] {
  ${block.accordion},
  ${block.affiliateList},
  ${block.ctaBlock},
  ${block.formCta},
  ${block.heroBanner},
  ${block.iconFeatures},
  ${block.imageBlock},
  ${block.imageGallery},
  ${block.logoHeroBanner},
  ${block.peopleListing},
  ${block.projectCollection},
  ${block.quotes},
  ${block.recentPosts},
  ${block.richText},
  ${block.river},
}`;
