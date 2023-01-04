import { groq } from 'next-sanity';
import { linkObject } from './blockQueries/common';
import { imageQuery } from './imageQuery';

export const globalQuery = groq`
"global": {
  "site": *[_type == "globalSettings"][0] {
    siteTitle,
    defined(customIcon) => {"customIcon": customIcon -> customStyleCode.code},
    defined(iconImage) => {${imageQuery({ name: 'iconImage' })}},
    defined(defaultOgImage) => {defaultOgImage},
    siteDescription,
    siteTitle,
    socials,
    "alertBar": *[_type == "alertBar"][0] {
      _id,
      defined(content) => { content },
      defined(startDate) => { startDate },
      defined(endDate) => { endDate },
    },
    "contact": {
      defined(address) => {address},
      defined(address2) => {address2},
      defined(cityState) => {cityState},
      defined(zip) => {zip},
      defined(mainEmail) => {mainEmail},
      defined(mainPhone) => {mainPhone},
      defined(secondaryEmail) => {secondaryEmail},
      defined(secondaryPhone) => {secondaryPhone}
    },
  },
  "mainNavigation": *[_id == "mainNavigation"][0] {
    items[] {
      _key,
      link {
        ${linkObject}
      }
    }
  },
  "footerNavigation": *[_id == "footerNavigation"][0] {
    items[] {
      _key,
      link {
        ${linkObject}
      }
    }
  },
  "search": *[_type == "event" && date >= $today && !(_id in path("drafts.**")) || _type == "page" && !(_id in path("drafts.**")) || _type == "dataPage" && !(_id in path("drafts.**")) || _type == "project" && !(_id in path("drafts.**")) || _type == "post" && !(_id in path("drafts.**"))] {
    _id,
    _type,
    title,
    "slug": slug.current,
    defined(date) => { date },
    "mainImage": mainImage.asset -> url + "?w=300&h=300&fit=crop"
  }
}
`;
