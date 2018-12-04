'use strict';

const path = require('path');

// Regex to parse date and title from the filename
const BLOG_POST_SLUG_REGEX = /version-updates\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)$/;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout, date } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug && relativePath.includes('version-updates')) {
        // Generate final path + graphql fields for blog posts
        const match = BLOG_POST_SLUG_REGEX.exec(relativePath);
        if (match) {
          const year = match[1];
          const month = match[2];
          const day = match[3];

          const pubDate = date
            ? new Date(date)
            : new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day));

          console.log(year, month, day, date);

          // Blog posts are sorted by date and display the date in their header.
          createNodeField({
            node,
            name: 'date',
            value: pubDate.toJSON()
          });
        }
      }

      if (!slug) {
        if (relativePath === 'index.md') {
          // If we have homepage set in docs folder, use it.
          slug = '/';
        } else {
          slug = `/${relativePath.replace('.md', '')}/`;
        }
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: 'https://aksara.netlify.com/*',
    redirectInBrowser: true,
    isPermanent: true,
    toPath: 'https://aksara.kata.ai/:splat'
  });

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    });
  });
};
