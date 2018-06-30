import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import {
  H2, H3, H4, P,
} from './textElements';

const UnstyledWorkCard = ({
  className,
  heading,
  title,
  dates,
  city,
  description,
}) => (
  <section className={className}>
    <H2>
      {heading}
    </H2>
    <H3>
      {title}
    </H3>
    {dates.map(date => (
      <H4 key={`${heading}${date}`}>
        {date}
      </H4>
    ))}
    <P>
      {city}
    </P>
    <P>
      {description}
    </P>
  </section>
);

UnstyledWorkCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const WorkCard = Styled(UnstyledWorkCard)`
`;

export default WorkCard;
