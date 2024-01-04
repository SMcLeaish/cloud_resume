/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `sean mcleaish`,
    siteUrl: `https://seanmcleaish.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap",{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/wq-favicon-32x32.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-plugin-preload-fonts", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
     options: {
       "name": "blog",
       "path": "./content/blog"
     },
    __key: "md-blog"
    }]
};
