import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faGitHub from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import { faExternalLinkSquare as faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLinkSquare';

import { H2, P, ExternalLink } from './textElements';

const UnstyledProjectCard = ({
  className, heading, link, description,
}) => (
  <section className={className}>
    <H2>
      {heading}
    </H2>
    <ExternalLink href={link.site.href} target="_blank">
      <FontAwesomeIcon alt="Marwynn's Portfolio" icon={faExternalLink} />
      <span className="text">
        {link.site.text}
      </span>
      <span className="url">
        {`Site: ${link.site.href}`}
      </span>
    </ExternalLink>
    <div className="github-repos">
      {link.github.map(github => (
        <ExternalLink href={github.href} target="_blank">
          <FontAwesomeIcon alt="GitHub" icon={faGitHub} />
          <span className="text">
            {github.text}
          </span>
          <span className="url">
            {`Repo: ${github.href}`}
          </span>
        </ExternalLink>
      ))}
    </div>
    <P>
      {description}
    </P>
  </section>
);

UnstyledProjectCard.propTypes = {
  className: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.shape({
    site: PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
    }),
    github: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })),
  }).isRequired,
  description: PropTypes.string.isRequired,
};

const ProjectCard = Styled(UnstyledProjectCard)`
a{
  margin-right: 2rem;

  @media print {
    margin-right: 0;
  }
}

.github-repos {
  display: flex;

  @media print {
    display: initial;
  }
}
`;

export default ProjectCard;
