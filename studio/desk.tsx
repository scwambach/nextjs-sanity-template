// @ts-nocheck
import {deskTool} from 'sanity/desk'
import {
  AiFillCompass,
  AiOutlineAlert,
  AiOutlineStar,
  AiOutlineProject,
  AiOutlineUser,
  AiOutlineForm,
} from '@meronex/icons/ai'
import {BsGear, BsBuilding, BsFillChatQuoteFill, BsCardText} from '@meronex/icons/bs'
import FdPageCopy from '@meronex/icons/fd/FdPageCopy'
import BisMap from '@meronex/icons/bi/BisMap'
import EnDocuments from '@meronex/icons/en/EnDocuments'
import OiImage from '@meronex/icons/oi/OiImage'
import GrResources from '@meronex/icons/gr/GrResources'
import MdLocalMovies from '@meronex/icons/md/MdLocalMovies'
import MdcMovieOpenOutline from '@meronex/icons/mdc/MdcMovieOpenOutline'
import EnGlobe from '@meronex/icons/en/EnGlobe'
import MdEvent from '@meronex/icons/md/MdEvent'
import {vars} from './env'

const {REMOTE_URL, LOCAL_URL} = vars

const appUrl = window.location.hostname === 'localhost' ? LOCAL_URL : REMOTE_URL

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

export const desk = deskTool({
  defaultDocumentNode: (S, {schemaType}) => {
    if (schemaType === 'page' || schemaType === 'post') {
      return S.document().views([S.view.form(), S.view.component(WebPreview).title('Preview')])
    }
  },
  structure: (S) =>
    S.list()
      .title('Base')
      .items([
        S.listItem()
          .title('All Pages')
          .child(S.documentTypeList('page').title('Pages'))
          .icon(FdPageCopy),
        S.listItem()
          .title('Contact Page')
          .child(S.document().schemaType('dataPage').documentId('contactPage'))
          .icon(BisMap),
        S.listItem()
          .title('Blog')
          .child(
            S.list()
              .title('Blog')
              .items([
                S.listItem()
                  .title('Blog Page')
                  .child(S.document().schemaType('dataPage').documentId('blogPage'))
                  .icon(FdPageCopy),
                S.listItem()
                  .title('Posts')
                  .child(S.documentTypeList('post').title('Posts'))
                  .icon(EnDocuments),
                S.listItem()
                  .title('Categories')
                  .child(S.documentTypeList('postCategory').title('Categories'))
                  .icon(AiOutlineStar),
              ])
          )
          .icon(EnDocuments),
        S.listItem()
          .title('Projects')
          .child(
            S.list()
              .title('Projects')
              .items([
                S.listItem()
                  .title('Projects Page')
                  .child(S.document().schemaType('dataPage').documentId('projectsPage'))
                  .icon(FdPageCopy),
                S.listItem()
                  .title('Projects')
                  .child(S.documentTypeList('project').title('Projects'))
                  .icon(AiOutlineProject),
              ])
          )
          .icon(AiOutlineProject),
        S.listItem()
          .title('Events')
          .child(
            S.list()
              .title('Events')
              .items([
                S.listItem()
                  .title('Events Page')
                  .child(S.document().schemaType('dataPage').documentId('eventsPage'))
                  .icon(FdPageCopy),
                S.listItem()
                  .title('Events')
                  .child(S.documentTypeList('event').title('Events'))
                  .icon(MdEvent),
              ])
          )
          .icon(MdEvent),
        S.listItem()
          .title('Resources')
          .child(
            S.list()
              .title('Resources')
              .items([
                // ************** SVGs
                S.listItem()
                  .title('SVG Library')
                  .child(S.documentTypeList('svg').title('SVG Library'))
                  .icon(OiImage),
                // ************** Videos
                S.listItem()
                  .title('Feature Videos')
                  .child(S.documentTypeList('video').title('Feature Videos'))
                  .icon(MdcMovieOpenOutline),
                S.listItem()
                  .title('Background Videos')
                  .child(S.documentTypeList('backgroundVideo').title('Background Videos'))
                  .icon(MdLocalMovies),
                // ************** People
                S.listItem()
                  .title('People')
                  .child(S.documentTypeList('person').title('People'))
                  .icon(AiOutlineUser),
                // ************** Affiliates
                S.listItem()
                  .title('Affiliates')
                  .child(S.documentTypeList('affiliate').title('Affiliates'))
                  .icon(BsBuilding),
                // ************** Quotes
                S.listItem()
                  .title('Quotes')
                  .child(S.documentTypeList('quote').title('Quotes'))
                  .icon(BsFillChatQuoteFill),
                // ************** Forms
                S.listItem()
                  .title('Forms')
                  .child(S.documentTypeList('form').title('Forms'))
                  .icon(AiOutlineForm),
                // ************** CTA Banners
                S.listItem()
                  .title('CTA Banners')
                  .child(S.documentTypeList('ctaBanner').title('CTA Banners'))
                  .icon(BsCardText),
              ])
          )
          .icon(GrResources),
        S.listItem()
          .title('Global Settings')
          .child(
            S.list()
              .title('Global Settings')
              .items([
                // ************** Site Settings
                S.listItem()
                  .title('Site Settings')
                  .child(S.document().schemaType('globalSettings').documentId('globalSettings'))
                  .icon(BsGear),
                // ************** Navigation
                S.listItem()
                  .title('Navigation')
                  .child(
                    S.list()
                      .title('Navigation')
                      .items([
                        S.listItem()
                          .title('Main Navigation')
                          .child(S.document().schemaType('navMenu').documentId('mainNavigation'))
                          .icon(AiFillCompass),
                      ])
                  )
                  .icon(AiFillCompass),
                // ************** Alert Bars
                S.listItem()
                  .title('Alert Bar')
                  .child(S.document().schemaType('alertBar').documentId('alertBar'))
                  .icon(AiOutlineAlert),
              ])
          )
          .icon(EnGlobe),
      ]),
})
