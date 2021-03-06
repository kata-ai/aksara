'use strict';

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Aksara',
    sidebarTitle: 'Aksara',
    description: 'Kata Design Language System',
    siteUrl: 'https://aksara.kata.ai',
    keywords: 'dls, design, design system, design system language',
    author: {
      name: 'Resi Respati',
      url: 'https://resir014.xyz',
      email: 'resi@kata.ai'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 702,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-top: 40px; margin-bottom: 40px;',
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://aksara.kata.ai'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Aksara',
        short_name: 'Aksara',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#f8fcff',
        background_color: '#f6f7f8'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID
      }
    },
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: ['X-Clacks-Overhead: GNU Natalie Nguyen']
      }
    }
  ]
};
