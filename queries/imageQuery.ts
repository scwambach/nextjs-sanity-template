import { groq } from 'next-sanity';

const imageQuery = ({
  name,
  fieldName,
}: {
  name: string;
  fieldName?: string;
}) => {
  return groq`
  "${fieldName || name}": {
    "reference": ${name},
    "url": ${name}.asset->url,
    "lqip": ${name}.asset->metadata.lqip,
    "alt": ${name}.asset->altText,
    "caption": ${name}.asset->description,
    "crop": ${name}.crop,
    "hotspot": ${name}.hotspot,
    "height": ${name}.asset->metadata.dimensions.height,
    "width": ${name}.asset->metadata.dimensions.width,
    "aspectRatio": ${name}.asset->metadata.dimensions.aspectRatio,
  }
  `;
};

export const assetQuery = () => {
  return groq`
    "reference": {
      asset,
      "crop": crop,
      "hotspot": hotspot,
    },
    "url": asset->url,
    "lqip": asset->metadata.lqip,
    "alt": asset->altText,
    "caption": asset->description,
    "crop": crop,
    "hotspot": hotspot,
    "height": asset->metadata.dimensions.height,
    "width": asset->metadata.dimensions.width,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
  `;
};

export { imageQuery };
