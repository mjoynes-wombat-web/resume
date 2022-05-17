const autoprefixer = require('autoprefixer');
const browserslist = require('browserslist');
const postCssFocus = require('postcss-focus');

module.exports = {
  siteMetadata: {
    title: 'Marwynn Joyne\'s Resume',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    // 'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          postCssFocus(),
          autoprefixer({ browsers: browserslist('IE >= 10') }),
        ],
      },
    },
  ],
};
