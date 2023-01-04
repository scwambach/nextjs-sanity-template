import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import {allPages, contactPage, globalSettings, posts, projects, resources} from './desk'
import EditIcon from 'part:@sanity/base/edit-icon'
import EyeIcon from 'part:@sanity/base/eye-icon'

const remoteURL = 'https://developersdonatingwork.vercel.app'
const localURL = 'http://localhost:3000'

const appUrl = window.location.hostname === 'localhost' ? localURL : remoteURL

const PreviewModule = ({url}) => (
  <div className="container" style={{height: '100%'}}>
    <iframe
      title="Preview"
      src={url}
      frameBorder={0}
      style={{width: '100%', height: '100%', overflow: 'hidden'}}
    />
  </div>
)

const WebPreview = ({document}) => {
  const previewUrl = `${appUrl}/${
    document.displayed._type === 'post'
      ? `blog/${document.displayed?.slug?.current}`
      : document.displayed?.slug?.current
  }?preview`
  return <PreviewModule document={document} url={previewUrl} />
}

export const getDefaultDocumentNode = ({schemaType}) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === 'page' || schemaType === 'post') {
    return S.document().views([S.view.form(), S.view.component(WebPreview).title('Preview')])
  }
}

export const viewArray = [
  S.view.form().icon(EditIcon),
  S.view.component(WebPreview).title('Web Preview').icon(EyeIcon),
]

export default () =>
  S.list().title('Base').items([allPages, contactPage, posts, projects, resources, globalSettings])
