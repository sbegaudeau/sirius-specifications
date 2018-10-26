module.exports = {
  siteMetadata: {
    title: 'Sirius Specifications',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'sirius-specifications',
        short_name: 'sirius',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/sirius-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `specifications`,
        path: `${__dirname}/src/specifications`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
  ],
};
