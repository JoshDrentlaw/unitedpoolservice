require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `United Pool Service`,
    description: `United Pool Service has been family owned and operated for over 30 years. Get quality and experience with United Pool Service.`,
    author: `Josh Drentlaw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `united-pool-service`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cinzel', 'Cormorant Garamond:semibolditalics']
        },
        custom: {
          families: ['']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
