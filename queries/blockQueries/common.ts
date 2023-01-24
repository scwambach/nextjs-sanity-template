import { groq } from 'next-sanity';
import { imageQuery, assetQuery } from 'queries/imageQuery';

export const commonBlockProps = groq`
  _type,
  _key,
  defined(componentId) => { componentId },
  defined(customStyles) => { customStyles },
  defined(customStyleCode) => { customStyleCode },
  defined(heading) => { heading },
  defined(subHeading) => { subHeading },
  defined(backgroundVideo) => { "backgroundVideo": backgroundVideo -> url },
  defined(fontColor) => { fontColor },
  defined(backgroundColor) => { backgroundColor },
  defined(colorCutOff) => { colorCutOff },
  defined(colorHeight) => { colorHeight },
  defined(backgroundImage) => { ${imageQuery({ name: 'backgroundImage' })} }
`;

export const formObject = groq`
  _id,
  "subject": title,
  recipient,
  defined(heading) => { heading },
  defined(description) => { description },
  thankYouMessage,
  errorMessage,
  formFields,
  defined(beforeSubmitCopy) => { beforeSubmitCopy[] {
    ...,
    _type == 'image' => {
      ${assetQuery()}
    }
  } },
  defined(submitButtonCopy) => { submitButtonCopy }
`;

export const linkObject = groq`
  _key,
  defined(anchor) => { anchor },
  defined(className) => { className },
  defined(url) => { url },
  defined(anchorName) => { anchorName },
  defined(copy) => { copy },
  defined(children) => { children },
  defined(newTab) => { newTab },
  defined(subItems) => { subItems[] {
    _key,
    defined(anchor) => { anchor },
    defined(className) => { className },
    defined(url) => { url },
    defined(anchorName) => { anchorName },
    defined(copy) => { copy },
    defined(internalLink) => { internalLink -> {
      slug
    } },
    defined(newTab) => { newTab },
  } },
  defined(internalLink) => { internalLink -> {
    _type,
    slug
  } }
`;

export const richTextContent = groq`
...,
_type == 'codeSnippet' => {
  ...
},
_type == 'generalEmbed' => {
  code
},
_type == 'videoEmbed' => {
  "featureVideo": featureVideo -> url,
  "poster": featureVideo -> poster
},
_type == 'link' => {
  ${linkObject}
},
_type == 'image' => {
  ${assetQuery()}
}
`;
