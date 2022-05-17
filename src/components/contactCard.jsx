import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faGitHub from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import { faExternalLinkSquare as faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLinkSquare';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { H2, P, ExternalLink } from './textElements';

const UnstyledContactCard = ({
  className,
  name,
  email,
  cell,
  linkedin,
  github,
  portfolio,
  contact,
}) => (
  <article id="contactCard" className={className}>
    <H2>
      {name}
    </H2>
    <section id="contactInfo">
      <ExternalLink href={`mailto:${email}`}>
        {email}
      </ExternalLink>
      <ExternalLink href={`tel:${cell}`}>
        {cell}
      </ExternalLink>
    </section>
    <section id="social">
      <ExternalLink href={linkedin} target="_blank">
        <span className="url">
          {linkedin}
        </span>
        <FontAwesomeIcon alt="LinkedIn" icon={faLinkedIn} />
      </ExternalLink>
      <ExternalLink href={github} target="_blank">
        <span className="url">
          {github}
        </span>
        <FontAwesomeIcon alt="GitHub" icon={faGitHub} />
      </ExternalLink>
      <ExternalLink href={portfolio} target="_blank">
        <span className="url">
          {portfolio}
        </span>
        <FontAwesomeIcon alt="Simeon's Portfolio" icon={faExternalLink} />
      </ExternalLink>
      <ExternalLink href={contact} className="no-print" target="_blank">
        <span className="url">
          {contact}
        </span>
        <FontAwesomeIcon alt="Send Message" icon={faEnvelope} />
      </ExternalLink>
    </section>
  </article>
);

UnstyledContactCard.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  email: PropTypes.string.isRequired,
  cell: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

const ContactCard = Styled(UnstyledContactCard)`
display: flex;
flex-direction: column;
align-items: flex-end;
text-align: right;
position: absolute;
right: 2rem;
top: 2rem;

h2 {
  margin: 0;
}

p, a {
  margin: 0.5rem 0;
}

a{
  transform-origin: center;
}

@media print {

  a {
    margin: 0.25rem 0;
  }
}

#social {
  display: flex;
  margin: 0.25rem 0;

  @media print {
    display: block;
  }
  a {
    display: inline-block;
    margin: 0 0 0 1rem;
    transform-origin: center;

    @media print {
      display: block;
      margin: 0.25rem 0;

      &.no-print {
        display: none;
      }
    }

    svg {
      transition: transform 0.5s;
      transform-origin: center;
      &:hover {
        transform: scale(1.125);
      }
    }

    span.url {
      display: none;
  
      @media print {
        display: initial;
        padding-right: 0.5rem;
      }
    }
  }
}

`;

export default ContactCard;
