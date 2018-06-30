import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { H2, P, ExternalLink } from './textElements';

const UnstyledProjectCard = ({
  className, heading, link, description,
}) => (
  <section className={className}>
    <H2>
      {heading}
    </H2>
    <ExternalLink href={link.href} target="_blank">
      {link.text}
    </ExternalLink>
    <P>
      {description}
    </P>
  </section>
);

UnstyledProjectCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

const ProjectCard = Styled(UnstyledProjectCard)`
`;

export default ProjectCard;
