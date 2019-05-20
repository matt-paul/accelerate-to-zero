module.exports = {
  siteMetadata: {
    title: `Accelerate to Zero`,
    description: `Allowing consumers and businesses to make better informed decisions through technology, data and design.`,
    author: `mp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project Swordfish`,
        short_name: `Fishfish`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/swordfish.inline.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-typescript-checker",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "accelerate-to-zero-static-website",
        acl: null,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}
