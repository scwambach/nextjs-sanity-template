import React from 'react';
import { getClient } from '@utils';
import { sitemapQuery } from '@queries';
import dayjs from 'dayjs';

const createSitemap = (doc) => {
  const allPages = [...doc.pages, ...doc.authors];

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map(
        ({ slug, _updatedAt }) => `
          <url>
            <loc>${`${process.env.SITE_URL}${
              slug === '//' ? '/' : `${slug}/`
            }`}</loc>
            <lastmod>${_updatedAt}</lastmod>
            <priority>0.80</priority>
          </url>
      `
      )
      .join('')}
  </urlset>
  `;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const today = dayjs(new Date()).format('YYYY-MM-DD');
    const request = await getClient().fetch(sitemapQuery, {
      today,
    });

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(request));
    res.end();
  }
}

export default Sitemap;
