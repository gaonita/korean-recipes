/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata:{
    title:'Simply Recipes',
    description:'nice and clean recipes site',
    author:'@gaon',
    person:{name:'peter', age:32},
    simpleData:['item1', 'item2'],
    complexData:[{name:'peter', age:32},{name:'peter', age:32},],
  },   
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aibheomuj7wn`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Noto Sans KR",
              variants: ["300"],
            },
            {
              family: "Noto Sans KR",
              variants: ["400","500","600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
