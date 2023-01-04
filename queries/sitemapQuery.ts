import { groq } from 'next-sanity';

export const sitemapQuery = groq`{
  "pages": *[_type in ["post", "page", "project", "dataPage", "postCategory"]] {
    _type == "post" => {
      "slug": '/blog/' + slug.current,
    },
    _type == "page" => {
      "slug": '/' + slug.current,
    },
    _type == "project" => {
      "slug": '/project/' + slug.current,
    },
    _type == "dataPage" => {
      "slug": '/' + slug.current,
    },
    _type == "postCategory" => {
      "slug": '/blog/category/' + slug.current,
    },
    _type,
    _updatedAt,
  },
  "authors": *[_type == "person" && _id in *[_type=="post"].authors[]._ref] {
    "slug": '/blog/author/' + slug.current,
    _type,
    _updatedAt,
  }
}`;
