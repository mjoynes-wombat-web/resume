import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { H2, UList } from './textElements';

const UnstyledExpCard = ({ className, heading, list }) => (
  <section className={className}>
    <H2>
      {heading}
    </H2>
    <UList list={list} />
  </section>
);

UnstyledExpCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      main: PropTypes.string,
      subItems: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.shape({
          main: PropTypes.string,
          subItems: PropTypes.arrayOf(PropTypes.string),
        }),
        PropTypes.string,
      ])),
    }),
    PropTypes.string,
  ])).isRequired,
};

const ExpCard = Styled(UnstyledExpCard)`
`;

export default ExpCard;
