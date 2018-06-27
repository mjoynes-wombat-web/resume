import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'normalize.css';
import './index.scss';

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <link href="https://fonts.googleapis.com/css?family=Markazi+Text:400,500|Roboto:300,300i,400" rel="stylesheet" />
    {children()}
  </main>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
